import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  blank: PropTypes.bool,
};
const defaultProps = {
  size: 10,
  color: "#000000",
  style: null,
  blank: false,
};

const Dot = ({ size, color, blank, ...props }) => {
  const DotStyle = {
    width: `${typeof size === "string" ? `${size}` : `${size}px`}`,
    height: `${typeof size === "string" ? `${size}` : `${size}px`}`,
    backgroundColor: blank ? "transparent" : color,
    borderRadius: "50%",
    border: `1px solid ${color}`,
    position: "absolute",
  };
  return <div {...props} style={{ ...DotStyle, ...props.style }} />;
};

Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;
export default Dot;
