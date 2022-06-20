import React from "react";
import likesSvg from "assets/likes.svg";
import { Image, ToggleButton } from "components";
import likesClickedSvg from "assets/likes_clicked.svg";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { jwtToken } from "recoil/authentication";
import { setLikePost, setUnLikePost } from "api/post-api";
import { getLikeId } from "recoil/post";
import { userInfo } from "recoil/user";

const propTypes = {
  id: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  likesNum: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSize: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  textColor: PropTypes.string,
  onAddLike: PropTypes.func.isRequired,
  onRemoveLike: PropTypes.func.isRequired,
};
const defaultProps = {
  isLiked: false,
  likesNum: 0,
  width: 15,
  height: 15,
  textSize: "$n1",
  style: {},
  textColor: "#000000",
};

const LikeButton = ({
  id,
  isLiked,
  likesNum,
  width,
  height,
  textSize,
  textColor,
  onAddLike,
  onRemoveLike,
  ...props
}) => {
  const token = useRecoilValue(jwtToken);
  const likeId = useRecoilValue(getLikeId(id));
  const userData = useRecoilValue(userInfo);

  const handleOnClick = async () => {
    try {
      const response = isLiked
        ? await setUnLikePost(likeId, token)
        : await setLikePost(id, userData._id, token);
      if (response && response.data) {
        const { data } = response;
        if (!isLiked) onAddLike(id, data);
        else onRemoveLike(id, likeId);
        return true;
      }
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <ToggleButton
      disabled={false}
      onClick={handleOnClick}
      replaceChildren={
        <Image
          src={likesClickedSvg}
          width={width}
          height={height}
          mode="contain"
        />
      }
      textSize={textSize}
      text={likesNum}
      textColor={textColor}
      initialState={token && isLiked}
      style={{ ...props.style }}
    >
      <Image src={likesSvg} width={width} height={height} mode="contain" />
    </ToggleButton>
  );
};

LikeButton.propTypes = propTypes;
LikeButton.defaultProps = defaultProps;

export default LikeButton;
