import React from "react";
import PropTypes from "prop-types";
import * as S from "./Icon.style";

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  name: PropTypes.string,
};

const defaultProps = {
  width: 20,
  height: "100%",
  fontSize: 20,
  name: "search",
};

const Input = ({ width, height, fontSize, name, ...props }) => {
  const sizeStyle = {
    width,
    height,
    fontSize,
  };
  return (
    <S.Icon className="material-symbols-outlined" style={sizeStyle} {...props}>
      {name}
    </S.Icon>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
