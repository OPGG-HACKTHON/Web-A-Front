import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

import { pickType } from "../Carousel/Carousel";

import {
  PickImg,
  ItemIndex,
  GameTitle,
  ReleaseDate,
  WholeContainer,
  CarouselWrapper,
  CarouselContainer,
  CarouselImageContainer,
  CurrentItemInfoContainer,
} from "./ReleasedIndieChip.style";

import { ArrowBtn } from "components/ArrowBtn";
import { IndexTitle } from "components/IndexTitle";

const ReleasedIndieChip: React.FC<{ releasedIndieChips: Array<pickType> }> = ({
  releasedIndieChips,
}) => {
  const { t } = useTranslation("main");

  const [thumbnailListState, setThumbnailListState] = useState<Array<string>>(
    []
  );
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedItem, setSelectedItem] = useState(releasedIndieChips[0]);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const thumbnailList = releasedIndieChips.map((chip) => chip.header_image);
    setThumbnailListState([
      thumbnailList[thumbnailList.length - 1],
      ...thumbnailList,
      thumbnailList[0],
    ]);
  }, [releasedIndieChips]);

  useEffect(() => {
    if (parentRef?.current && carouselItemsRef?.current[1]) {
      parentRef?.current?.scrollTo({
        left: carouselItemsRef?.current[1].clientWidth / 5.5,
      });
    }
  }, [thumbnailListState]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (releasedIndieChips && releasedIndieChips.length > 0) {
      setSelectedItem(releasedIndieChips[newIdx - 1]);
      setSelectedIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const handleRightClick = () => {
    if (releasedIndieChips && releasedIndieChips.length > 0) {
      let newIdx = selectedIndex + 1;
      if (newIdx >= releasedIndieChips.length + 1) {
        newIdx = 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (releasedIndieChips && releasedIndieChips.length > 0) {
      let newIdx = selectedIndex - 1;
      if (newIdx < 1) {
        newIdx = releasedIndieChips.length;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <CarouselWrapper>
      <WholeContainer>
        <IndexTitle withoutIndex title={t("main_carousel_this_month_title")} />
        <CarouselContainer>
          <CarouselImageContainer ref={parentRef} width={920}>
            {thumbnailListState.map((thumbnail: string, idx: number) => (
              <PickImg
                selected={idx === selectedIndex}
                key={`${thumbnail}-${idx}`}
                ref={(el: HTMLDivElement) =>
                  (carouselItemsRef.current[idx] = el)
                }
                style={{ backgroundImage: `url(${thumbnail})` }}
              />
            ))}
          </CarouselImageContainer>
          <div
            style={{ position: "absolute", left: "32.8rem", top: "21.5rem" }}>
            <ArrowBtn left white onClick={handleLeftClick} />
          </div>
          <CurrentItemInfoContainer>
            <ItemIndex>{`${selectedIndex} / ${releasedIndieChips.length}`}</ItemIndex>
            <GameTitle>{selectedItem?.name}</GameTitle>
            <ReleaseDate>21.09.22</ReleaseDate>
          </CurrentItemInfoContainer>
          <div
            style={{ position: "absolute", right: "32.8rem", top: "21.5rem" }}>
            <ArrowBtn white onClick={handleRightClick} />
          </div>
        </CarouselContainer>
      </WholeContainer>
    </CarouselWrapper>
  );
};

export default ReleasedIndieChip;
