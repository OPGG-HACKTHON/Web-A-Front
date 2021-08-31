import styled from "styled-components";

export const RoulettePlayContentWrapper = styled.div`
  margin: 0 1.9rem;
  position: relative;
  width: 46rem;
  height: 21.5rem;
  overflow: hidden;
`;

export const RoulettePlayContentGroup = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
`;

export const RoulettePlayContentCircle = styled.div<{ isPlay: boolean }>`
  position: relative;
  width: 100%;
  height: calc(46rem * 2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  @keyframes animate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(2160deg);
    }
  }
  animation: ${({ isPlay }) =>
    isPlay ? "animate 3.5s 0s ease-in-out forwards" : "none"};
`;

export const RoulettePlayContentRandom = styled.div`
  position: absolute;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46rem;
  height: 21.5rem;
  font-size: 5rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
  text-align: center;

  &:first-of-type {
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2;
  }

  &:nth-child(2) {
    left: 50%;
    top: 23rem;
    transform: translate(-50%, -10.75rem) rotate(90deg);
  }

  &:nth-child(3) {
    right: 0;
    top: 50%;
    transform: translate(0, -50%) rotate(180deg);
  }

  &:last-of-type {
    left: 50%;
    bottom: 23rem;
    transform: translate(-50%, 10.75rem) rotate(270deg);
  }
`;
