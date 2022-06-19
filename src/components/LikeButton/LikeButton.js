import React from "react";
import likesSvg from "assets/likes.svg";
import { Image, ToggleButton } from "components";
import likesClickedSvg from "assets/likes_clicked.svg";
import PropTypes from "prop-types";

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
  const handleOnClick = () => {
    console.log(id);
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
      initialState={isLiked}
    >
      <Image src={likesSvg} width={15} height={15} mode="contain" />
    </ToggleButton>
  );
};

LikeButton.propTypes = propTypes;
LikeButton.defaultProps = defaultProps;

export default LikeButton;
