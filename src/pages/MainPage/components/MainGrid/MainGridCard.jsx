import PropTypes from "prop-types";
import React from "react";
import Image from "components/Image";
import Text from "components/Text";
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
  textSize: "$c2",
  gap: 10,
  margin: 10,
};

const MainGridCard = ({ src, textChildren, textSize, gap, margin }) => {
  const wrapperStyle = {
    gap,
    margin,
  };

  return (
    <S.CardWrapper style={wrapperStyle}>
      <S.ImageDiv>
        <Image src={src} width="100%" height={180} />
      </S.ImageDiv>
      <Text size={textSize} strong>
        {textChildren}
      </Text>
    </S.CardWrapper>
  );
};

MainGridCard.propTypes = propTypes;
MainGridCard.defaultProps = defaultProps;

export default MainGridCard;
