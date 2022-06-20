import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  Avatar,
  PostList,
  Button,
  Icon,
  Modal,
  PrivateRoute,
} from "components";
import { useParams, useNavigate } from "react-router-dom";
import { jwtToken, loginStatus } from "recoil/authentication";
import { useRecoilValue, useSetRecoilState, useRecoilCallback } from "recoil";
import { userInfo } from "recoil/user";
import { unSeenNotifications } from "recoil/notification";
import { getPostByUserId } from "api/post-api";
import { DEFAULT_COVER_IMAGE, DEFAULT_PROFILE_IMAGE } from "api/url";
import { getUserInfoById, followUser, unFollowUser } from "api/user-api";
import { createAlarm, getAlarms } from "api/alarm-api";
import ImageButton from "./components/ImageButton";
import NoPostWrapper from "./components/NoPostList";
import FollowButton from "./components/FollowButton";
import * as S from "./UserPage.style";
import { ModifyUserName, ModifyPassword } from "./components/ModifyUserInfo";

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
  const [FollowAuthTrigger, setFollowAuthTrigger] = useState(false);
  const [myPost, setMyPost] = useState([]);

  // yeoonju-jane 사용자 정보 변경
  const [showModifyUserNameModal, setShowModifyUserNameModel] = useState(false);
  const [showModifyPasswordModal, setModifyPasswordModal] = useState(false);

  const myInfo = useRecoilValue(userInfo);
  const isLogin = useRecoilValue(loginStatus);
  const setMyInfo = useSetRecoilState(userInfo);
  const token = useRecoilValue(jwtToken);

  const updateNotifications = useRecoilCallback(({ set }) => async () => {
    const res = await getAlarms(token);
    set(unSeenNotifications, res.data);
  });

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
      const newPosts = res.data.map((post) => ({
        ...post,
        content: JSON.parse(post.title),
        title: null,
      }));
      setMyPost(newPosts);
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
      setIsFollowing(isFollow);
    }
  }, [ID, myInfo, isOwner]);

  const handleFollowClick = async (id) => {
    if (!id) return;
    const res = await followUser(id, token);
    return res.data;
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
    setFollowAuthTrigger(true);

    if (!isLogin) return;

    if (isFollow) await handleUnFollowClick(id);
    else {
      const followResult = await handleFollowClick(id);
      if (followResult) {
        await createAlarm(
          "FOLLOW",
          followResult._id,
          followResult.user,
          null,
          token
        );
        await updateNotifications();
      }
    }
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
            <S.UserNameWrapper>
              <Text color="$black01" strong>
                {userData?.fullName || ""}
              </Text>
              <Icon
                name="edit"
                style={{ marginLeft: 10 }}
                onClick={() => setShowModifyUserNameModel(true)}
              />
            </S.UserNameWrapper>
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
            <PrivateRoute
              trigger={FollowAuthTrigger}
              setTrigger={setFollowAuthTrigger}
              isAutoTrigger={false}
            >
              <FollowButton
                handleClick={() => handleButtonClick(ID, isFollowing)}
                isUnFollow={isLogin && isFollowing}
              />
            </PrivateRoute>
          )}
          {isOwner && (
            <Button onClick={() => setModifyPasswordModal(true)}>
              비밀번호 변경
            </Button>
          )}
        </S.FollowBlock>
      </S.ImageWrapper>
      <S.Main>
        {myPost?.length > 0 ? (
          <PostList
            data={myPost}
            listTitle={`${userData?.fullName}의 여행 리스트`}
          />
        ) : (
          // eslint-disable-next-line
          <NoPostWrapper isOwner={isOwner} />
        )}
        <Modal
          visible={showModifyUserNameModal}
          onClose={() => setShowModifyUserNameModel(false)}
          height="auto"
        >
          <ModifyUserName
            token={token}
            user={userData}
            onClose={() => setShowModifyUserNameModel(false)}
          />
        </Modal>
        <Modal
          visible={showModifyPasswordModal}
          onClose={() => setModifyPasswordModal(false)}
          height="auto"
        >
          <ModifyPassword
            token={token}
            user={userData}
            onClose={() => setModifyPasswordModal(false)}
          />
        </Modal>
      </S.Main>
    </>
  );
}

export default UserPage;
