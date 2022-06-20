import { DEFAULT_PROFILE_IMAGE } from "api/url";
import Avatar from "components/Avatar";
import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";
import * as S from "./CommentInput.style";

const propTypes = {
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onAddComment: PropTypes.func,
};
const defaultProps = {
  maxHeight: 100,
  onAddComment: null,
};

const CommentInput = ({ maxHeight, onAddComment }) => {
  const userData = useRecoilValue(userInfo);
  const [inputFocus, setInputFocus] = useState(false);
  const [comment, setComment] = useState("");
  const ref = useRef(null);

  const handleTextAreaHeight = useCallback(() => {
    const element = ref.current;
    if (element) {
      element.style.height = "inherit";
      element.style.height = `${element.scrollHeight}px`;
    }
  }, [ref]);

  const handleOnChange = (e) => {
    handleTextAreaHeight();
    setComment(e.target.value);
  };

  const handleOnCancel = () => {
    const element = ref.current;
    if (element) {
      element.style.height = "25px";
    }
    setComment("");
    setInputFocus(false);
  };

  const handleOnConfirm = () => {
    if (onAddComment) {
      onAddComment(comment);
      handleOnCancel();
    }
  };

  return (
    <S.CommentInputWrapper>
      <Avatar
        src={userData.image || DEFAULT_PROFILE_IMAGE}
        size={50}
        style={{ width: 50, height: 50 }}
      />
      <div style={{ flexGrow: 1, marginLeft: 10 }}>
        <S.CommentInputTextArea
          ref={ref}
          onFocus={() => setInputFocus(true)}
          onChange={handleOnChange}
          value={comment}
          maxHeight={maxHeight}
          placeholder="여행지와 무관한 댓글이나 악플은 경고 없이 삭제되며 징계 대상이 될 수 있습니다."
        />
        {inputFocus && (
          <div style={{ textAlign: "end" }}>
            <S.CommentInputButton
              width={70}
              height={42}
              textSize="$n1"
              color="$black01"
              backgroundColor="$white"
              onClick={handleOnCancel}
            >
              취소
            </S.CommentInputButton>
            <S.CommentInputButton
              width={70}
              height={43}
              textSize="$n1"
              margin={10}
              onClick={handleOnConfirm}
            >
              등록
            </S.CommentInputButton>
          </div>
        )}
      </div>
    </S.CommentInputWrapper>
  );
};

CommentInput.propTypes = propTypes;
CommentInput.defaultProps = defaultProps;

export default CommentInput;
