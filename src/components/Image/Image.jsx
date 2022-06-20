import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

const propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired, // 필수
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string,
  block: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
};

const defaultProps = {
  lazy: false,
  threshold: 0.5,
  placeholder: "https://via.placeholder.com/300",
  width: 300,
  height: 300,
  alt: "Image",
  mode: "cover",
  block: true,
  style: {},
};

let observer = null;

const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent("loadImage"));
    }
  });
};

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  width,
  height,
  alt,
  mode,
  block,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  const imageStyle = {
    display: block ? "block" : undefined,
    width,
    height,
    objectFit: mode,
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    if (imgElement) imgElement.addEventListener("loadImage", handleLoadImage);

    return () => {
      if (imgElement)
        imgElement.removeEventListener("loadImage", handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });
    if (imgRef.current) observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...imageStyle, ...props.style }}
    />
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
