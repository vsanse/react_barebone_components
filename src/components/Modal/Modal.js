import React from "react";
import "./Modal.scss";
const Modal = ({ visible, onClose, width, children, ...rest }) => {
  return (
    <div className={`modalContainer ${visible ? "active" : ""}`} {...rest}>
      {visible && (
        <>
          <div className="modal__content" style={{ width: width }}>
            {children}
          </div>
          <div className="modal__overlay" onClick={onClose} />
        </>
      )}
    </div>
  );
};

export default Modal;
