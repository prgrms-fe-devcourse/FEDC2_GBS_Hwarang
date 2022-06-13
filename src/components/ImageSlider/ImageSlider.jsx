import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
// import Slide from "components/Slide";
import * as IS from "./ImageSlider.style";

const ImageSlider = ({ children, width, height }) => {
  const sliderStyle = {
    width,
    height,
  };
  const slides = React.Children.toArray(children).filter((element) => {
    if (React.isValidElement(element)) {
      return true;
    }
    return false;
  });
  const TOTAL_SLIDES = children.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <IS.Container style={{ ...sliderStyle }}>
      <IS.SliderContainer ref={slideRef}>
        {slides}
        {/* {children.map((item) => (
          <Slide src={item.src} style={{ ...sliderStyle }} />
        ))} */}
      </IS.SliderContainer>
      <IS.Center>
        <IS.Button style={{ left: 100 }} onClick={prevSlide}>
          이전
        </IS.Button>
        <IS.Button onClick={nextSlide}>다음</IS.Button>
      </IS.Center>
    </IS.Container>
  );
};

ImageSlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  // shape: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ImageSlider.defaultProps = {
  children: null,
  // shape: "square",
  width: 400,
  height: 400,
};

export default ImageSlider;
