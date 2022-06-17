import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import * as IS from "./ImageSlider.style";
import Slide from "../Slide";

const ImageSlider = ({ children, width, height }) => {
  const sliderStyle = {
    width,
    height,
  };

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  const TOTAL_SLIDES = children.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useInterval(() => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, 6000);
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
    slideRef.current.style.transition = "all 2s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <IS.Container style={{ ...sliderStyle }}>
      <IS.SliderContainer className="hi" ref={slideRef}>
        {children.map((item) => (
          <Slide key={item.id} src={item.src} />
        ))}
      </IS.SliderContainer>
      <IS.ButtonContainer>
        <IS.Icon
          role="button"
          onClick={prevSlide}
          className="material-symbols-outlined"
          onKeyDown={() => {}}
          tabIndex={0}
        >
          arrow_back_ios
        </IS.Icon>
        <IS.Icon
          role="button"
          style={{ right: 0 }}
          onClick={nextSlide}
          className="material-symbols-outlined"
          onKeyDown={() => {}}
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
  ]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ImageSlider.defaultProps = {
  width: "100%",
  height: "100%",
};

export default ImageSlider;
