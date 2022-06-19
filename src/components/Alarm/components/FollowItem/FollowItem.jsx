import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const proptype = {
  author: PropTypes.instanceOf(Object),
  follow: PropTypes.instanceOf(Object),
};

const defaultProp = {
  author: {},
  follow: {},
};

function FollowItem({ author, follow }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/userpage/${follow?.follower}`);
  };

  return (
    // eslint-disable-next-line
    <div onClick={handleClick}>
      {author?.fullName} 님이 당신을 팔로우 했습니다
    </div>
  );
}

FollowItem.propTypes = proptype;
FollowItem.defaultProps = defaultProp;

export default FollowItem;
