import { DEFAULT_PROFILE_IMAGE } from "api/url";
import { Avatar, Text, Icon } from "components";
import React from "react";
import PropTypes from "prop-types";
import { deleteComment } from "api/comment-api";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";
import { jwtToken } from "recoil/authentication";
import * as S from "./CommentItem.style";

const propTypes = {
  commentData: PropTypes.instanceOf(Object).isRequired,
};

const Comment = ({ commentData }) => {
  const token = useRecoilValue(jwtToken);
  const userData = useRecoilValue(userInfo);
  const { _id, author, comment } = commentData;

  // eslint-disable-next-line no-unused-vars
  const handleOnDelete = async () => {
    try {
      const response = await deleteComment(_id, token);
      console.log(response);
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <S.CommentWrap>
      <Avatar
        src={author.image || DEFAULT_PROFILE_IMAGE}
        size={50}
        style={{ width: 55, height: 50 }}
      />
      <div style={{ width: "100%", marginLeft: 10 }}>
        <Text size="$n1" strong>
          {author.fullName}
        </Text>
        <Text size="$n1" style={{ whiteSpace: "pre-wrap", marginTop: 5 }}>
          {comment}
        </Text>
      </div>
      {userData._id === author.__id && (
        <S.CommentDelButton className="del__btn">
          <Icon name="delete" onClick={handleOnDelete} />
        </S.CommentDelButton>
      )}
    </S.CommentWrap>
  );
};

Comment.propTypes = propTypes;

export default Comment;
