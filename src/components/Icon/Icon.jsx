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

const Icon = ({ width, height, fontSize, name }) => {
  const sizeStyle = {
    width,
    height,
    fontSize,
  };
  return (
    <S.Icon className="material-symbols-outlined" style={sizeStyle}>
      {name}
    </S.Icon>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
