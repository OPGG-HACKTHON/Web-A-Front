import React, { useEffect } from "react";
// Type
import { IModalProps } from "./Modal.type";
// Styled
import { ModalOverlay, ModalWrapper } from "./Modal.style";

const Modal: React.FC<IModalProps> = ({ onClose, visible, children }) => {
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose(e);
  };

  useEffect(() => {
    if (visible) document.body.style.cssText = `overflow: hidden`;
    return () => {
      document.body.style.cssText = `overflow: ""`;
    };
  }, [visible]);

  return (
    <>
      <ModalOverlay {...{ visible }} />
      <ModalWrapper onClick={onMaskClick} tabIndex={-1} visible={visible}>
        {children}
      </ModalWrapper>
    </>
  );
};

export default Modal;
