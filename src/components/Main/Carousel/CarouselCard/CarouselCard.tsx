import React from "react";
import { useTranslation } from "next-i18next";

import { pickType } from "../Carousel";

import {
  CardContainer,
  CardInfo,
  CardTag,
  CardTagContainer,
  CardThumbnail,
  CardTitle,
} from "./CarouselCard.style";

const CarouselCard: React.FC<{ recommand: pickType }> = ({ recommand }) => {
  const { t } = useTranslation("main");

  const { id, name, is_free, header_image, genres } = recommand;

  return (
    <CardContainer href={`/about/${id}`}>
      <CardThumbnail style={{ backgroundImage: `url(${header_image})` }} />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardTagContainer>
          {is_free && <CardTag>{t("main_carousel_card_tag_free")}</CardTag>}
          {genres.map((genre: string) => (
            <CardTag key={`${genre}-${id}`}>{genre}</CardTag>
          ))}
        </CardTagContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default CarouselCard;
