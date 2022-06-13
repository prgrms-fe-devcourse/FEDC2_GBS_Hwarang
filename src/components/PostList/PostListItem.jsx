import { Flux, Image, Text } from "components";
import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.string,
  createdAt: PropTypes.string,
  likesNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  commentsNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  title: "여행지",
  textSize: "$b1",
  author: "user",
  createdAt: "",
  likesNum: 0,
  commentsNum: 0,
};

const PostListItem = ({
  src,
  title,
  textSize,
  author,
  createdAt,
  likesNum,
  commentsNum,
}) => {
  const { FluxRow, FluxCol } = Flux;

  return (
    <FluxRow padding={20}>
      <FluxCol span={4}>
        <Image src={src} width="100%" height={180} />
      </FluxCol>
      <FluxCol span={8}>
        <Text size={textSize}>{title}</Text>
      </FluxCol>
      <FluxCol span={8}>
        {author}, {createdAt}
      </FluxCol>
      <FluxCol span={4}>
        {likesNum}, {commentsNum}
      </FluxCol>
    </FluxRow>
  );
};

PostListItem.propTypes = propTypes;
PostListItem.defaultProps = defaultProps;

export default PostListItem;
