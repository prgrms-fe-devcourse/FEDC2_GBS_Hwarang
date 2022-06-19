import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FollowItem from "../FollowItem";
import CommentItem from "../CommentItem";
import * as S from "./AlarmItem.style";

const proptype = {
  item: PropTypes.instanceOf(Object),
};

const defaultProp = {
  item: {},
};

function AlarmItem({ item }) {
  const [type, setType] = useState("");

  const notifications = {
    Follow: <FollowItem author={item.author} follow={item.follow} />,
    Comment: <CommentItem comment={item.comment} />,
  };

  useEffect(() => {
    if (item?._id) {
      if (!item.post && item.follow?._id) setType("Follow");
      else if (item.comment) setType("Comment");
      else setType("none");
    }
  }, [item]);

  return (
    // eslint-disable-next-line
    <>
      {notifications[type] ? (
        <S.AlarmItemWrapper> {notifications[type]} </S.AlarmItemWrapper>
      ) : null}
    </>
  );
}

AlarmItem.propTypes = proptype;
AlarmItem.defaultProps = defaultProp;

export default AlarmItem;
