import React from "react";
import PropTypes from "prop-types";
import * as S from "./Slide.style";
import Image from "../Image";

const Slide = ({ src, width, height }) => {
  return (
    <S.SlideWrapper className="hhh">
      <Image src={src} width={width} height={height} />
    </S.SlideWrapper>
  );
};

Slide.defaultProps = {
  width: "100%",
  height: "100%",
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Slide;
