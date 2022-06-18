import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line import/prefer-default-export
export const Textarea = styled.textarea`
  border: none;
  resize: none;
  font-size: ${Common.fontSize.c1};
  &:focus {
    outline: none;
  }
`;
