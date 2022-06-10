import PropTypes from "prop-types";
import React from "react";
import Image from "../../../../components/Image";
import Common from "../../../../styles/common";
import S from "./MainGridCard.style";

const propTypes = {
  src: PropTypes.string.isRequired,
  textChildren: PropTypes.oneOfType([PropTypes.number, PropTypes.node]),
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.number,
  margin: PropTypes.number,
};

const defaultProps = {
  textChildren: "여행지",
  textSize: "b3",
  gap: 10,
  margin: 10,
};

const MainGridCard = ({ src, textChildren, textSize, gap, margin }) => {
  const wrapperStyle = {
    gap,
    margin,
  };

  const textStyle = {
    fontSize:
      typeof textSize === "number" ? textSize : Common.fontSize[textSize],
  };

  return (
    <S.CardWrapper style={wrapperStyle}>
      <S.ImageDiv>
        <Image src={src} width="100%" height="100%" />
      </S.ImageDiv>
      <S.TextDiv style={textStyle}>{textChildren}</S.TextDiv>
    </S.CardWrapper>
  );
};

MainGridCard.propTypes = propTypes;
MainGridCard.defaultProps = defaultProps;

export default MainGridCard;
