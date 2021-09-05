import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.palette.backgroundColors.dark};
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 102.4rem;
  padding: 3rem 0;
`;

export const FooterText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.9rem;
  color: #7e7e7e;
`;

export const FooterLinks = styled.div`
  display: flex;
`;

export const LinkStyle = styled.a`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.9rem;
  color: #7e7e7e;

  & + & {
    margin-left: 3rem;
  }
`;
