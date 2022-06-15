/**
 * 사용자의 프로필 사진과 알람 리스트를 관리하는 component
 */
import Avatar from "components/Avatar";
import Dot from "components/Dot";
import Text from "components/Text";
import Image from "components/Image";
import Divider from "components/Divider";
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
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "flex" }}>
            <div>
              <Text strong size="$c1" style={{ display: "inline-block" }}>
                신승연
              </Text>
              님이
              <Text strong size="$c1" style={{ display: "inline-block" }}>
                {`"`}멋저용{`"`}
              </Text>
              댓글을 달았습니다.
            </div>
            <Image
              src="https://via.placeholder.com/300"
              width="50px"
              height="auto"
              mode="contain"
              style={{ marginLeft: 10 }}
            />
          </li>
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
