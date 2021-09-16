import styled from "styled-components";
import Image from "next/image";

export const RoulettePlayContentWrapper = styled.div`
  margin: 0 1.9rem;
  position: relative;
  width: 46rem;
  height: 21.5rem;
  background-color: ${({ theme }) => theme.palette.grayScale[700]};
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

export const RoulettePlayContentBox = styled.div`
  width: 46rem;
  height: 21.5rem;
  display: flex;
  opacity: 0;
  transition: opacity 0.5s 0s;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  background-color: #000000ac;
  z-index: 3;
  padding: 2rem;
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
    &:hover {
      ${RoulettePlayContentBox} {
        opacity: 1;
      }
    }
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

export const RoulettePlayContentTitle = styled.h3`
  color: ${({ theme }) => theme.palette.grayScale[100]};
  font-weight: 500;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.03em;
`;

export const RoulettePlayContentGenres = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.03em;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.grayScale[100]};
  span {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 14px;
    min-width: 64px;
    padding: 0.3rem 1rem;
    display: inline-block;
    margin: 0.5rem;
  }
`;

export const RoulettePlayContentBtn = styled.span`
  cursor: pointer;
  margin-top: 2rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: #c7c7c7;
  display: inline-block;
  border: 2px solid #c7c7c7;
  border-radius: 5px;
  padding: 0.15rem 1.5rem;
`;

export const RoulettePlayContentImage = styled(Image)<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
