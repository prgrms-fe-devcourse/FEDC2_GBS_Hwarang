import React from "react";
import PropTypes from "prop-types";
import * as S from "./IconGroup.style";

const propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  top: 0,
  bottom: 0,
  left: "auto",
  right: 0,
};

const IconGroup = ({ children, top, bottom, left, right }) => {
  const positionStyle = {
    top,
    bottom,
    left,
    right,
  };
  return <S.IconGroup style={positionStyle}>{children}</S.IconGroup>;
};

IconGroup.propTypes = propTypes;
IconGroup.defaultProps = defaultProps;

export default IconGroup;
