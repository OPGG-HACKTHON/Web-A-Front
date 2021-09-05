import Link from "next/link";

import { FooterContainer, FooterText, FooterLinks } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright 2021. wearecastle. All rights reserved.</FooterText>

      <FooterLinks>
        <Link href="/#">메타데이터 소스</Link>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
