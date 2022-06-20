import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Icon, Text } from "components";
import FollowItem from "../FollowItem";
import CommentItem from "../CommentItem";
import * as S from "./AlarmItem.style";
import LikeItem from "../LikeItem";

const ALARM_ITEM = {
  Follow: FollowItem,
  Comment: CommentItem,
  Like: LikeItem,
};

const propTypes = {
  notification: PropTypes.instanceOf(Array).isRequired,
};
const defaultTypes = {
  notification: undefined,
};

function AlarmItem({ notification }) {
  const resultNotification = useMemo(() => {
    if (!notification) return notification;
    return notification.filter((noti) => !noti.seen);
  }, [notification]);

  const getType = useCallback((item) => {
    if (item?._id) {
      if (!item.post && item.follow?._id) return "Follow";
      if (item.comment) return "Comment";
      if (item.post) return "Like";
      return "none";
    }
  }, []);

  return (
    // eslint-disable-next-line
    <S.AlarmItemWrapper>
      {resultNotification && resultNotification.length > 0 ? (
        resultNotification.map((item) =>
          React.createElement(ALARM_ITEM[getType(item)], {
            key: item._id,
            info: item,
          })
        )
      ) : (
        <S.NoneAlarm>
          <div style={{ display: "inline-block" }}>
            <Icon name="notifications_off" fontSize={35} />
          </div>
          <Text size="$n1">읽지 않은 알림이 없습니다.</Text>
        </S.NoneAlarm>
      )}
    </S.AlarmItemWrapper>
  );
}

AlarmItem.propTypes = propTypes;
AlarmItem.defaultTypes = defaultTypes;

export default AlarmItem;
