import React, { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import * as Ms from "./Modal.style";
import useClickAway from "../../hooks/useClickAway";

function Modal({ children, width, height, visible, onClose, ...props }) {
  const ref = useClickAway(() => {
    if (onClose) onClose();
  });

  const containerStyle = useMemo(() => ({
    width,
    height,
  }));

  /* global document */
  const elem = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    document.body.appendChild(elem);
    return () => {
      document.body.removeChild(elem);
    };
  });

  return ReactDOM.createPortal(
    <Ms.BackgroundDim>
      <Ms.ModalContainer
        ref={ref}
        style={{ ...props.style, ...containerStyle }}
      >
        {children}
      </Ms.ModalContainer>
    </Ms.BackgroundDim>,
    elem
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.shape,
};

Modal.defaultProps = {
  children: null,
  width: 600,
  height: 600,
  visible: false,
  onClose: null,
  style: {},
};

export default Modal;
