import styled from "styled-components";

export const WholeContainer = styled.div`
  width: 102.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ReviewWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.palette.backgroundColors.dark};
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0%;
`;
