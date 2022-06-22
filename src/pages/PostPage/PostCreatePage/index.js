/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Skeleton, Image, Text } from "components";
import { createPost, getChannels } from "api/post-api";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";
import { jwtToken } from "recoil/authentication";
import { uploadImageToS3, deleteImageToS3 } from "utils/S3ImageHandler";
import useLocalStorage from "hooks/useLocalStorage";
import { v4 } from "uuid";
import useHover from "hooks/useHover";
import S from "../PostPage.style";
import ImageInner from "../components/ImageInner";
import PlanForm from "../components/PlanForm";
import CreateButton from "../components/CreateButton";
import Loading from "../components/Loading";
import { hasTempData, checkTempData } from "../components/CheckTempData";

const DefaultImage =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png";

const PostCreatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const token = useRecoilValue(jwtToken);
  const getUser = useRecoilValue(userInfo);
  const author = getUser.fullName;
  const [tempData, setTempData, removeTempData] = useLocalStorage("post", {});
  const [isHovering, handleMouseEnter, handleMouseLeave] = useHover({
    content: false,
    image: false,
  });
  const [post, setPost] = useState({
    title: null,
    image: null,
    registImage: null,
    channelId: null,
    plans: [],
  });
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (hasTempData(tempData) && checkTempData(tempData, type)) {
      if (window.confirm("저장된 데이터가 있습니다. 불러오시겠습니까?")) {
        const parseTemp = JSON.parse(tempData.title);
        setPost({
          ...tempData,
          title: parseTemp.title,
          plans: parseTemp.plans,
        });
      }
      return;
    }
    setPost({
      title: null,
      image: DefaultImage,
      registImage: null,
      channelId: null,
      plans: [],
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getChannels();
        setChannels(response.data);
      } catch (exception) {
        console.log("error", exception);
      }
    };
    fetchData();
  }, []);

  const addPlan = () => {
    const newPlan = {
      _id: v4(),
      image: DefaultImage,
      title: null,
      content: null,
    };
    setPost({ ...post, plans: [...post.plans, newPlan] });
  };

  const removePlan = (id) => {
    setPost({
      ...post,
      plans: [...post.plans].filter((plan) => plan._id !== id),
    });
  };

  const removePlanImage = async (id) => {
    const index = post.plans.findIndex((plan) => plan._id === id);
    const filepath = post.plans[index].image.split(
      "https://mygbs.s3-ap-northeast-2.amazonaws.com/"
    )[1];
    await deleteImageToS3(filepath, "test");

    setPost({
      ...post,
      plans: [...post.plans].map((plan) =>
        plan._id === id ? { ...plan, image: DefaultImage } : plan
      ),
    });
  };

  const onChangeHandler = (id, name, value) => {
    // plans change handler
    if (id !== null) {
      setPost({
        ...post,
        plans: [...post.plans].map((plan) =>
          plan._id === id ? { ...plan, [name]: value } : plan
        ),
      });
      return;
    }
    // others change handler
    setPost({
      ...post,
      [name]: value,
    });
  };

  const mergePlans = () => {
    const merge = {
      title: post.title,
      plans: post.plans,
    };

    const processedPost = {
      ...post,
      title: JSON.stringify(merge),
    };
    delete processedPost.plans;
    return processedPost;
  };

  const temporarySave = () => {
    setTempData(mergePlans());
    alert("임시저장 되었습니다.");
  };

  const registPost = async () => {
    window.scrollTo({ top: 0 });
    removeTempData();
    const mergeData = mergePlans();
    const { title, registImage, channelId } = mergeData;

    if (channelId === null) {
      alert("채널을 선택해주세요");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", registImage);
    formData.append("channelId", channelId);

    setLoading(true);
    const res = await createPost(formData, token);
    if (res.status === 200) {
      setLoading(false);
      alert("작성이 완료되었습니다.");
      navigate(`/post/detail/${res.data._id}`);
      return;
    }
    setLoading(false);
  };

  const onImageChange = async (e) => {
    const { id } = e.target;

    if (e.target.files && e.target.files[0]) {
      if (id) {
        setPost({
          ...post,
          plans: [...post.plans].map((plan) =>
            plan._id === id
              ? { ...plan, image: URL.createObjectURL(e.target.files[0]) }
              : plan
          ),
        });

        const result = await uploadImageToS3(e.target.files[0], "test");
        const imageUrl = result.location;
        setPost({
          ...post,
          plans: [...post.plans].map((plan) =>
            plan._id === id ? { ...plan, image: imageUrl } : plan
          ),
        });
        return;
      }

      setPost({
        ...post,
        image: URL.createObjectURL(e.target.files[0]),
        registImage: e.target.files[0],
      });
    }
  };

  if (Object.keys(post).length === 0) {
    return (
      <S.Container>
        <S.HeaderContainer>
          <Skeleton.Box width={1340} height={550} />
        </S.HeaderContainer>
      </S.Container>
    );
  }

  console.log(post);

  return (
    <S.Container>
      {loading && <Loading />}
      <S.HeaderContainer
        name="image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.Dim />
        <Image width="100%" height="100%" src={post.image} />
        <ImageInner
          type={type}
          isHovering={isHovering}
          onImageChange={onImageChange}
          post={post}
          onChangeHandler={onChangeHandler}
          channels={channels}
        />
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Author>
          <Text strong>{author}님의 여행 일정</Text>
        </S.Author>
        <S.ContentList>
          <S.Line
            style={{ height: `calc(${post.plans.length - 1} * 228px)` }}
          />
          {post.plans &&
            post.plans.map((plan) => (
              <PlanForm
                key={plan._id}
                plan={plan}
                type={type}
                onChangeHandler={onChangeHandler}
                removePlan={removePlan}
                onImageChange={onImageChange}
                removePlanImage={removePlanImage}
              />
            ))}
        </S.ContentList>
      </S.ContentContainer>
      <S.CommentWrapper>
        <CreateButton
          addPlan={addPlan}
          registPost={registPost}
          temporarySave={temporarySave}
        />
      </S.CommentWrapper>
    </S.Container>
  );
};

export default PostCreatePage;
