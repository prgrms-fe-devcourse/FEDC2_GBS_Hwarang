import React from "react";
import likesSvg from "assets/likes.svg";
import { Image, ToggleButton } from "components";
import likesClickedSvg from "assets/likes_clicked.svg";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { jwtToken } from "recoil/authentication";
import { setLikePost, setUnLikePost } from "api/post-api";
import { addLike, getLikeId } from "recoil/post";

const propTypes = {
  id: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  likesNum: PropTypes.number,
};
const defaultProps = {
  isLiked: false,
  likesNum: 0,
};

const LikeButton = ({ id, isLiked, likesNum }) => {
  const token = useRecoilValue(jwtToken);
  const likeId = useRecoilValue(getLikeId(id));
  const setLike = useSetRecoilState(addLike);

  const handleOnClick = async () => {
    try {
      const response = isLiked
        ? await setUnLikePost(likeId, token)
        : await setLikePost(id, token);
      if (response && response.data) {
        // setLiked((pre) => !pre);
        const { data } = response;
        if (!isLiked) setLike({ postId: id, like: data });
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
        <Image src={likesClickedSvg} width={15} height={15} mode="contain" />
      }
      textSize="$n1"
      text={likesNum}
      initialState={token && isLiked}
    >
      <Image src={likesSvg} width={15} height={15} mode="contain" />
    </ToggleButton>
  );
};

LikeButton.propTypes = propTypes;
LikeButton.defaultProps = defaultProps;

export default LikeButton;
