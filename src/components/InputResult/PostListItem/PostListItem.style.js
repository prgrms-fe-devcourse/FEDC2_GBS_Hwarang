import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line import/prefer-default-export
export const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid ${Common.colors.gray05};
  cursor: pointer;

  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;
