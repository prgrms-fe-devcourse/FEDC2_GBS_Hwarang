import React from "react";
import PropTypes from "prop-types";
import CommentInput from "components/CommentInput/CommentInput";
import CommentItem from "components/CommentItem/CommentItem";
import { useRecoilValue } from "recoil";
import { jwtToken } from "recoil/authentication";
import { addComment, deleteComment } from "api/comment-api";
import CommentsWrap from "./Comment.style";

const propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const defaultProps = {
  maxHeight: 100,
};

const Comment = ({ postId, comments, maxHeight }) => {
  const token = useRecoilValue(jwtToken);

  const handleAddComment = async (comment) => {
    try {
      const response = await addComment(comment, postId, token);
      handleOnCancel();
      console.log(response);
    } catch (exception) {
      console.error(exception);
    }
  };

  const handleRemoveComment = async (_id) => {
    try {
      const response = await deleteComment(_id, token);
      console.log(response);
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <div>
      <CommentsWrap>
        {comments &&
          comments.map((comment) => (
            <CommentItem
              key={comment._id}
              commentData={comment}
              onDelComment={handleRemoveComment}
            />
          ))}
      </CommentsWrap>
      <CommentInput maxHeight={maxHeight} onAddComment={handleAddComment} />
    </div>
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
