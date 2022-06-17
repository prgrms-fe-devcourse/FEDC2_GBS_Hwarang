/**
 * 사용자의 프로필 사진과 알람 리스트를 관리하는 component
 */
import Avatar from "components/Avatar";
import Dot from "components/Dot";
import Text from "components/Text";
import React from "react";
import * as S from "./Alarm.style";

const Alarm = () => {
  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <Avatar src="https://picsum.photos/200?1" size={45} />
      <Dot size={15} color="#D43737" style={{ top: 0, right: 0 }} />
      <S.AlarmWrapper>
        <Text size="$c1" strong>
          알림 왔슈📌
        </Text>
        hello world
      </S.AlarmWrapper>
    </div>
  );
};
export default Alarm;
