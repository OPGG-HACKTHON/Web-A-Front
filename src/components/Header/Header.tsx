import Image from "next/image";
import Link from "next/link";

import logo from "assets/images/logo.svg";

import { HeaderWrapper } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href={"/"}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Image unoptimized src={logo} height={27} />
        </a>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
