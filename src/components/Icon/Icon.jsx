import React from "react";
import PropTypes from "prop-types";
import * as S from "./Icon.style";

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  name: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

const defaultProps = {
  width: 20,
  height: "100%",
  fontSize: 20,
  name: "search",
  style: null,
};

const Icon = ({ width, height, fontSize, name, ...props }) => {
  const sizeStyle = {
    width,
    height,
    fontSize,
  };
  return (
    <S.Icon
      className="material-symbols-outlined"
      {...props}
      style={{ ...sizeStyle, ...props.style }}
    >
      {name}
    </S.Icon>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
