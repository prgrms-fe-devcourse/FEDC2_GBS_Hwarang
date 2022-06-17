import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import Text from "components/Text";
import Image from "components/Image";
import { useRecoilValue } from "recoil";
import { postImage } from "recoil/post";

const propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

const LikeAlarm = ({ info }) => {
  const image = useRecoilValue(postImage(info.post));

=======
import Text from "components/Text";
import Image from "components/Image";

const LikeAlarm = () => {
>>>>>>> 851a066 ([feat]: 알림 type에 따른 동적 component 분기 처리)
  return (
    <>
      <div>
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          👍유용상
        </Text>
        님이 {`"`}멋진 한국의 한옥마....{`" `} 일정을 좋아합니다.
      </div>
<<<<<<< HEAD
      {image && (
        <Image
          src={image}
          width="50px"
          height="auto"
          mode="contain"
          style={{ marginLeft: 10 }}
        />
      )}
    </>
  );
};

LikeAlarm.propTypes = propTypes;

=======
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
>>>>>>> 851a066 ([feat]: 알림 type에 따른 동적 component 분기 처리)
export default LikeAlarm;
