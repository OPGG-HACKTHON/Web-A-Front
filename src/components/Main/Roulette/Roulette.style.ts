import Image from "next/image";

import styled from "styled-components";

export const RouletteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.2rem;
  height: 112.6rem;
  background-image: url("/roulette/background.png");
  background-size: cover;
  background-position: center;
`;

export const RouletteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13.1rem 6.1rem;
`;

export const RouletteTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: -0.03em;
  line-height: 5rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;

export const RouletteSubTitleWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.9rem;
  position: relative;
`;

export const RouletteSubTitle = styled.h3`
  font-size: 1.8rem;
  line-height: 2.254rem;
  letter-spacing: -0.03em;
  margin-right: 0.1rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;

export const RouletteSubTitleTooltip = styled(Image)`
  cursor: help;
  width: 24px;
  height: 24px;
`;
