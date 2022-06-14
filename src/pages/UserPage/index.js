import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "components/Image";
import Avatar from "components/Avatar";
import Text from "components/Text";
import { userInfo, profileImg, coverImg } from "recoil/user";
import ImageButton from "./components/ImageButton";
import * as S from "./UserPage.style";

const FONT_COLOR = "$white";
const FONT_SIZE = 14;

function UserPage() {
  const myInfo = useRecoilValue(userInfo);
  const profile = useRecoilValue(profileImg);
  const cover = useRecoilValue(coverImg);

  const [profileImgHover, setProfileImgHover] = useState(false);

  return (
    <div>
      <S.ImageWrapper>
        <Image src={cover} width="100%" height={400} />
        <ImageButton isCover />
        <S.UserInfoWrapper>
          <div
            className="image-wrapper"
            onMouseEnter={() => setProfileImgHover(true)}
            onMouseLeave={() => setProfileImgHover(false)}
          >
            <Avatar src={profile} size={150} />
            {profileImgHover && (
              <>
                <ImageButton isCover={false} />
                <S.Dim />
              </>
            )}
          </div>
          <div className="text-wrapper">
            <Text color={FONT_COLOR}>{myInfo?.email || ""}</Text>
            <Text color="$black01">{myInfo?.fullName || ""}</Text>
          </div>
        </S.UserInfoWrapper>
        <S.ExtraInfoWrapper>
          <S.ExtraInfo>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              게시물
            </Text>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              {myInfo?.posts.length || 0}
            </Text>
          </S.ExtraInfo>
          <S.ExtraInfo>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              팔로잉
            </Text>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              {myInfo?.following.length || 0}
            </Text>
          </S.ExtraInfo>
          <S.ExtraInfo>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              팔로워
            </Text>
            <Text color={FONT_COLOR} size={FONT_SIZE}>
              {myInfo?.followers.length || 0}
            </Text>
          </S.ExtraInfo>
        </S.ExtraInfoWrapper>
      </S.ImageWrapper>
    </div>
  );
}

export default UserPage;
