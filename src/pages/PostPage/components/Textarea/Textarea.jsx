import React from "react";
import PropTypes from "prop-types";
import * as S from "./Textarea.style";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
};

const defaultProps = {
  width: "100%",
  height: 100,
  backgroundColor: "white",
};

const Textarea = ({ width, height, backgroundColor, ...props }) => {
  const textAreaStyle = {
    width,
    height,
    backgroundColor,
  };

  return <S.Textarea style={textAreaStyle} {...props} />;
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
