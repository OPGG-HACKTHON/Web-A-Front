import styled, { keyframes } from "styled-components";

const animate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const RoulettePlayContentWrapper = styled.div`
  margin: 0 1.9rem;
  position: relative;
  width: 46rem;
  height: 21.5rem;
  overflow: hidden;
`;

export const RoulettePlayContentGroup = styled.div`
  transition: all 0.5s ease-in-out;
  position: absolute;
  animation: ${animate} 0.3s 0s infinite;
  display: flex;
`;

export const RoulettePlayContentRandom = styled.div`
  margin: 0 3rem;
  background-color: black;
  width: 46rem;
  height: 21.5rem;
  font-size: 5rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
  text-align: center;
`;
