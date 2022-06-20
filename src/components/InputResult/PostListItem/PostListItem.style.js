import styled from "@emotion/styled";

// eslint-disable-next-line import/prefer-default-export
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  padding: 4px 0;
  border-bottom: 1px solid #c0c0c0;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;
