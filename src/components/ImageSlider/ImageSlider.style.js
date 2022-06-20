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
  position: absolute;
  top: 300px;
  font-size: 50px;
  color: ${Common.colors.white};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;
