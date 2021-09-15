import styled, { css } from "styled-components";

export const RankingViewWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const RankingViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  min-width: 102.4rem;
`;

export const RankingViewHeader = styled.h2`
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.5rem;
  color: ${({ theme }) => theme.palette.grayScale[200]};
  margin-bottom: 2.5rem;
`;
export const RankingViewContents = styled.div`
  display: flex;
  padding: 4rem 5.2rem 0 5.2rem;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.grayScale[500]};
`;

export const RankingViewAutoScrollWrapper = styled.div`
  margin-right: 3.8rem;
  min-width: 38.5rem;
  height: 25rem;
  position: relative;
  overflow: hidden;
`;

export const RankingViewTitle = styled.span<{ isActive: boolean }>`
  display: flex;
  height: 5rem;
  padding: 0 2.1rem;

  font-weight: 400;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grayScale[400]};
  & a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border: 0.2rem solid ${theme.palette.primary.main};
      border-radius: 0.5rem;
      color: ${theme.palette.grayScale[100]};
    `}
`;

export const RankingViewText = styled.p`
  overflow: hidden;
  & + & {
    margin-left: 2.8rem;
  }
`;

export const RankingViewImage = styled.div<{ url: string }>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
