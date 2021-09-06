import styled from "styled-components";
interface IVisibleProps {
  open: boolean;
}
const ModalWrapper = styled.div<IVisibleProps>`
  box-sizing: border-box;
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<IVisibleProps>`
  box-sizing: border-box;
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export { ModalWrapper, ModalOverlay };
