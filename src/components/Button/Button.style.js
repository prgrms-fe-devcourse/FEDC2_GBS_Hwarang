import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  padding: 8px 6px;
  margin: ${({ margin }) => margin};
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
`;

export default Button;
