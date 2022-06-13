import styled from "@emotion/styled";

const position = {
  top: {
    left: 0,
    bottom: "100%",
    transform: 1,
  },
  left: {
    top: 0,
    right: "100%",
    transform: 1,
  },
  right: {
    top: 0,
    left: "100%",
    transform: -1,
  },
  bottom: {
    left: 0,
    top: "100%",
    transform: -1,
  },
};

export const PopupWrapper = styled.div`
  /* opacity: 0;
  transition-property: opacity;
  transition-duration: 0.9s; */

  &.popup__wrap_show {
    /* opacity: 1; */
  }
  &.popup__wrap_show #dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &.popup__wrap_show .popup__container {
    transform: ${({ type }) =>
      type === "left" || type === "right"
        ? `translateX(${position[type].transform * 100}%)`
        : `translateY(${position[type].transform * 100}%)`};
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: ${({ type }) => position[type].top};
  right: ${({ type }) => position[type].right};
  left: ${({ type }) => position[type].left};
  bottom: ${({ type }) => position[type].bottom};
  width: ${({ type, size }) =>
    type === "left" || type === "right"
      ? `${typeof size === "string" ? size : `${size}px`}`
      : "100%"};
  height: ${({ type, size }) =>
    type === "left" || type === "right"
      ? "100%"
      : `${typeof size === "string" ? size : `${size}px`}`};
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transition-property: transform;
  transition-duration: 0.9s;
  z-index: 1000;
`;

export const PopupCloseBtn = styled.button`
  outline: none;
  background: none;
  border: none;
  color: #8f8f8f;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
`;
