import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Flux, Image, Text, ToggleButton } from "components";
import commentSvg from "assets/comment.svg";
import LikeButton from "components/LikeButton";
import { useSetRecoilState } from "recoil";
import { addLike, removeLike } from "recoil/post";
import S from "./MainGridCard.style";

const propTypes = {
  src: PropTypes.string.isRequired,
  textChildren: PropTypes.oneOfType([PropTypes.number, PropTypes.node]),
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.number,
  margin: PropTypes.number,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  likesNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  commentsNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLiked: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  textChildren: "여행지",
  textSize: "$c2",
  gap: 10,
  margin: 10,
  author: "user",
  createdAt: "",
  likesNum: 0,
  commentsNum: 0,
  isLiked: false,
};

const MainGridCard = ({
  src,
  textChildren,
  textSize,
  gap,
  margin,
  author,
  createdAt,
  likesNum,
  commentsNum,
  isLiked,
  id,
}) => {
  const { FluxRow, FluxCol } = Flux;
  const navigate = useNavigate();
  const addLikeState = useSetRecoilState(addLike);
  const removeLikeState = useSetRecoilState(removeLike);
  const wrapperStyle = {
    gap,
    margin,
  };

  const handleOnClick = () => {
    navigate(`/post/detail/${id}`);
  };
  const handleAddLike = (postId, data) => addLikeState({ postId, like: data });
  const handleRemoveLike = (postId, likeId) =>
    removeLikeState({ postId, likeId });

  return (
    <>
      <S.CardWrapper style={wrapperStyle}>
        <S.ImageDiv onClick={handleOnClick}>
          <Image src={src} width="100%" height={180} />
        </S.ImageDiv>
        <Text size={textSize} strong>
          {textChildren}
        </Text>
      </S.CardWrapper>
      <FluxRow padding="0 10px">
        <FluxCol span={9}>
          <Text size="$n1">
            {author} / {createdAt.formatDate()}
          </Text>
        </FluxCol>
        <FluxCol span={1.5}>
          <LikeButton
            id={id}
            isLiked={isLiked}
            likesNum={likesNum}
            onAddLike={handleAddLike}
            onRemoveLike={handleRemoveLike}
          />
        </FluxCol>
        <FluxCol span={1.5}>
          <ToggleButton textSize="$n1" text={commentsNum}>
            <Image src={commentSvg} width={15} height={15} />
          </ToggleButton>
        </FluxCol>
      </FluxRow>
    </>
  );
};

MainGridCard.propTypes = propTypes;
MainGridCard.defaultProps = defaultProps;

export default MainGridCard;
