import styled from "@emotion/styled";

export const ShapeToCssValue = {
  circle: "50%",
  round: "4px",
  square: "0px",
};

export const SlideWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;
