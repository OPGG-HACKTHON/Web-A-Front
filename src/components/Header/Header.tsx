import Image from "next/image";
import Link from "next/link";

import logo from "assets/images/logo.svg";

import {
  HeaderTranslation,
  HeaderTranslationWrapper,
  HeaderWrapper,
} from "./Header.style";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const handleChangeLanguage = (newLocale: string) => {
    router.push(router.asPath, undefined, {
      locale: newLocale,
    });
  };

  return (
    <HeaderWrapper>
      <Link href={"/"}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Image src={logo} height={27} />
        </a>
      </Link>
      <HeaderTranslationWrapper>
        <HeaderTranslation
          isActive={router.locale === "ko"}
          onClick={() => handleChangeLanguage("ko")}>
          KOR
        </HeaderTranslation>
        <span>|</span>
        <HeaderTranslation
          isActive={router.locale === "en"}
          onClick={() => handleChangeLanguage("en")}>
          ENG
        </HeaderTranslation>
      </HeaderTranslationWrapper>
    </HeaderWrapper>
  );
};

export default Header;
