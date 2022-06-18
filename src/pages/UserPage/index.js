import React, { useState, useEffect } from "react";
import { Image, Text, Avatar, PostList } from "components";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { jwtToken } from "recoil/authentication";
import { userInfo } from "recoil/user";
import { getPostByUserId } from "api/post-api";
import { getUserInfoById, followUser, unFollowUser } from "api/user-api";
import ImageButton from "./components/ImageButton";
import NoPostWrapper from "./components/NoPostList";
import FollowButton from "./components/FollowButton";
import * as S from "./UserPage.style";

const FONT_COLOR = "$white";
const FONT_SIZE = 14;

function UserPage() {
  const { ID } = useParams();
  const navigate = useNavigate();
  const [isOwner, setIsOwner] = useState(false);
  const [userData, setUserData] = useState({});
  const [profileImgHover, setProfileImgHover] = useState(false);
  const [coverImageHover, setCoverImageHover] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [myPost, setMyPost] = useState([]);

  const myInfo = useRecoilValue(userInfo);
  const setMyInfo = useSetRecoilState(userInfo);
  const token = useRecoilValue(jwtToken);

  const getUserData = async (id) => {
    if (!id) return;
    const res = await getUserInfoById(id);
    setUserData(res.data);
  };

  useEffect(() => {
    if (ID) {
      getUserData(ID);
      // eslint-disable-next-line
      setIsOwner(myInfo._id === ID);
    } else {
      alert("error!");
      navigate("/");
    }
  }, [ID, myInfo]);

  useEffect(() => {
    const getMyPost = async (id) => {
      const res = await getPostByUserId(id);
      setMyPost(res.data);
    };
    if (userData) {
      // eslint-disable-next-line
      getMyPost(userData._id);
    }
  }, [userData]);

  useEffect(() => {
    if (myInfo.following && !isOwner) {
      const isFollow =
        myInfo.following.filter((follower) => follower.user === ID).length >= 1;
      console.log(isFollow);
      setIsFollowing(isFollow);
    }
  }, [ID, myInfo, isOwner]);

  const handleFollowClick = async (id) => {
    if (!id) return;
    await followUser(id, token);
  };

  const handleUnFollowClick = async (id) => {
    if (!id) return;

    const unFollowId = myInfo.following.find(
      (follower) => follower.user === id
    )._id;

    if (!unFollowId) return;

    await unFollowUser(unFollowId, token);
  };

  const handleButtonClick = async (id, isFollow) => {
    if (isFollow) await handleUnFollowClick(id);
    else await handleFollowClick(id);
    // refetch data
    await getUserData(id);

    const newMyData = await getUserInfoById(myInfo._id);

    setMyInfo(newMyData.data);

    // setIsFollowing((prev) => !prev);
  };

  return (
    <>
      <S.ImageWrapper>
        <div
          onMouseEnter={() => setCoverImageHover(true)}
          onMouseLeave={() => setCoverImageHover(false)}
        >
          <Image
            src={
              userData.coverImage ? userData.coverImage : DEFAULT_COVER_IMAGE
            }
            width="100%"
            height={400}
          />
          {isOwner && <ImageButton isCover isCoverHover={coverImageHover} />}
        </div>
        <S.UserInfoWrapper>
          <div
            className="image-wrapper"
            onMouseEnter={() => setProfileImgHover(true)}
            onMouseLeave={() => setProfileImgHover(false)}
          >
            <Avatar
              src={userData.image ? userData.image : DEFAULT_PROFILE_IMAGE}
              size={150}
            />
            {isOwner && profileImgHover && (
              <>
                <ImageButton isCover={false} />
                <S.Dim />
              </>
            )}
          </div>
          <div className="text-wrapper">
            <Text color={FONT_COLOR} strong size={FONT_SIZE}>
              {userData?.email || ""}
            </Text>
            <Text color="$black01" strong>
              {userData?.fullName || ""}
            </Text>
          </div>
        </S.UserInfoWrapper>
        <S.ExtraInfoWrapper>
          <S.ExtraInfo>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              게시물
            </Text>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              {myPost?.length || 0}
            </Text>
          </S.ExtraInfo>
          <S.ExtraInfo>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              팔로잉
            </Text>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              {userData?.following?.length || 0}
            </Text>
          </S.ExtraInfo>
          <S.ExtraInfo>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              팔로워
            </Text>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              {userData?.followers?.length || 0}
            </Text>
          </S.ExtraInfo>
        </S.ExtraInfoWrapper>
        <S.FollowBlock>
          {!isOwner && (
            <FollowButton
              handleClick={() => handleButtonClick(ID, isFollowing)}
              isUnFollow={isFollowing}
            />
          )}
        </S.FollowBlock>
      </S.ImageWrapper>
      <S.Main>
        {myPost?.length ? (
          <PostList
            data={myPost}
            listTitle={`${userData?.fullName}의 여행 리스트`}
          />
        ) : (
          // eslint-disable-next-line
          <NoPostWrapper isOwner={isOwner} />
        )}
      </S.Main>
    </>
  );
}

export default UserPage;
