import React from "react";
import Text from "components/Text";
import Image from "components/Image";

const LikeAlarm = () => {
  return (
    <>
      <div>
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          👍유용상
        </Text>
        님이 {`"`}멋진 한국의 한옥마....{`" `} 일정을 좋아합니다.
      </div>
      <Image
        src="https://via.placeholder.com/300"
        width="50px"
        height="auto"
        mode="contain"
        style={{ marginLeft: 10 }}
      />
    </>
  );
};
export default LikeAlarm;
