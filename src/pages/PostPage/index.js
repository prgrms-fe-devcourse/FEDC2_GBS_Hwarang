/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { Image, Text, Comment, Skeleton } from "components";
import useLocalStorage from "hooks/useLocalStorage";
import {
  getChannels,
  createPost,
  getPost,
  updatePost,
  removePost,
} from "api/post-api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import Loading from "./components/Loading";

const propTypes = {};

const defaultProps = {};

const DefaultImage =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png";

const PostPage = () => {
  const token = useRecoilValue(jwtToken);
  const getUser = useRecoilValue(userInfo);
  const author = getUser.fullName;
  const userId = getUser._id;
  const navigate = useNavigate();
  const [tempData, setTempData, removeTempData] = useLocalStorage("post", {});
  const [isHovering, handleMouseEnter, handleMouseLeave] = useHover({
    content: false,
    image: false,
  });
  const params = useParams();
  const [postId, setPostId] = useState(params?.ID || "");
  const location = useLocation();
  const [type, setType] = useState(location.pathname.split("/")[2]);

  const hasTempData = Object.keys(tempData).length;
  const checkTempData = () => {
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
  const [comments, setComments] = useState([]);
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(post).length !== 0) {
      if (type === "edit" && post.author._id !== userId) {
        alert("잘못된 접근입니다.");
        navigate("/");
      }
    }
  }, [post]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "create") {
          if (hasTempData && checkTempData()) {
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
          if (!response.data) {
            alert("존재하지 않는 게시글 입니다.");
            navigate("/");
          }
          const parse = JSON.parse(response.data.title);
          if (type === "edit") {
            if (hasTempData && checkTempData()) {
              if (
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
            setComments(response.data.comments);
          }
        }
      } catch (exception) {
        console.log("error", exception);
      }
    };
    const pathname = location.pathname.split("/");
    setType(pathname[2]);
    setPostId(params?.ID || pathname[3] || "");
    fetchData();
  }, [location, params?.id, type]);

  useEffect(() => {
    // Todo: App.js로 빼서 recoil 사용하여 갖고오기?
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
    if (type === "create") {
      setLoading(true);
      if (channelId === null) {
        alert("채널을 선택해주세요");
        return;
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", registImage);
      formData.append("channelId", channelId);
      const res = await createPost(formData, token);
      if (res.status === 200) {
        alert("작성이 완료되었습니다.");
        navigate(`/post/detail/${res.data._id}`);
        setLoading(false);
      }
    }
    if (type === "edit") {
      setLoading(true);
      if (channelId === null) {
        alert("채널을 선택해주세요");
        return;
      }
      const formData = new FormData();
      formData.append("postId", postId);
      formData.append("title", title);
      formData.append("image", registImage);
      formData.append("channelId", channelId);
      const res = await updatePost(formData, token);
      if (res.status === 200) {
        alert("수정이 완료되었습니다.");
        navigate(`/post/detail/${postId}`);
        setLoading(false);
      }
    }
  };

  const deletePost = async () => {
    const res = await removePost(postId, token);
    if (res.status === 200) {
      alert("삭제가 완료되었습니다.");
      navigate("/travel-destination/all");
    }
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

  return (
    <S.Container>
      {/* {loading && <Loading />} */}
      <S.HeaderContainer
        name="image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.Dim />
        <Image width="100%" height="100%" src={post.image || DefaultImage} />
        <ImageInner
          type={type}
          isHovering={isHovering}
          onImageChange={onImageChange}
          post={post}
          onChangeHandler={onChangeHandler}
          channels={channels}
          userId={userId}
          deletePost={deletePost}
          likes={post?.likes}
        />
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Author>
          {type === "detail" ? (
            <Text strong>{post.author?.fullName}님의 여행 일정</Text>
          ) : (
            <Text strong>{author}님의 여행 일정</Text>
          )}
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
      {type === "detail" && (
        <S.CommentWrapper>
          <Comment
            postId={postId}
            comments={comments}
            userId={userId}
            setComments={setComments}
          />
        </S.CommentWrapper>
      )}
    </S.Container>
  );
};

PostPage.propTypes = propTypes;
PostPage.defaultProps = defaultProps;

export default PostPage;
