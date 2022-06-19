import styled from "@emotion/styled";
import Common from "styles/common";

const CommentWrap = styled.div`
  display: flex;
  position: relative;
  /* width: 100%; */
  padding: 10px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;
export default CommentWrap;
