import React from "react";
import { PropTypes } from "prop-types";
import Common from "../../styles/common";

const propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

const defaultProps = {
  size: "$b1",
  block: true,
  paragraph: false,
  strong: false,
  underline: false,
  color: Common.colors.black01,
  style: null,
};

const Text = ({
  children,
  size,
  strong,
  underline,
  block,
  paragraph,
  color,
  ...props
}) => {
  const paragraphTag = paragraph ? "p" : "span";
  const Tag = block ? "div" : paragraphTag;

  const fontSize =
    typeof size === "number" ? size : Common.fontSize[size.slice(1)];
  const fontColor =
    color.slice(0, 1) === "$" ? Common.colors[color.slice(1)] : color;

  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize,
    textDecoration: underline ? "underline" : undefined,
    color: fontColor,
  };

  return <Tag style={{ ...fontStyle, ...props.style }}>{children}</Tag>;
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
