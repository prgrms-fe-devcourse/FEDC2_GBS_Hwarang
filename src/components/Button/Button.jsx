import PropTypes from "prop-types";
import Common from "styles/common";
import Text from "components/Text";
import React from "react";
import SButton from "./Button.style";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool,
  borderRadius: PropTypes.number,
  type: PropTypes.string,
  props: PropTypes.instanceOf(Object),
  style: PropTypes.instanceOf(Object),
  onClick: PropTypes.func,
};

const defaultProps = {
  width: 150,
  height: 50,
  textSize: "$b3",
  backgroundColor: Common.colors.main,
  margin: "0 auto",
  color: Common.colors.white,
  border: false,
  borderRadius: 10,
  type: "button",
  props: {},
  style: {},
  onClick: () => {},
};

const Button = ({
  children,
  width,
  height,
  textSize,
  backgroundColor,
  margin,
  color,
  border,
  borderRadius,
  type,
  onClick,
  ...props
}) => {
  const bgColor =
    backgroundColor.slice(0, 1) === "$"
      ? Common.colors[backgroundColor.slice(1)]
      : backgroundColor;

  const textColor =
    color.slice(0, 1) === "$" ? Common.colors[color.slice(1)] : color;

  const buttonStyle = {
    width,
    height,
    backgroundColor: bgColor,
    border: border ? `1px solid ${textColor}` : "none",
    borderRadius,
  };

  return (
    <SButton
      type={type}
      onClick={onClick}
      margin={margin}
      {...props}
      style={{ ...buttonStyle, ...props.style }}
    >
      <Text size={textSize} color={color} strong>
        {children}
      </Text>
    </SButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
