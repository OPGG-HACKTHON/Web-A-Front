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
    const isDocumentExist = typeof window !== "undefined";
    if (visible && isDocumentExist)
      document.body.style.cssText = `overflow: hidden`;
    return () => {
      if (isDocumentExist) document.body.style.cssText = `overflow: ""`;
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
