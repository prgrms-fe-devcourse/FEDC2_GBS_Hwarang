import React from "react";
import PropTypes from "prop-types";
import { Text } from "components";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";

const proptype = {
  info: PropTypes.instanceOf(Object),
};

const defaultProp = {
  info: undefined,
};

const FollowItem = ({ info }) => {
  const userData = useRecoilValue(userInfo);

  return (
    <div style={{ fontSize: 13, lineHeight: "22px" }}>
      <Text strong size="$c1" style={{ display: "inline-block" }}>
        {info.author.fullName}
      </Text>
      님이
      <Text strong size="$c1" style={{ display: "inline-block" }}>
        {userData.fullName}
      </Text>
      님을 구독했습니다.🔥
    </div>
  );
};

FollowItem.propTypes = proptype;
FollowItem.defaultProps = defaultProp;

export default FollowItem;
