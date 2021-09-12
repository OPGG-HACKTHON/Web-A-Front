import styled from "styled-components";

export const RankingViewWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid red;
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
  border-top: 1px solid ${({ theme }) => theme.palette.grayScale[500]};
`;

export const RankingViewAutoScroll = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 38.5rem;
  margin-right: 3.8rem;
`;
export const RankingViewTitle = styled.div`
  display: flex;
  padding: 1.1rem 2.1rem;
  color: ${({ theme }) => theme.palette.grayScale[400]};
`;

export const RankingViewImage = styled.div`
  width: 100%;
  height: 26.2rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.grayScale[400]};
`;
