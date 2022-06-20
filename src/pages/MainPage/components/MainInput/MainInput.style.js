import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line import/prefer-default-export
export const MainInputContainer = styled.div`
  position: absolute;
  top: 430px;
  right: calc(50% - 400px);
  width: 800px;
  height: 75px;
  border-radius: 20px;
`;

export const MainInputResult = styled.div`
  padding: 10px;
  background-color: ${Common.colors.white};
`;
