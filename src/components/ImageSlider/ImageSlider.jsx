import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Dot } from "components";
import * as IS from "./ImageSlider.style";
import Slide from "../Slide";

const ImageSlider = ({ children, width, height }) => {
  const sliderStyle = {
    width,
    height,
  };

  const TOTAL_SLIDES = children.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setIsEnd(true);
      setCurrentSlide(0);
    } else {
      setIsEnd(false);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setIsEnd(true);
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setIsEnd(false);
      setCurrentSlide(currentSlide - 1);
    }
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
    }, [delay, nextSlide, prevSlide]);
  };

  useInterval(() => {
    if (currentSlide >= TOTAL_SLIDES) {
      setIsEnd(true);
      setCurrentSlide(0);
    } else {
      setIsEnd(false);
      setCurrentSlide(currentSlide + 1);
    }
  }, 6000);

  // const element = slideRef.current;

  return (
    <IS.Container style={{ ...sliderStyle }}>
      <IS.SliderContainer ref={slideRef} end={isEnd} count={currentSlide}>
        {children.map((item) => (
          <Slide key={item.id} src={item.src} />
        ))}
      </IS.SliderContainer>
      <IS.DotWrap>
        <IS.Icon
          role="button"
          onClick={prevSlide}
          className="material-symbols-outlined"
          onKeyDown={() => {}}
          tabIndex={0}
        >
          arrow_back_ios
        </IS.Icon>
        <div>
          {Array.from({ length: children.length }).map((_, index) => (
            <Dot
              // eslint-disable-next-line react/no-array-index-key
              key={`dot-${index}`}
              color="#FFFFFF"
              style={{
                position: "sticky",
                display: "inline-block",
                margin: "0 10px",
                cursor: "pointer",
              }}
              blank={index !== currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
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
      </IS.DotWrap>
    </IS.Container>
  );
};

ImageSlider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.node])
    .isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ImageSlider.defaultProps = {
  width: "100%",
  height: "100%",
};

export default ImageSlider;
