import React from "react";
import PropTypes from "prop-types";
import Text from "components/Text";
import Image from "components/Image";
import { useRecoilValue } from "recoil";
import { postById } from "recoil/post";

const propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

const LikeItem = ({ info }) => {
  const post = useRecoilValue(postById(info.post));
  console.log(post);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          👍{info.author?.fullName || "익명님"}
        </Text>
        님이 {`"${post?.content?.title}"`} 일정을 좋아합니다.
      </div>
      {post.image && (
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

LikeItem.propTypes = propTypes;

export default LikeItem;
