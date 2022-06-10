import styled from "@emotion/styled";

const ShapeToCssValue = {
  circle: "50%",
  round: "4px",
  square: "0px",
};

// eslint-disable-next-line import/prefer-default-export
export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out;
  }
`;
