/**
 * 사용자의 프로필 사진과 알람 리스트를 관리하는 component
 */
import { Avatar, Dot, Divider, Text } from "components";
import React, { useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { profileImg } from "recoil/user";
import { unSeenNotifications } from "recoil/notification";
import Item from "./components";
import * as S from "./Alarm.style";

const AlarmComponentByType = (type) => {
  if (type === "COMMENT") {
    return Item.CommentAlaram;
  }
  if (type === "FOLLOW") {
    return Item.FollowAlarm;
  }
  if (type === "LIKE") {
    return Item.LikeAlarm;
  }
  return undefined;
};

const Alarm = () => {
  const profile = useRecoilValue(profileImg);
  const [showAlarm, setShowAlarm] = useState(false);
  const { contents: notification } =
    useRecoilValueLoadable(unSeenNotifications);

  return (
    <div style={{ display: "inline-block", position: "relative", zIndex: 998 }}>
      <S.ProfileWrapper onClick={() => setShowAlarm((pre) => !pre)}>
        <Avatar src={profile} size={45} />
        {notification && notification.length > 0 && (
          <Dot size={15} color="#D43737" style={{ top: 0, right: 0 }} />
        )}
      </S.ProfileWrapper>
      {showAlarm && (
        <S.AlarmWrapper>
          <Text size="$c1" strong>
            알림 왔슈📌
          </Text>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
            <Divider size={15} />
            {notification &&
              notification.map((noti) =>
                AlarmComponentByType(noti.notificationType) ? (
                  // eslint-disable-next-line no-underscore-dangle
                  <div key={noti._id}>
                    <li style={{ display: "flex" }}>
                      {React.createElement(
                        AlarmComponentByType(noti.notificationType),
                        {
                          info: noti,
                        }
                      )}
                    </li>
                    <Divider size={15} />
                  </div>
                ) : (
                  "hello world"
                )
              )}
          </ul>
        </S.AlarmWrapper>
      )}
    </div>
  );
};
export default Alarm;
