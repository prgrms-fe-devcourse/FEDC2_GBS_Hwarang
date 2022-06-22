/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { Skeleton, Image, Text, Comment } from "components";
import { useNavigate, useLocation } from "react-router-dom";
import { getPost, removePost } from "api/post-api";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";
import { jwtToken } from "recoil/authentication";
import ImageInner from "../components/ImageInner";
import PlanForm from "../components/PlanForm";
import S from "../PostPage.style";

const DefaultImage =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png";

const PostDetailPage = () => {
  const getUser = useRecoilValue(userInfo);
  const token = useRecoilValue(jwtToken);
  const userId = getUser._id;
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const postId = location.pathname.split("/")[3];
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPost(postId);
        if (!response.data) {
          alert("존재하지 않는 게시글 입니다.");
          navigate("/");
          return;
        }

        const parse = JSON.parse(response.data.title);
        setPost({
          ...response.data,
          title: parse.title,
          plans: parse.plans,
        });
        setComments(response.data.comments);
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchData();
  }, []);

  const deletePost = async () => {
    const res = await removePost(postId, token);
    if (res.status === 200) {
      alert("삭제가 완료되었습니다.");
      navigate("/travel-destination/all");
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
      <S.HeaderContainer>
        <S.Dim />
        <Image width="100%" height="100%" src={post.image || DefaultImage} />
        <ImageInner
          type={type}
          post={post}
          userId={userId}
          deletePost={deletePost}
          likes={post.likes}
        />
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Author>
          <Text strong>{post.author.fullName}님의 여행 일정</Text>
        </S.Author>
        <S.ContentList>
          <S.Line
            style={{ height: `calc(${post.plans.length - 1} * 228px)` }}
          />
          {post.plans &&
            post.plans.map((plan) => (
              <PlanForm key={plan._id} plan={plan} type={type} />
            ))}
        </S.ContentList>
      </S.ContentContainer>
      <S.CommentWrapper>
        <Comment
          postId={postId}
          comments={comments}
          userId={userId}
          setComments={setComments}
        />
      </S.CommentWrapper>
    </S.Container>
  );
};

export default PostDetailPage;
