import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  background-color: white;

  & li {
    margin: 4px 10px;
  }
`;

export const ResultWrap = styled.div`
  background-color: ${Common.colors.white};
`;
