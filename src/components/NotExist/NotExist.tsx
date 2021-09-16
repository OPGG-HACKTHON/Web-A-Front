import React from "react";
import Image from "next/image";

import notExist from "assets/images/notExist.svg";

import {
  NotExistWrapper,
  NotExistText,
  NotExistContainer,
} from "./NotExist.style";

interface INotExistProps {
  text: string;
  style?: React.CSSProperties;
}

const NotExist: React.FC<INotExistProps> = ({ text, style }) => {
  return (
    <NotExistWrapper>
      <NotExistContainer {...{ style }}>
        <Image src={notExist} />
        <NotExistText>{text}</NotExistText>
      </NotExistContainer>
    </NotExistWrapper>
  );
};

export default NotExist;
