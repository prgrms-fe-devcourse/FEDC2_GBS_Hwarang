import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const proptype = {
  comment: PropTypes.instanceOf(Object),
};

const defaultProp = {
  comment: {},
};

function CommentItem({ comment }) {
  const navigate = useNavigate();
  const { author, post } = comment;

  const handleClick = () => {
    navigate(`/post/detail/${post?.id}`);
  };

  return (
    // eslint-disable-next-line
    <div onClick={handleClick}>
      {author?.fullName}님이 포스트에 댓글을 작성하였습니다
    </div>
  );
}

CommentItem.propTypes = proptype;
CommentItem.defaultProps = defaultProp;

export default CommentItem;
