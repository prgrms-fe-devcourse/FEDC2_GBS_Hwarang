import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
// import Slide from "components/Slide";
// import Slide from "components/Slide";
// import Button from "components/Button";
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
      <IS.ButtonContainer>
        <IS.Icon
          role="button"
          onClick={prevSlide}
          className="material-symbols-outlined"
          onKeyDown=""
          tabIndex={0}
        >
          arrow_back_ios
        </IS.Icon>
        <IS.Icon
          role="button"
          style={{ right: 0 }}
          onClick={nextSlide}
          className="material-symbols-outlined"
          onKeyDown=""
          tabIndex={0}
        >
          arrow_forward_ios
        </IS.Icon>
      </IS.ButtonContainer>
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
