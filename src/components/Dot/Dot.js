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
  console.log(props);
  return <div>hello world</div>;
};

Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;
export default Dot;
