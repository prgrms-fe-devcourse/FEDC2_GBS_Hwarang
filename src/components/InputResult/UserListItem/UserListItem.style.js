import styled from "@emotion/styled";

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
