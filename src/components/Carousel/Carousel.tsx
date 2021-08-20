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

export type dataType = {
  id: number;
  title: string;
  thumbnail: string;
  tag: Array<string>;
};

const Carousel: React.FC<{ datas: Array<dataType>; onScreenCount: number }> = ({
  datas,
  onScreenCount,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const onScreenCountArr = React.useMemo(() => {
    const tempDatas = [...datas];
    const tempArr = [];
    for (let i = 0; i < tempDatas.length; i + onScreenCount) {
      tempArr.push(tempDatas.splice(i, i + onScreenCount));
    }

    return tempArr;
  }, [datas, onScreenCount]);

  useEffect(() => {
    if (datas && datas[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        datas.length
      );

      setSelectedIndex(0);
    }
  }, [datas]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (datas && datas.length > 0) {
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
        total={datas.length}
        clickHandler={handleSelectedImageChange}
        {...{ selectedIndex, setSelectedIndex, onScreenCount }}
      />
      <CarouselContainer>
        <CarouselImageContainer width={920}>
          {onScreenCountArr.map((dataArr, idx) => (
            <Container
              key={idx}
              ref={(el: HTMLDivElement) =>
                (carouselItemsRef.current[idx] = el)
              }>
              {dataArr.map((data) => (
                <CarouselCard key={data.id} {...{ data }} />
              ))}
            </Container>
          ))}
        </CarouselImageContainer>
      </CarouselContainer>
    </WholeContainer>
  );
};

export default Carousel;
