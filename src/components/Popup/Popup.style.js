import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: fixed;
  top: ${({ type }) => (type === "bottom" ? undefined : 0)};
  bottom: ${({ type }) => (type === "bottom" ? 0 : undefined)};
  left: ${({ type }) => (type === "right" ? undefined : "0")};
  right: ${({ type }) => (type === "right" ? 0 : undefined)};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  &.show {
    width: ${({ type, size }) =>
      type === "left" || type === "right"
        ? `${typeof size === "string" ? size : `${size}px`}`
        : "100%"};
    height: ${({ type, size }) =>
      type === "left" || type === "right"
        ? "100%"
        : `${typeof size === "string" ? size : `${size}px`}`};
  }
`;

export default Wrapper;
