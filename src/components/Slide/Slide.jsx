import React from "react";
import PropTypes from "prop-types";
import * as S from "./Slide.style";
import Image from "../Image";

const Slide = ({ src, width, height, shape }) => {
  const slideStyle = {
    width,
    height,
    shape,
  };

  return (
    <S.SlideWrapper style={{ ...slideStyle }}>
      {/* 이미지 컴포넌트 넣기 */}
      <Image src={src} width={width} height={height} />
    </S.SlideWrapper>
  );
};

Slide.defaultProps = {
  width: "100%",
  height: "100%",
  shape: "square",
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shape: PropTypes.string,
};

export default Slide;
