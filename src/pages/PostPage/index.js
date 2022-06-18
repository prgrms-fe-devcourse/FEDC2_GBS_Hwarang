/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  Input,
  Button,
  Text,
  ImageUploader,
  ToggleButton,
} from "components";
import Common from "styles/common";
import useLocalStorage from "hooks/useLocalStorage";
import { getChannels } from "api/post-api";
import { useLocation } from "react-router-dom";
import useHover from "hooks/useHover";
import { userInfo } from "recoil/user";
import { useRecoilValue } from "recoil";
import likesSvg from "assets/likes.svg";
import likesClickedSvg from "assets/likes_clicked.svg";
import commentSvg from "assets/comment.svg";
import {
  uploadImageToS3,
  deleteImageToS3,
  listFiles,
} from "utils/S3ImageHandler";
import S from "./PostPage.style";
import DetailData from "./data/detailData";
import EditData from "./data/editData";
import PlanForm from "./components/PlanForm";
import Select from "./components/Select";
import Option from "./components/SelectItem";

const propTypes = {};

const defaultProps = {};

const DefaultImage =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png";

const PostPage = () => {
  const getUser = useRecoilValue(userInfo);
  const { fullName } = getUser;
  const [tempData, setTempData, removeTempData] = useLocalStorage("post", {});
  const nextId = useRef(0);
  const [isHovering, handleMouseEnter, handleMouseLeave] = useHover({
    content: false,
    image: false,
  });
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const type = pathname[2];

  const getInitialData = () => {
    const hasTempData = Object.keys(tempData).length;
    const checkTempData = () => {
      // Todo: 왜 object가 아닐까?
      if (typeof checkTempData !== "function") {
        return false;
      }
      if (!("postId" in tempData) || typeof tempData.postId !== "string") {
        return false;
      }
      if (!("image" in tempData) || typeof tempData.image !== "string") {
        return false;
      }
      // Todo: 단순 string이 아닌 JSON.parse() 사용해서 deep하게 검사하기
      if (!("title" in tempData) || typeof tempData.title !== "string") {
        return false;
      }
      if (
        !("channelId" in tempData) ||
        typeof tempData.channelId !== "string"
      ) {
        return false;
      }
      if (!("author" in tempData) || typeof tempData.author !== "string") {
        return false;
      }
      return true;
    };

    if (type === "create") {
      if (hasTempData && checkTempData()) {
        if (window.confirm("저장된 데이터가 있습니다. 불러오시겠습니까?")) {
          return tempData;
        }
        return EditData;
      }
      return {
        title: '{"title":null,"plans":[]}',
        image: null,
        channelId: null,
      };
    }
    if (type === "edit") {
      if (hasTempData && checkTempData()) {
        if (window.confirm("저장된 데이터가 있습니다. 불러오시겠습니까?")) {
          return tempData;
        }
        return EditData;
      }
      // Todo: POST /posts/{postId}를 통해 받아오도록 수정
      return EditData;
    }
    if (type === "detail") {
      // Todo: POST /posts/{postId}를 통해 받아오도록 수정
      return DetailData;
    }
  };

  const [post, setPost] = useState({});
  const [channels, setChannels] = useState([]);
  // const [likeStatus, setLikeStatus] = useState(false);

  useEffect(() => {
    const initialData = getInitialData();
    const parse = JSON.parse(initialData.title);
    const postId = pathname[3];
    const loggedInUser = fullName;

    setPost({
      ...initialData,
      author: loggedInUser,
      postId,
      title: parse.title,
      plans: parse.plans,
    });
    nextId.current = parse.plans.length + 1;
  }, [fullName]);

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
      _id: nextId.current,
      image: DefaultImage,
      title: null,
      content: null,
    };
    setPost({ ...post, plans: [...post.plans, newPlan] });

    nextId.current += 1;
  };

  const removePlan = (id) => {
    setPost({
      ...post,
      plans: [...post.plans].filter((plan) => plan._id !== id),
    });
  };

  const removePlanImage = (id) => {
    setPost({
      ...post,
      plans: [...post.plans].map((plan) =>
        plan._id === parseInt(id, 10) ? { ...plan, image: DefaultImage } : plan
      ),
    });
  };

  const onChangeHandler = (id, name, value) => {
    // plans change handler
    if (id) {
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
    const processedPost = { ...post, title: JSON.stringify(merge) };
    delete processedPost.plans;
    return processedPost;
  };

  const temporarySave = () => {
    setTempData(mergePlans());
    // eslint-disable-next-line no-alert
    alert("임시저장 되었습니다.");
  };

  const registPost = () => {
    console.log(mergePlans());
    removeTempData();
    // Todo: processedPost 저장하기
  };

  // Todo: 낙관적 업데이트 진행
  const onImageChange = async (e) => {
    const { id } = e.target;

    if (e.target.files && e.target.files[0]) {
      if (id) {
        setPost({
          ...post,
          plans: [...post.plans].map((plan) =>
            plan._id === parseInt(id, 10)
              ? { ...plan, image: URL.createObjectURL(e.target.files[0]) }
              : plan
          ),
        });
        return;
      }
      setPost({ ...post, image: URL.createObjectURL(e.target.files[0]) });
      const result = await uploadImageToS3(e.target.files[0], "test");
      console.log(result);
      // const filepath =
      //   "test/https://mygbs.s3-ap-northeast-2.amazonaws.com/test/[object Object].jpeg";
      // const filepath = "test/[object Object].jpeg";
      // await deleteImageToS3(filepath, "test");
      await listFiles();
    }
  };

  // 데이터 불러오기전에 렌더링해줄 데이터
  if (Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  // console.log(post);
  return (
    <S.Container>
      <S.HeadeContainer
        name="image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image width="100%" height="100%" src={post.image || DefaultImage} />
        {type !== "detail" && (
          <S.ButtonWrapper isHovering={isHovering.image}>
            <ImageUploader
              onChange={onImageChange}
              width={200}
              height={60}
              backgroundColor="$white"
              color="$main"
              btnText="대표 사진 업로드"
              borderRadius={6}
              border
              useButton
            />
          </S.ButtonWrapper>
        )}
        {type === "detail" ? (
          <S.InnerWrapper position="left">
            <Text>{post.title}</Text>
          </S.InnerWrapper>
        ) : (
          <S.InnerWrapper position="left">
            <Input
              placeholder="일정 제목을 입력해주세요"
              defaultValue={post.title || null}
              onChange={(e) => onChangeHandler(null, "title", e.target.value)}
              width={500}
              useIcon={false}
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: 40,
                fontWeight: 600,
                color: `${Common.colors.gray04}`,
              }}
            />
          </S.InnerWrapper>
        )}
        <S.InnerWrapper position="right">
          {type === "detail" ? (
            <div style={{ display: "flex" }}>
              <ToggleButton
                disabled={false}
                onClick={() => {
                  console.log("Clicked!");
                }}
                replaceChildren={
                  <Image
                    src={likesClickedSvg}
                    width={20}
                    height={20}
                    mode="contain"
                  />
                }
                textSize="$c1"
                text={post.likes.length}
              >
                <Image src={likesSvg} width={20} height={20} mode="contain" />
              </ToggleButton>
              <ToggleButton textSize="$c1" text={post.comments.length}>
                <Image src={commentSvg} width={20} height={20} />
              </ToggleButton>
            </div>
          ) : (
            <Select
              channelId={post.channelId}
              onChangeHandler={onChangeHandler}
            >
              {channels &&
                channels.map((channel) => (
                  <Option
                    key={channel._id}
                    value={channel.name}
                    id={channel._id}
                  >
                    {channel.name}
                  </Option>
                ))}
            </Select>
          )}
        </S.InnerWrapper>
      </S.HeadeContainer>
      <S.ContentContainer>
        <S.Author>
          <Text strong>{post.author}님의 여행 일정</Text>
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
      <S.AddPlanContainer>
        <Button
          width={250}
          height={60}
          border
          backgroundColor="$white"
          color="$gray03"
          textSize="$b1"
          onClick={addPlan}
        >
          일정추가 +
        </Button>
      </S.AddPlanContainer>
      <S.ActionsContainer>
        <Button
          width={230}
          height={80}
          onClick={() => {
            registPost();
          }}
        >
          일정 등록
        </Button>
        <Button
          width={230}
          height={80}
          border
          backgroundColor="$white"
          color="$main"
          onClick={temporarySave}
        >
          임시저장
        </Button>
      </S.ActionsContainer>
    </S.Container>
  );
};

PostPage.propTypes = propTypes;
PostPage.defaultProps = defaultProps;

export default PostPage;
