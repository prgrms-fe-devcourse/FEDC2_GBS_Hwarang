import styled from "@emotion/styled";
import Common from "styles/common";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  display: flex;
  transform: translate(0, 0);
  height: 100%;
  width: 100%;
`;
export const Icon = styled.span`
  /* position: absolute;
  top: 300px; */
  color: ${Common.colors.white};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;

export const DotWrap = styled.div`
  position: absolute;
  /* left: calc(50% - 67px); */
  bottom: 0;
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;
`;
