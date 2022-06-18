import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

export const Label = styled.div`
  display: block;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 40px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ffc2c0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
