import React from "react";
import PropTypes from "prop-types";
import { Text } from "components";

const proptype = {
  info: PropTypes.instanceOf(Object),
};

const defaultProp = {
  info: undefined,
};

const FollowItem = ({ info }) => {
  return (
    <div>
      <Text strong size="$c1" style={{ display: "inline-block" }}>
        {info.author.fullName}
      </Text>
      님이
      <Text strong size="$c1" style={{ display: "inline-block" }}>
        진연주
      </Text>
      님을 구독했습니다.
    </div>
  );
};

FollowItem.propTypes = proptype;
FollowItem.defaultProps = defaultProp;

export default FollowItem;
