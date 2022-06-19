import styled from "@emotion/styled";
import Button from "components/Button";
import Common from "styles/common";

export const CommentInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border: none;
`;

export const CommentInputButton = styled(Button)`
  display: inline-block;
`;

export const CommentInputTextArea = styled.textarea`
  width: 100%;
  height: 25px;
  resize: none;
  overflow: hidden;
  min-height: 25px;
  max-height: ${({ maxHeight }) =>
    typeof maxHeight === "string" ? maxHeight : `${maxHeight}px`};
  outline: none;
  border: none;
  border-bottom: 1px solid ${Common.colors.gray04};

  &:focus {
    border-bottom: 2px solid ${Common.colors.main};
  }
`;
