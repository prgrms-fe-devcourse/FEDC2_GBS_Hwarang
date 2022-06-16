import React from "react";
import PropTypes from "prop-types";
import { Button } from "components";

const proptype = {
  buttonOption: PropTypes.instanceOf(Object),
  handleClick: PropTypes.func,
  isUnFollow: PropTypes.bool,
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
  isUnFollow: false,
};

function FollowButton({ buttonOption, handleClick, isUnFollow }) {
  return (
    <Button {...buttonOption} onClick={handleClick}>
      {isUnFollow ? "구독중" : "구독"}
    </Button>
  );
}

FollowButton.propTypes = proptype;
FollowButton.defaultProps = defaultProps;

export default FollowButton;
