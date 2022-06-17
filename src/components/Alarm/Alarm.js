/**
 * 사용자의 프로필 사진과 알람 리스트를 관리하는 component
 */
import Avatar from "components/Avatar";
import Dot from "components/Dot";
import Divider from "components/Divider";
import Text from "components/Text";
import Image from "components/Image";
import React, { useEffect, useState } from "react";
import { getAlarms } from "api/alarm-api";
import * as S from "./Alarm.style";
// import CommentAlaram from "./components/CommentAlarm";

// const AlarmComponentByType = {
//   "COMMENT": () => (<CommentAlaram />),
// };

const Alarm = () => {
  const profile = useRecoilValue(profileImg);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAlarms();
        setNotification(response);
      } catch (exception) {
        console.error(exception);
      }
    }
    fetchData();
  }, [setNotification]);

  return (
    <div style={{ display: "inline-block", position: "relative", zIndex: 998 }}>
      <Avatar src={profile} size={45} />
      <Dot size={15} color="#D43737" style={{ top: 0, right: 0 }} />
      <S.AlarmWrapper>
        <Text size="$c1" strong>
          알림 왔슈📌
        </Text>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <Divider style={{ opacity: 0.1 }} size={15} />
          <li style={{ display: "flex" }}>
            <div>
              <Text strong size="$c1" style={{ display: "inline-block" }}>
                유승범
              </Text>
              님이
              <Text strong size="$c1" style={{ display: "inline-block" }}>
                진연주
              </Text>
              님을 구독했습니다.
            </div>
          </li>
          <Divider style={{ opacity: 0.1 }} size={15} />
          <li style={{ display: "flex" }}>
            <div>
              <Text strong size="$c1" style={{ display: "inline-block" }}>
                유용상
              </Text>
              님이
              <Text strong size="$c1" style={{ display: "inline-block" }}>
                {`"`}멋진 한국의 한옥마....{`" `}
              </Text>
              일정을 좋아합니다.
            </div>
            <Image
              src="https://via.placeholder.com/300"
              width="50px"
              height="auto"
              mode="contain"
              style={{ marginLeft: 10 }}
            />
          </li>
        </ul>
      </S.AlarmWrapper>
    </div>
  );
};
export default Alarm;
