import styled from "styled-components";

interface ButtonContainerProps {
  left?: boolean;
  white?: boolean;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 4rem;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.palette.grayScale[100]};
  transform: ${({ left }) => (left ? "rotate(180deg)" : "unset")};
  cursor: pointer;
`;

interface ArrowProps {
  white?: boolean;
}

const Arrow = styled.div<ArrowProps>`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.1rem;
  border-top: 0.4rem solid ${({ theme }) => theme.palette.grayScale[100]};
  border-right: 0.4rem solid ${({ theme }) => theme.palette.grayScale[100]};
  transform: rotate(45deg) translate(-0.2rem, 0.2rem);
`;

export { ButtonContainer, Arrow };
