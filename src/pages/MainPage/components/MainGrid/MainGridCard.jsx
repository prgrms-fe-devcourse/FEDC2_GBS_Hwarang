import PropTypes from "prop-types";
import React from "react";
import { Flux, Image, Text, ToggleButton } from "components";
import likesSvg from "assets/likes.svg";
import likesClickedSvg from "assets/likes_clicked.svg";
import commentSvg from "assets/comment.svg";
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
}) => {
  const { FluxRow, FluxCol } = Flux;
  const wrapperStyle = {
    gap,
    margin,
  };

  return (
    <>
      <S.CardWrapper style={wrapperStyle}>
        <S.ImageDiv>
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
          <ToggleButton
            disabled={false}
            onClick={() => console.log("Clicked")}
            replaceChildren={
              <Image
                src={likesClickedSvg}
                width={15}
                height={15}
                mode="contain"
              />
            }
            textSize="$n1"
            text={likesNum}
            initialState={isLiked}
          >
            <Image src={likesSvg} width={15} height={15} mode="contain" />
          </ToggleButton>
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
