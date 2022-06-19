import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};
const defaultProps = {
  size: 10,
  color: "#000000",
  style: null,
};

const Dot = ({ size, color, ...props }) => {
  const DotStyle = {
    width: `${typeof size === "string" ? `${size}` : `${size}px`}`,
    height: `${typeof size === "string" ? `${size}` : `${size}px`}`,
    backgroundColor: color,
    borderRadius: "50%",
    border: "none",
    position: "absolute",
  };
  return <div style={{ ...DotStyle, ...props.style }} />;
};

Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;
export default Dot;
