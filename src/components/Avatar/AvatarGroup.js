import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
  shape: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  shape: "circle",
  size: 70,
};

const AvatarGroup = ({ children, shape, size }) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element)) {
        return true;
      }

      return false;
    })
    .map((avatar, index, items) => {
      return React.cloneElement(avatar, {
        ...items.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: items.length - index,
        },
      });
    });

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

AvatarGroup.propTypes = propTypes;
AvatarGroup.defaultProps = defaultProps;

export default AvatarGroup;
