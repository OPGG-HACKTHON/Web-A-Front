import Link from "next/link";

import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  FooterLinks,
  LinkStyle,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Copyright 2021. wearecastle. All rights reserved.
        </FooterText>

        <FooterLinks>
          <Link href="/#">
            <LinkStyle>메타데이터 소스</LinkStyle>
          </Link>
          <Link href="/#">
            <LinkStyle>이용 약관</LinkStyle>
          </Link>
          <Link href="/#">
            <LinkStyle>개인정보 처리방침</LinkStyle>
          </Link>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
