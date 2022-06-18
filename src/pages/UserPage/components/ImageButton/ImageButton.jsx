import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useSetRecoilState, useRecoilValue } from "recoil";
import Icon from "components/Icon";
import Input from "components/Input";
import Image from "components/Image";
import { jwtToken } from "recoil/authentication";
import { profileImg, coverImg } from "recoil/user";
import { uploadCoverImage, uploadProfileImage } from "api/user-api";
import * as S from "./ImageButton.style";

const propType = {
  isCover: PropTypes.bool,
  isCoverHover: PropTypes.bool,
};

const defaultProp = {
  isCover: false,
  isCoverHover: false,
};

function ImageButton({ isCover, isCoverHover }) {
  const inputRef = useRef(null);
  const setProfileImg = useSetRecoilState(profileImg);
  const setCoverImg = useSetRecoilState(coverImg);
  const token = useRecoilValue(jwtToken);

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const imageSelect = async (e) => {
    const formData = new FormData();

    formData.append("image", e.target.files[0]);
    formData.append("isCover", isCover);

    if (isCover) {
      const result = await uploadCoverImage(formData, token);
      if (result.statusText === "OK") setCoverImg(result.data.coverImage);
    } else {
      const result = await uploadProfileImage(formData, token);
      if (result.statusText === "OK") setProfileImg(result.data.image);
    }
  };

  return (
    <S.ImageButtonWrapper isCover={isCover}>
      <Input
        type="file"
        accept="image/*"
        isFileUploadInput
        onChange={imageSelect}
        useIcon={false}
        ref={inputRef}
      />
      {isCover ? (
        <S.CameraWrapper onClick={handleClick}>
          {isCoverHover && (
            <Image
              src="https://mygbs.s3.ap-northeast-2.amazonaws.com/user/camera_hover.svg"
              width="100%"
              height="100%"
            />
          )}
        </S.CameraWrapper>
      ) : (
        <Icon onClick={handleClick} name="file_upload" fontSize={40} />
      )}
    </S.ImageButtonWrapper>
  );
}

ImageButton.propTypes = propType;
ImageButton.defaultProps = defaultProp;

export default ImageButton;
