import React, { useEffect } from "react";

import { ModalOverlay, ModalWrapper } from "./Modal.style";

interface IModalProps {
  onClose: (e: React.MouseEvent) => void;
  open: boolean;
}

const Modal: React.FC<IModalProps> = ({ onClose, open, children }) => {
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose(e);
  };

  useEffect(() => {
    const isDocumentExist = typeof window !== "undefined";
    if (open && isDocumentExist)
      document.body.style.cssText = `overflow: hidden`;
    return () => {
      if (isDocumentExist) document.body.style.cssText = `overflow: ""`;
    };
  }, [open]);

  return (
    <>
      <ModalOverlay {...{ open }} />
      <ModalWrapper onClick={onMaskClick} tabIndex={-1} {...{ open }}>
        {children}
      </ModalWrapper>
    </>
  );
};

export default Modal;
