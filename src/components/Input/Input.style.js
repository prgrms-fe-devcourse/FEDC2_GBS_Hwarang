import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

export const Label = styled.div`
  display: block;
  font-size: 12px;
`;

export const Search = styled.div`
  display: flex;
`;

export const SearchInner = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
  border-radius: 4px;
  box-sizing: border-box;
`;
