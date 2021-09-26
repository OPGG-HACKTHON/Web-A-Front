import styled from "styled-components";

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
  padding-bottom: 2.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grayScale[500]};
`;
export const RankingViewContents = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 5.2rem 0 5.2rem;
  position: relative;
  height: 25rem;
  overflow: hidden;
`;

export const RankingViewAutoScrollWrapper = styled.div<{ scrollY: number }>`
  margin-right: 3.8rem;
  min-width: 38.5rem;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all ease-out 0.4s;
  transform: ${({ scrollY }) => `translateY(${scrollY}rem)`};
`;

export const RankingViewActiveWrapper = styled.div<{ activeY: number }>`
  width: 38.5rem;
  height: 5rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  transition: all ease-out 0.4s;
  transform: ${({ activeY }) => `translateY(${activeY}rem)`};

  color: ${({ theme }) => theme.palette.grayScale[100]};
  border: 0.2rem solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.5rem;
`;

export const RankingViewTitle = styled.span`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 2.1rem;
  font-weight: 400;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.grayScale[400]};

  & a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

export const RankingViewText = styled.p`
  overflow: hidden;
  & + & {
    margin-left: 2.8rem;
  }
`;

export const RankingViewImage = styled.div<{ url: string }>`
  cursor: pointer;
  width: 46.7rem;
  height: 100%;
  border-radius: 1rem;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
