import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IndexTitle } from "components/IndexTitle";

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
    <CarouselContainer>
      <IndexTitle
        title="이거 어때요?"
        total={datas.length}
        clickHandler={handleSelectedImageChange}
        {...{ selectedIndex, setSelectedIndex, onScreenCount }}
      />
      <CarouselImageContainer width={600}>
        {onScreenCountArr.map((dataArr, idx) => (
          <Container
            key={idx}
            ref={(el: HTMLDivElement) => (carouselItemsRef.current[idx] = el)}>
            {dataArr.map((image, idx) => (
              <Image
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.thumbnail})` }}
                key={image.id}
              />
            ))}
          </Container>
        ))}
      </CarouselImageContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  height: 150px;
  min-width: 150px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

interface CarouselImageContainerProps {
  width: number;
}

const CarouselImageContainer = styled.div<CarouselImageContainerProps>`
  display: flex;
  max-width: ${(props) => `${props.width}px`};
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  min-width: 600px;
  height: 500px;
`;

export default Carousel;
