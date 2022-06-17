import PropTypes from "prop-types";
import React from "react";
import Base from "./Base";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  width: 333,
  height: 255,
};

const Box = ({ width, height }) => <Base style={{ width, height }} />;

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
