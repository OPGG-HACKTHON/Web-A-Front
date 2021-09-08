import React, { useEffect, useRef, useState } from "react";
// styled
import {
  WholeContainer,
  CarouselContainer,
  CarouselImageContainer,
  Container,
} from "./Carousel.style";
// custom-components
import { IndexTitle } from "components/IndexTitle";
import { CarouselCard } from "./CarouselCard";

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
}

const Carousel: React.FC<ICarouselProps> = ({
  recommendList,
  onScreenCount,
}) => {
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
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <WholeContainer>
      <IndexTitle
        title="이런 인디칩 어때요?"
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
    </WholeContainer>
  );
};

export default Carousel;
