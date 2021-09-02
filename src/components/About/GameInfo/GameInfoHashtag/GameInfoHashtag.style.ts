import styled from "styled-components";

export const GameInfoHashTagWrapper = styled.span`
  display: flex;
  align-items: center;

  padding: 0.3rem 1.9rem;
  border-radius: 14px;
  background: #836eff;
  margin: 0 1rem 1rem 0;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;
