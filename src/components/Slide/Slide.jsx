import React from "react";
import PropTypes from "prop-types";
import * as S from "./Slide.style";
import Image from "../Image";

const Slide = ({ src }) => {
  return (
    <S.SlideWrapper>
      <Image
        src={src}
        width="100%"
        height="auto"
        style={{ display: "block" }}
      />
    </S.SlideWrapper>
  );
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Slide;
