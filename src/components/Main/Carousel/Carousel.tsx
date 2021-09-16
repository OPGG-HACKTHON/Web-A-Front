import React, { useEffect, useRef, useState } from "react";
// styled
import {
  CarouselWidthContainer,
  CarouselContainer,
  CarouselImageContainer,
  CarouselWrapper,
  Container,
} from "./Carousel.style";
// custom-components
import { IndexTitle } from "components/IndexTitle";
import { CarouselCard } from "./CarouselCard";
import { useTranslation } from "next-i18next";

export type pickType = {
  id: number;
  name: string;
  is_free: boolean;
  header_image: string;
  genres: [string];
};

interface ICarouselProps {
  recommendList: [pickType];
  onScreenCount: number;
  aboutPage?: boolean;
}

const Carousel: React.FC<ICarouselProps> = ({
  recommendList,
  onScreenCount,
  aboutPage,
}) => {
  const { t } = useTranslation(aboutPage ? "about" : "main");

  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const onScreenCountArr = React.useMemo(() => {
    const tempDatas = [...recommendList];
    const tempArr = [];
    for (let i = 0; i < tempDatas.length; i + onScreenCount) {
      tempArr.push(tempDatas.splice(i, i + onScreenCount));
    }

    return tempArr;
  }, [recommendList, onScreenCount]);

  useEffect(() => {
    if (recommendList && recommendList[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        recommendList.length
      );

      setSelectedIndex(0);
    }
  }, [recommendList]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (recommendList && recommendList.length > 0) {
      setSelectedIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <CarouselWrapper {...{ aboutPage }}>
      <CarouselWidthContainer>
        <IndexTitle
          title={
            aboutPage ? t("about_similar_title") : t("main_carousel_title")
          }
          total={recommendList.length}
          clickHandler={handleSelectedImageChange}
          {...{ selectedIndex, setSelectedIndex, onScreenCount }}
        />
        <CarouselContainer>
          <CarouselImageContainer width={920}>
            {onScreenCountArr.map((recommandArr, idx) => (
              <Container
                key={idx}
                ref={(el: HTMLDivElement) =>
                  (carouselItemsRef.current[idx] = el)
                }>
                {recommandArr.map((recommand) => (
                  <CarouselCard key={recommand.id} {...{ recommand }} />
                ))}
              </Container>
            ))}
          </CarouselImageContainer>
        </CarouselContainer>
      </CarouselWidthContainer>
    </CarouselWrapper>
  );
};

export default Carousel;
