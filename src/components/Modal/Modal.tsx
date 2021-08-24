import React, { useEffect } from "react";
// Type
import { IModalProps } from "./Modal.type";
// Styled
import { ModalOverlay, ModalInner, ModalWrapper } from "./Modal.style";
// Custom-Components

const Modal: React.FC<IModalProps> = ({ onClose, visible, children }) => {
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose(e);
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <>
      <ModalOverlay {...{ visible }} />
      <ModalWrapper onClick={onMaskClick} tabIndex={-1} visible={visible}>
        <ModalInner tabIndex={0} className="modal-inner">
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
