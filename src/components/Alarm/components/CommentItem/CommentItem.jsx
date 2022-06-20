import React from "react";
import PropTypes from "prop-types";
import Text from "components/Text";
import Image from "components/Image";
import { useRecoilValue } from "recoil";
import { postById } from "recoil/post";

const propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

const CommentItem = ({ info }) => {
  const post = useRecoilValue(postById(info.post));

  return (
    <div style={{ display: "flex", fontSize: 13, lineHeight: "22px" }}>
      <div>
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          {info.author?.fullName || "익명"}
        </Text>
        님이
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          {`"`}
          {info.comment && info.comment.comment}
          {`"`}
        </Text>
        댓글을 달았습니다.
      </div>
      {post?.image && (
        <Image
          src={post.image}
          width="50px"
          height="auto"
          mode="contain"
          style={{ marginLeft: 10 }}
        />
      )}
    </div>
  );
};

CommentItem.propTypes = propTypes;

export default CommentItem;
