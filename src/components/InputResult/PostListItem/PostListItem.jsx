import React from "react";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "components";
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
  const { _id } = post;
  // const navigate = useNavigate();
  const sizeStyle = {
    width,
  };
  const handleonClick = () => {
    // TODO: 해당 id를 가진 post로 이동
    // navigate(`/userpage/${id}`);
  };
  return (
    <S.ListItem style={sizeStyle} onClick={handleonClick(_id)} {...props}>
      {post.title}
      {post.image && (
        <Image
          src={post.image}
          width="220px"
          height="auto"
          mode="contain"
          style={{ marginRight: 10 }}
        />
      )}
    </S.ListItem>
  );
};

PostListItem.propTypes = propTypes;
PostListItem.defaultProps = defaultProps;

export default PostListItem;
