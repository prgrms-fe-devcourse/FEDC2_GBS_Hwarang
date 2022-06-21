import React, { useEffect, useRef, useState } from "react";
import likesSvg from "assets/likes.svg";
import { Image, ToggleButton } from "components";
import likesClickedSvg from "assets/likes_clicked.svg";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { jwtToken } from "recoil/authentication";
import { setLikePost, setUnLikePost } from "api/post-api";
import { userInfo } from "recoil/user";
import { addLike, removeLike } from "recoil/post";

const propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.instanceOf(Array),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSize: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  textColor: PropTypes.string,
};
const defaultProps = {
  likes: [],
  width: 15,
  height: 15,
  textSize: "$n1",
  style: {},
  textColor: "#000000",
};

const LikeButton = ({
  id,
  likes,
  width,
  height,
  textSize,
  textColor,
  ...props
}) => {
  const token = useRecoilValue(jwtToken);
  const userData = useRecoilValue(userInfo);
  const addLikeState = useSetRecoilState(addLike);
  const removeLikeState = useSetRecoilState(removeLike);

  const [likeId, setLikeId] = useState(null);
  const [likeNum, setLikeNum] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const isLoad = useRef(false);

  const handleOnClick = async () => {
    if (isLoad.current) return;
    try {
      isLoad.current = true;
      const response = isLiked
        ? await setUnLikePost(likeId, token)
        : await setLikePost(id, userData._id, token);
      if (response && response.data) {
        const { data } = response;
        if (!isLiked) {
          setLikeNum((pre) => pre + 1);
          setLikeId(data._id);
          addLikeState({ postId: id, like: data });
        } else {
          setLikeNum((pre) => pre - 1);
          removeLikeState({ postId: id, likeId });
        }
        setIsLiked((pre) => !pre);
        isLoad.current = false;
        return true;
      }
    } catch (exception) {
      console.error(exception);
    }
  };

  useEffect(() => {
    setLikeNum(likes.length);
    const liked = likes.filter((like) => like.user === userData._id);

    setIsLiked(liked.length > 0);
    setLikeId(liked.length > 0 ? liked[0]._id : null);
  }, [likes, userData]);

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
      text={likeNum}
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
