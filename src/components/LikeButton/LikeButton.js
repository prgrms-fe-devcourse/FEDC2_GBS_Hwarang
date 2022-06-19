import React from "react";
import likesSvg from "assets/likes.svg";
import { Image, ToggleButton } from "components";
import likesClickedSvg from "assets/likes_clicked.svg";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { jwtToken } from "recoil/authentication";
import { setLikePost, setUnLikePost } from "api/post-api";
import { addLike, getLikeId, removeLike } from "recoil/post";

const propTypes = {
  id: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  likesNum: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSize: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};
const defaultProps = {
  isLiked: false,
  likesNum: 0,
  width: 15,
  height: 15,
  textSize: "$h1",
  style: {},
};

const LikeButton = ({
  id,
  isLiked,
  likesNum,
  width,
  height,
  textSize,
  ...props
}) => {
  const token = useRecoilValue(jwtToken);
  const likeId = useRecoilValue(getLikeId(id));
  const addLikeState = useSetRecoilState(addLike);
  const removeLikeState = useSetRecoilState(removeLike);

  const handleOnClick = async () => {
    try {
      const response = isLiked
        ? await setUnLikePost(likeId, token)
        : await setLikePost(id, token);
      if (response && response.data) {
        const { data } = response;
        if (!isLiked) addLikeState({ postId: id, like: data });
        else removeLikeState({ postId: id, likeId });
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
