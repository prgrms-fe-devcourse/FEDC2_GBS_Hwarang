import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 1em 2em;
  margin: 2em 2em;
  color: blue;
  border-radius: 10px;
  border: 1px solid blue;
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

export const Center = styled.div`
  text-align: center;
`;

export const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;
