import styled from "styled-components";

const PickedImg = styled.div`
  height: 48rem;
  width: 85.4rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonWrapper = styled.div`
  top: 50vh;
  position: absolute;
  transform: translateY(-50%);
`;

const PreviewImgHeader = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 2rem;
`;

const PreviewImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const IndexWrapper = styled.div`
  color: ${({ theme }) => theme.palette.grayScale[100]};
  align-self: center;
  justify-content: center;
  font-size: 1.4rem;
  display: flex;
`;

const DotWrapper = styled.div`
  top: 3rem;
  display: flex;
  position: relative;
  justify-content: center;
`;

interface IDotProps {
  selected: boolean;
}
const Dot = styled.div<IDotProps>`
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.primary.main : theme.palette.grayScale[200]};
  border-radius: 1rem;
  margin: 0 0.75rem;
`;

export {
  Dot,
  PickedImg,
  DotWrapper,
  IndexWrapper,
  ButtonWrapper,
  CloseIconWrapper,
  PreviewImgHeader,
  PreviewImgWrapper,
};
