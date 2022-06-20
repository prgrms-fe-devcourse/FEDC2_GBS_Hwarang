import React from "react";
import PropTypes from "prop-types";
import CommentInput from "components/CommentInput/CommentInput";
import CommentItem from "components/CommentItem/CommentItem";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";
import { jwtToken } from "recoil/authentication";
import { addComment, deleteComment } from "api/comment-api";
import { Text } from "components";
import S from "./Comment.style";

const propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const defaultProps = {
  maxHeight: 100,
};

const Comment = ({ postId, comments, maxHeight }) => {
  const userData = useRecoilValue(userInfo);
  const token = useRecoilValue(jwtToken);

  const handleAddComment = async (comment) => {
    try {
      const response = await addComment(comment, postId, userData._id, token);
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
      <S.CommentsWrap>
        {comments && (
          <S.CommentsNum>
            <Text strong size="$b1">
              댓글 {comments.length}개
            </Text>
          </S.CommentsNum>
        )}
        {comments &&
          comments.map((comment) => (
            <CommentItem
              key={comment._id}
              commentData={comment}
              onDelComment={handleRemoveComment}
            />
          ))}
      </S.CommentsWrap>
      <CommentInput maxHeight={maxHeight} onAddComment={handleAddComment} />
    </div>
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
