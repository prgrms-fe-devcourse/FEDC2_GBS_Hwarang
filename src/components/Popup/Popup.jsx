import React from "react";
import PropTypes from "prop-types";
import useClickAway from "hooks/useClickAway";
import { PopupContainer, PopupWrapper, PopupCloseBtn } from "./Popup.style";

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string, // popup type (left, right, top, bottom)
  show: PropTypes.bool, // popup show/hide flag
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dim: PropTypes.bool, // background dim show/hide flag
  onClose: PropTypes.func, // pop up close event
};
const defaultProps = {
  children: undefined,
  type: "left",
  show: false,
  size: "50%",
  dim: false,
  onClose: undefined,
};

const Popup = ({ children, show, type, size, dim, onClose }) => {
  const handleOnClose = () => {
    if (onClose) onClose();
  };
  const ref = useClickAway(() => handleOnClose());

  return (
    <PopupWrapper className={show ? "popup__wrap_show" : ""} type={type}>
      {dim && <div id="dim" />}
      <PopupContainer
        ref={ref}
        className="popup__container"
        type={type}
        size={size}
      >
        {children}
        <PopupCloseBtn
          type="button"
          className="popup__close_btn"
          onClick={handleOnClose}
        >
          X
        </PopupCloseBtn>
      </PopupContainer>
    </PopupWrapper>
  );
};

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
