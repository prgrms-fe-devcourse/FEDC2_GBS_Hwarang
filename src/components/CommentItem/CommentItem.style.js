import styled from "@emotion/styled";
import Common from "styles/common";

export const CommentWrap = styled.div`
  display: flex;
  position: relative;
  /* width: 100%; */
  padding: 10px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${Common.colors.gray06};
  }
  &:hover .del__btn {
    display: block;
  }
`;

export const CommentDelButton = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
`;
