import styled from "styled-components";

export const GameInfoMetaWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  & + & {
    margin-top: 2.5rem;
  }
`;

export const GameInfoMetaTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  margin-right: 1.8rem;
  color: ${({ theme }) => theme.palette.primary["light"]};
`;
export const GameInfoMetaDesc = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.9rem;
  max-width: 30rem;
  min-width: 30rem;
  color: ${({ theme }) => theme.palette.grayScale[200]};
`;
