import React from "react";
import PropTypes from "prop-types";
import * as S from "./PostListItem.style";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  post: PropTypes.instanceOf(Object),
};

const defaultProps = {
  width: "100%",
  post: {},
};

const PostListItem = ({ width, post, ...props }) => {
  const sizeStyle = {
    width,
  };
  const handleonClick = (id) => {
    // TODO: 해당 id를 가진 post로 이동
    console.log(id);
  };
  const { _id } = post;
  return (
    <S.ListItem
      style={sizeStyle}
      onClick={() => {
        handleonClick(_id);
      }}
      {...props}
    >
      {post.title}
    </S.ListItem>
  );
};

PostListItem.propTypes = propTypes;
PostListItem.defaultProps = defaultProps;

export default PostListItem;
