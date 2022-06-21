import { Flux, Image, Text, ToggleButton } from "components";
import commentSvg from "assets/comment.svg";
import LikeButton from "components/LikeButton";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import S from "./PostListItem.style";

const propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.string,
  createdAt: PropTypes.string,
  commentsNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  likes: PropTypes.instanceOf(Array),
};

const defaultProps = {
  title: "여행지",
  textSize: "$b3",
  author: "user",
  createdAt: "",
  commentsNum: 0,
  likes: [],
};

const PostListItem = forwardRef(
  (
    { id, likes, src, title, textSize, author, createdAt, commentsNum },
    ref
  ) => {
    const { FluxRow, FluxCol } = Flux;

    return (
      <S.ItemWrapper ref={ref}>
        <S.createdTextWrapper>
          <Text size="$n1">{createdAt}</Text>
        </S.createdTextWrapper>
        <FluxRow gutter={20}>
          <FluxCol span={4}>
            <S.ImageWrapper>
              <Image src={src} width="100%" height="220px" />
            </S.ImageWrapper>
          </FluxCol>
          <FluxCol span={8}>
            <S.titleWrapper>
              <Text size={textSize} strong>
                {title}
              </Text>
              <Text size="$n1">작성자 : {author}</Text>
            </S.titleWrapper>
          </FluxCol>
        </FluxRow>
        <S.numWrapper>
          {/* <ToggleButton
            disabled={false}
            onClick={() => {
              console.log("Clicked!");
            }}
            replaceChildren={
              <Image
                src={likesClickedSvg}
                width={20}
                height={20}
                mode="contain"
              />
            }
            textSize="$c1"
            text={likesNum}
          >
            <Image src={likesSvg} width={20} height={20} mode="contain" />
          </ToggleButton> */}
          <LikeButton textSize="$c1" id={id} likes={likes} />
          <ToggleButton textSize="$c1" text={commentsNum}>
            <Image src={commentSvg} width={20} height={20} />
          </ToggleButton>
        </S.numWrapper>
      </S.ItemWrapper>
    );
  }
);

PostListItem.propTypes = propTypes;
PostListItem.defaultProps = defaultProps;

export default PostListItem;
