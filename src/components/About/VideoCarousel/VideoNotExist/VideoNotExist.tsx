import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import notExist from "assets/images/notExist.svg";

import {
  VideoNotExistWrapper,
  NotExistText,
  VideoNotExistContainer,
} from "./VideoNotExist.style";

const VideNotExist: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <VideoNotExistWrapper>
      <VideoNotExistContainer>
        <Image src={notExist} />
        <NotExistText>{t("about_video_not_exist")}</NotExistText>
      </VideoNotExistContainer>
    </VideoNotExistWrapper>
  );
};

export default VideNotExist;
