/**
 * 사용자의 프로필 사진과 알람 리스트를 관리하는 component
 */
import { Avatar, Dot, Divider, Text } from "components";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { jwtToken } from "recoil/authentication";
import { profileImg } from "recoil/user";
import { useLocation } from "react-router-dom";
import { useClickAway } from "hooks";
import { unSeenNotifications } from "recoil/notification";
import { seenAlarm } from "api/alarm-api";
import AlarmItem from "./components/AlarmItem";
import * as S from "./Alarm.style";

const Alarm = () => {
  const location = useLocation();
  const profile = useRecoilValue(profileImg);
  const [showAlarm, setShowAlarm] = useState(false);
  const { state, contents: notification } =
    useRecoilValueLoadable(unSeenNotifications);
  const token = useRecoilValue(jwtToken);

  const ref = useClickAway(() => {
    setShowAlarm(false);
  });

  const handlerAlarmClick = async () => {
    setShowAlarm((prev) => !prev);
    if (!showAlarm) {
      await seenAlarm(token);
    }
  };

  const resultNotification = useMemo(() => {
    if (state !== "hasValue") return [];
    return notification.filter((noti) => !noti.seen);
  }, [notification, state]);

  useEffect(() => {
    setShowAlarm(false);
  }, [location]);

  return (
    <div
      ref={ref}
      style={{ display: "inline-block", position: "relative", zIndex: 998 }}
    >
      <S.ProfileWrapper onClick={handlerAlarmClick}>
        <Avatar src={profile} size={45} />
        {Array.isArray(notification) &&
          state === "hasValue" &&
          notification?.filter((noti) => !noti.seen).length > 0 && (
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
            {state === "hasValue" &&
              (resultNotification ? (
                Array.isArray(resultNotification) &&
                resultNotification.map((item) => (
                  <AlarmItem key={item._id} item={item} />
                ))
              ) : (
                <div>hello world</div>
              ))}
          </ul>
        </S.AlarmWrapper>
      )}
    </div>
  );
};
export default Alarm;
