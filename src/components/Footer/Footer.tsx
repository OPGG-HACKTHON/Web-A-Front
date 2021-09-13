import { useTranslation } from "next-i18next";
import Link from "next/link";

import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  FooterLinks,
  LinkStyle,
} from "./Footer.style";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Copyright 2021. wearecastle. All rights reserved.
        </FooterText>

        <FooterLinks>
          <Link href="/#">
            <LinkStyle>{t("common_footer_meta")}</LinkStyle>
          </Link>
          <Link href="/#">
            <LinkStyle>{t("common_footer_term")}</LinkStyle>
          </Link>
          <Link href="/#">
            <LinkStyle>{t("common_footer_privacy")}</LinkStyle>
          </Link>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
