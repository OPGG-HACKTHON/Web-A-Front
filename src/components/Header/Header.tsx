import Image from "next/image";
import logo from "assets/images/logo.svg";
import { HeaderWrapper } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Image src={logo} height={27} />
    </HeaderWrapper>
  );
};

export default Header;
