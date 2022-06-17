import React from "react";
import Text from "components/Text";
import Image from "components/Image";

const CommentAlaram = () => {
  return (
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
  );
};
export default CommentAlaram;
