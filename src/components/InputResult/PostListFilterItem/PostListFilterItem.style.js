import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line import/prefer-default-export
export const ListItem = styled.li`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: calc(100% - 20px);
  margin: 0 10px;
  padding: 10px;
  border-bottom: 1px solid ${Common.colors.gray05};
  cursor: pointer;

  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;
