import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.number,
};
const defaultProps = {
  children: undefined,
  type: "horizontal",
  size: 0,
};

const Spacer = ({ children, type, size }) => {
  const spacerStyle = {
    display: type === "vertical" ? "block" : "inline-block",
    verticalAlign: type === "horizontal" ? "middle" : undefined,
  };

  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index) => {
      return React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight:
            type === "horizontal" && index !== element.length - 1
              ? size
              : undefined,
          marginBottom:
            type === "vertical" && index !== element.length - 1
              ? size
              : undefined,
        },
      });
    });
  console.log(nodes);
  return <div style={spacerStyle}>{nodes}</div>;
};

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;

export default Spacer;
