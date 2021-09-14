import styled, { css } from "styled-components";

export const IndiPickWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.backgroundColors.dark};
`;
export const IndiPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  min-width: 102.4rem;
`;
export const IndiPickHeader = styled.h2`
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.5rem;
  color: ${({ theme }) => theme.palette.grayScale[200]};
  margin-bottom: 2.5rem;
`;
export const IndiPickContents = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 5.2rem 0 5.2rem;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.grayScale[500]};
`;
export const IndiPickVS = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const IndiPickItemWrapper = styled.div<{ isLeft?: boolean }>`
  display: flex;
  flex-direction: ${({ isLeft }) => (isLeft ? "row" : "row-reverse")};

  & a {
    text-decoration: none;
    color: inherit;
  }
`;
export const IndiPickLikeBox = styled.button<{ btnState?: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10.2rem;
  height: 21.8rem;
  border-radius: 0.5rem;

  & h2 {
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 2.8rem;
    margin-bottom: 0.7rem;
  }
  & h4 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  & p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-align: center;
    margin-left: 0.6rem;
  }

  ${({ btnState }) =>
    btnState === "default"
      ? css`
          border: 0.1rem solid ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.grayScale[100]};
          background-color: transparent;
        `
      : btnState === "active"
      ? css`
          cursor: not-allowed;
          pointer-events: none;
          border: none;
          color: ${({ theme }) => theme.palette.grayScale[100]};
          background-color: ${({ theme }) => theme.palette.primary.main};
        `
      : css`
          cursor: not-allowed;
          pointer-events: none;
          border: none;
          color: ${({ theme }) => theme.palette.grayScale[300]};
          background-color: ${({ theme }) => theme.palette.grayScale[100]};
        `}
`;

export const IndiPickLikeBoxContainer = styled.div`
  pointer-events: none;
`;
export const IndiPickLikeBoxBottom = styled.span`
  display: flex;
  align-items: center;
`;

export const IndiPickItemBox = styled.span<{ isLeft?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 26.26rem;
  height: 21.8rem;
  border-radius: 0.5rem;
  margin: ${({ isLeft }) => (isLeft ? "0 0 0 2rem" : "0 2rem 0 0")};
  background-color: ${({ theme }) => theme.palette.grayScale[100]};
`;

export const IndiPickItemBoxImg = styled.div<{ img: string }>`
  width: 100%;
  height: 12.3rem;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem 0.5rem 0 0;
`;
export const IndiPickItemBoxContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
  height: calc(100% - 12.3rem);
  overflow: hidden;
`;
export const IndiPickItemBoxName = styled.h5`
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin-bottom: 1rem; ;
`;
export const IndiPickItemBoxGenres = styled.div`
  display: flex;
`;
export const IndiPickItemGenre = styled.span`
  padding: 0.2rem 1.4rem;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.9rem;
  border-radius: 1.4rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
  background-color: ${({ theme }) => theme.palette.primary.main};

  & + & {
    margin-left: 0.5rem;
  }
`;
