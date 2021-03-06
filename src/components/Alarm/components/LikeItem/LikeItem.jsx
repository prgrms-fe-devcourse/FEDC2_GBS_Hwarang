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
  return (
    <div style={{ display: "flex", fontSize: 13, lineHeight: "22px" }}>
      <div>
        <Text strong size="$c1" style={{ display: "inline-block" }}>
          π{info.author?.fullName || "μ΅λͺ"}
        </Text>
        λμ΄ {`"${post?.content?.title}"`} μΌμ μ μ’μν©λλ€.
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

LikeItem.propTypes = propTypes;

export default LikeItem;
