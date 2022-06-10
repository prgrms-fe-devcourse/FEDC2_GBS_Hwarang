import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Slide.style";
// import ImageComponent from "../ImageComponent";

const Slide = ({
  lazy,
  threshold,
  placeholder,
  src,
  width,
  height,
  shape,
  alt,
  mode,
  block,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <S.SlideWrapper {...props} shape={shape}>
      {/* 이미지 컴포넌트 넣기 */}
      <img
        block="true"
        lazy="false"
        threshold={threshold}
        width={width}
        height={height}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </S.SlideWrapper>
  );
};

Slide.defaultProps = {
  lazy: false,
  threshold: 0.5,
  placeholder: "https://via.placeholder.com/300",
  width: "100%",
  height: 300,
  shape: "square",
  alt: "Image",
  mode: "cover",
  block: true,
};

Slide.propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shape: PropTypes.string,
  alt: PropTypes.string,
  mode: PropTypes.string,
  block: PropTypes.bool,
};

export default Slide;
