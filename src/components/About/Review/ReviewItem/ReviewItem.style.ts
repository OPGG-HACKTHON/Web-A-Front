import styled from "styled-components";

export const ReviewItemWrapper = styled.div`
  width: 89rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.palette.backgroundColors.main};
  padding: 4rem 5rem;
  border-radius: 1rem;
  display: flex;
  margin: 2rem 0;
`;

export const ReviewItemName = styled.span`
  display: inline-block;
  margin-top: 0.4rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;

export const ReviewItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.9rem;
`;

export const ReviewItemContentTitle = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.palette.grayScale[300]};
  span {
    padding-top: 0.5rem;

    &:first-of-type {
      margin-left: 1rem;
    }

    &:last-of-type {
      margin-left: 2.4rem;
    }
  }
`;

export const ReviewItemContentText = styled.p`
  margin-top: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;
