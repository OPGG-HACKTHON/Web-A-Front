import React from "react";
// styled
import {
  CardContainer,
  CardInfo,
  CardTag,
  CardTagContainer,
  CardThumbnail,
  CardTitle,
} from "./CarouselCard.style";

export type dataType = {
  id: number;
  title: string;
  thumbnail: string;
  tag: Array<string>;
};

const CarouselCard: React.FC<{
  data: dataType;
}> = ({ data }) => {
  const { id, tag } = data;
  return (
    <CardContainer>
      <CardThumbnail style={{ backgroundImage: `url(${data.thumbnail})` }} />
      <CardInfo>
        <CardTitle>{data.title}</CardTitle>
        <CardTagContainer>
          {tag.map((itemTag: string) => (
            <CardTag key={`${itemTag}-${id}`}>{itemTag}</CardTag>
          ))}
        </CardTagContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default CarouselCard;
