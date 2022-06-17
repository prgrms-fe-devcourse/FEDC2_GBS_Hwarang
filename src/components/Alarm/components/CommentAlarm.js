import React from "react";
import PropTypes from "prop-types";
import Text from "components/Text";
import Image from "components/Image";
import { useRecoilValue } from "recoil";
import { postImage } from "recoil/post";

const propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

const CommentAlaram = ({ info }) => {
  const image = useRecoilValue(postImage(info.post));

  return (
    <>
      <div>
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          {info.author}
        </Text>
        님이
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          {`"`}
          {info.comment && info.comment.comment}
          {`"`}
        </Text>
        댓글을 달았습니다.
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
=======
      <Image
        src="https://via.placeholder.com/300"
        width="50px"
        height="auto"
        mode="contain"
        style={{ marginLeft: 10 }}
      />
>>>>>>> 851a066 ([feat]: 알림 type에 따른 동적 component 분기 처리)
    </>
  );
};

CommentAlaram.propTypes = propTypes;

export default CommentAlaram;
