import React, { useState, useEffect } from "react";
import { Image, Text } from "components";
import useLocalStorage from "hooks/useLocalStorage";
import { getChannels, createPost, getPost, updatePost } from "api/post-api";
import { useLocation, useNavigate } from "react-router-dom";
import useHover from "hooks/useHover";
import { userInfo } from "recoil/user";
import { useRecoilValue } from "recoil";
import { uploadImageToS3, deleteImageToS3 } from "utils/S3ImageHandler";
import { jwtToken } from "recoil/authentication";
import { v4 } from "uuid";
import S from "./PostPage.style";
import PlanForm from "./components/PlanForm";
import CreateButton from "./components/CreateButton";
import ImageInner from "./components/ImageInner";

const propTypes = {};

const defaultProps = {};

const DefaultImage =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png";

const PostPage = () => {
  const token = useRecoilValue(jwtToken);
  const getUser = useRecoilValue(userInfo);
  const author = getUser.fullName;
  const navigate = useNavigate();
  const [tempData, setTempData, removeTempData] = useLocalStorage("post", {});
  const [isHovering, handleMouseEnter, handleMouseLeave] = useHover({
    content: false,
    image: false,
  });
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const type = pathname[2];
  const postId = pathname[3];

  const hasTempData = Object.keys(tempData).length;
  const checkTempData = () => {
    // Todo: 왜 object가 아닐까?
    if (typeof checkTempData !== "function") {
      return false;
    }
    if (type === "edit") {
      if (!("postId" in tempData) || typeof tempData.postId !== "string") {
        return false;
      }
    }
    if (!("image" in tempData)) {
      if (typeof tempData.image !== "string" || tempData.image !== null) {
        return false;
      }
    }
    // Todo: 단순 string이 아닌 JSON.parse() 사용해서 deep하게 검사하기
    if (!("title" in tempData)) {
      if (typeof tempData.title !== "string" || tempData.title !== null) {
        return false;
      }
    }
    if (!("channelId" in tempData)) {
      if (typeof tempData.channelId !== "string" || tempData.channel !== null) {
        return false;
      }
    }
    return true;
  };

  const [post, setPost] = useState({});
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "create") {
          if (hasTempData && checkTempData()) {
            // eslint-disable-next-line no-alert
            if (window.confirm("저장된 데이터가 있습니다. 불러오시겠습니까?")) {
              const parseTemp = JSON.parse(tempData.title);
              setPost({
                ...tempData,
                title: parseTemp.title,
                plans: parseTemp.plans,
              });
            } else {
              setPost({
                title: null,
                image: null,
                registImage: null,
                channelId: null,
                plans: [],
              });
            }
          } else {
            setPost({
              title: null,
              image: null,
              registImage: null,
              channelId: null,
              plans: [],
            });
          }
        } else {
          const response = await getPost(postId);
          const parse = JSON.parse(response.data.title);
          if (type === "edit") {
            if (hasTempData && checkTempData()) {
              if (
                // eslint-disable-next-line no-alert
                window.confirm("저장된 데이터가 있습니다. 불러오시겠습니까?")
              ) {
                const parseTemp = JSON.parse(tempData.title);
                setPost({
                  ...tempData,
                  title: parseTemp.title,
                  plans: parseTemp.plans,
                });
              } else {
                setPost({
                  ...response.data,
                  postId,
                  title: parse.title,
                  plans: parse.plans,
                  channelId: response.data.channel._id,
                });
              }
            } else {
              setPost({
                ...response.data,
                postId,
                title: parse.title,
                plans: parse.plans,
                channelId: response.data.channel._id,
              });
            }
          } else if (type === "detail") {
            setPost({
              ...response.data,
              title: parse.title,
              plans: parse.plans,
            });
          }
        }
      } catch (exception) {
        // eslint-disable-next-line no-console
        console.log("error", exception);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Todo: App.js로 빼서 recoil 사용하여 갖고오기?
    const fetchData = async () => {
      try {
        const response = await getChannels();
        setChannels(response.data);
      } catch (exception) {
        // eslint-disable-next-line no-console
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
    await deleteImageToS3(filepath);

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
    // eslint-disable-next-line no-alert
    alert("임시저장 되었습니다.");
  };

  const registPost = async () => {
    removeTempData();
    const mergeData = mergePlans();
    const { title, registImage, channelId } = mergeData;
    if (type === "create") {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", registImage);
      formData.append("channelId", channelId);
      await createPost(formData, token);
    }
    if (type === "edit") {
      const formData = new FormData();
      formData.append("postId", postId);
      formData.append("title", title);
      formData.append("image", registImage);
      formData.append("channelId", channelId);
      await updatePost(formData, token);
    }
    navigate(`/post/detail/${postId}`);
  };

  const onImageChange = async (e) => {
    const { id } = e.target;

    if (e.target.files && e.target.files[0]) {
      if (id) {
        const result = await uploadImageToS3(e.target.files[0]);
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
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.HeadeContainer
        name="image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.Cover />
        <Image width="100%" height="100%" src={post.image || DefaultImage} />
        <ImageInner
          type={type}
          isHovering={isHovering}
          onImageChange={onImageChange}
          post={post}
          onChangeHandler={onChangeHandler}
          channels={channels}
        />
      </S.HeadeContainer>
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
      {type !== "detail" && (
        <CreateButton
          addPlan={addPlan}
          registPost={registPost}
          temporarySave={temporarySave}
        />
      )}
    </S.Container>
  );
};

PostPage.propTypes = propTypes;
PostPage.defaultProps = defaultProps;

export default PostPage;
