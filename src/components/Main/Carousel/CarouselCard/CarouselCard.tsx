import React from "react";

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
  const { id, name, is_free, header_image, genres } = recommand;

  return (
    <CardContainer href={`/about/${id}`}>
      <CardThumbnail style={{ backgroundImage: `url(${header_image})` }} />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardTagContainer>
          {is_free && <CardTag>무료</CardTag>}
          {genres.map((genre: string) => (
            <CardTag key={`${genre}-${id}`}>{genre}</CardTag>
          ))}
        </CardTagContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default CarouselCard;
