/**
 * 사용자의 프로필 사진과 알람 리스트를 관리하는 component
 */
import { Avatar, Dot, Divider, Text } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { unSeenNotifications } from "recoil/notification";
import { jwtToken } from "recoil/authentication";
import { profileImg } from "recoil/user";
import { useLocation } from "react-router-dom";
import { useClickAway } from "hooks";
import { seenAlarm } from "api/alarm-api";
import AlarmItem from "./components/AlarmItem";
import * as S from "./Alarm.style";

const Alarm = () => {
  const location = useLocation();
  const profile = useRecoilValue(profileImg);
  const [showAlarm, setShowAlarm] = useState(false);
  const token = useRecoilValue(jwtToken);
  const { state, contents: notification } =
    useRecoilValueLoadable(unSeenNotifications);

  const ref = useClickAway(() => {
    setShowAlarm(false);
  });

  const handlerAlarmClick = async () => {
    setShowAlarm((prev) => !prev);
    if (!showAlarm) {
      await seenAlarm(token);
    }
  };

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
      {showAlarm && state === "hasValue" && (
        <S.AlarmWrapper>
          <Text size="$c1" strong>
            알림 왔슈📌
          </Text>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
            <Divider size={5} />
            <AlarmItem notification={notification} />
          </ul>
        </S.AlarmWrapper>
      )}
    </div>
  );
};
export default Alarm;
