import Image from "next/image";

import styled from "styled-components";

export const GameInfoWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20rem 0 5rem 0;
  background: ${({ theme }) => theme.palette.backgroundColors["dark"]};
`;

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 102.4rem;
`;

export const GameInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.8rem;
`;

export const GameInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
`;

export const GameInfoTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
  margin-bottom: 5.5rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;
export const GameInfoHashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GameInfoImg = styled.div<{ url: string }>`
  width: 46rem;
  height: 21.5rem;
  border-radius: 1rem;
  background-image: url(${({ url }) => url});
`;

export const GameInfoBox = styled.div`
  display: flex;
  width: 100%;
  padding: 4.1rem 9.5rem;
  background: ${({ theme }) => theme.palette.backgroundColors["main"]};
`;

export const GameInfoBoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;
