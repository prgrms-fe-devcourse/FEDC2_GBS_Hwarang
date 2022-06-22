import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line import/prefer-default-export
export const MainInputContainer = styled.div`
  position: absolute;
  top: 330px;
  right: calc(50% - 400px);
  width: 800px;
  height: 75px;
  border-radius: 20px;
  z-index: 10;
`;

export const MainInputResult = styled.div`
  position: relative;
  top: -38px;
  width: 800px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${Common.colors.white};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  opacity: 0.85;
  z-index: 3;
`;
