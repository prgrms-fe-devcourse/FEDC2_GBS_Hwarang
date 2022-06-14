import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Avatar.style";
import ImageComponent from "../Image";
import AvatarGroup from "./AvatarGroup";

const propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  shape: PropTypes.string,
  mode: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

const defaultProps = {
  lazy: false,
  threshold: 0.5,
  placeholder: "https://via.placeholder.com/300",
  size: 70,
  alt: "Image",
  shape: "circle",
  mode: "cover",
  style: {},
};

const Avatar = ({
  lazy,
  threshold,
  src,
  placeholder,
  size,
  alt,
  shape,
  mode = "cover",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <S.AvatarWrapper shape={shape} style={{ ...props.style }} {...props}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </S.AvatarWrapper>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

Avatar.Group = AvatarGroup;

export default Avatar;
