import styled from "@emotion/styled";

export const Container = styled.div`
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 1em 2em;
  margin: 10px;
  color: blue;
  border-radius: 10px;
  border: 1px solid blue;
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

export const Center = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SliderContainer = styled.div`
  display: flex;
`;
