import React from "react";
import PropTypes from "prop-types";
import Wrapper from "./Popup.style";

const propTypes = {
  type: PropTypes.string, // popup type (left, right, top, bottom)
  size: PropTypes.arrayOf([PropTypes.number, PropTypes.string]), // popup size (left/right일 때는 width, top/bottom일 때는 height)
  show: PropTypes.bool, // popup show/hide flag
};
const defaultProps = {
  type: "left",
  size: 20,
  show: false,
};

const Popup = ({ type, size, show }) => {
  return (
    <div>
      <Wrapper type={type} size={size} className={show ? "popup-show" : ""} />
    </div>
  );
};

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
