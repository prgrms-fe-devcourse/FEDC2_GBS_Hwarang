import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "components";

const proptype = {
  handleClick: PropTypes.func,
  isUnFollow: PropTypes.bool,
};

const defaultProps = {
  handleClick: () => {},
  isUnFollow: false,
};

function FollowButton({ handleClick, isUnFollow }) {
  const [buttonOptions, setButtonOptions] = useState({});

  const followButtonOptions = {
    width: 130,
    textSize: "$n1",
    backgroundColor: "$white",
    color: "$main",
    border: true,
    textColor: "$main",
  };

  const unFollowButtonOptions = {
    width: 130,
    textSize: "$n1",
    backgroundColor: "$main",
    color: "$white",
  };

  useEffect(() => {
    if (isUnFollow) {
      setButtonOptions(unFollowButtonOptions);
    } else {
      setButtonOptions(followButtonOptions);
    }
  }, [isUnFollow]);

  return (
    <Button {...buttonOptions} onClick={handleClick}>
      {isUnFollow ? "구독중" : "구독"}
    </Button>
  );
}

FollowButton.propTypes = proptype;
FollowButton.defaultProps = defaultProps;

export default FollowButton;
