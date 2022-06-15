import React from "react";
import PropTypes from "prop-types";
import { Button } from "components";

const proptype = {
  buttonOption: PropTypes.instanceOf(Object),
  handleClick: PropTypes.func,
};

const defaultProps = {
  buttonOption: {
    width: 130,
    textSize: "$n1",
    backgroundColor: "$white",
    color: "$main",
    border: true,
    textColor: "$main",
  },
  handleClick: () => {},
};

function FollowButton({ buttonOption, handleClick }) {
  return (
    <Button {...buttonOption} onClick={handleClick}>
      Follow
    </Button>
  );
}

FollowButton.propTypes = proptype;
FollowButton.defaultProps = defaultProps;

export default FollowButton;
