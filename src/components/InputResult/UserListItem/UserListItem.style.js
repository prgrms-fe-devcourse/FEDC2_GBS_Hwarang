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
`;

export const OnlineDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #53bf9d;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
