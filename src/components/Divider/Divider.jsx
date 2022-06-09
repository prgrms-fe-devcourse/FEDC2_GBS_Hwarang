import React from "react";
import PropTypes from "prop-types";
import * as Ds from "./Divider.style";

function Divider({ type, size, ...props }) {
  const dividerStyle = {
    margin: type === "vertical" ? `0 ${size}px` : `${size}px 0`,
  };
  return (
    <Ds.Line className={type} style={{ ...dividerStyle, ...props.style }} />
  );
}

Divider.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.instanceOf(Object),
};

Divider.defaultProps = {
  type: "horizontal",
  size: 8,
  style: null,
};

export default Divider;
