import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

import {
  PickImg,
  WholeContainer,
  CarouselWrapper,
  CarouselContainer,
  CarouselImageContainer,
} from "./PreviewCarousel.style";

import { Modal } from "components/Modal";
import { ArrowBtn } from "components/ArrowBtn";
import { IndexTitle } from "components/IndexTitle";
import { CarouselModal } from "components/CarouselModal";

const PrewviewCarousel: React.FC<{ thumbnailList: Array<string> }> = ({
  thumbnailList,
}) => {
  const { t } = useTranslation("about");

  const [open, setOpen] = useState(false);
  const [thumbnailListState, setThumbnailListState] = useState<Array<string>>(
    []
  );
  const [selectedIndex, setSelectedIndex] = useState(1);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setThumbnailListState([
      thumbnailList[thumbnailList.length - 1],
      ...thumbnailList,
      thumbnailList[0],
    ]);
  }, [thumbnailList]);

  useEffect(() => {
    if (parentRef?.current && carouselItemsRef?.current[1]) {
      parentRef?.current?.scrollTo({
        left: carouselItemsRef?.current[1].clientWidth / 2,
      });
    }
  }, [thumbnailListState]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (thumbnailList && thumbnailList.length > 0) {
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
    if (thumbnailList && thumbnailList.length > 0) {
      let newIdx = selectedIndex + 1;
      if (newIdx >= thumbnailList.length + 1) {
        newIdx = 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (thumbnailList && thumbnailList.length > 0) {
      let newIdx = selectedIndex - 1;
      if (newIdx < 1) {
        newIdx = thumbnailList.length;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <CarouselWrapper>
      <WholeContainer>
        <IndexTitle withoutIndex title={t("about_preview_title")} />
        <CarouselContainer>
          <CarouselImageContainer ref={parentRef} width={890}>
            {thumbnailListState.map((thumbnail: string, idx: number) => (
              <PickImg
                onClick={() => setOpen(true)}
                selected={idx === selectedIndex}
                key={`${thumbnail}-${idx}`}
                ref={(el: HTMLDivElement) =>
                  (carouselItemsRef.current[idx] = el)
                }
                style={{ backgroundImage: `url(${thumbnail})` }}
              />
            ))}
            <div style={{ position: "absolute", left: "22rem", top: "12rem" }}>
              <ArrowBtn left white onClick={handleLeftClick} />
            </div>
            <div style={{ position: "absolute", right: "22rem", top: "12rem" }}>
              <ArrowBtn white onClick={handleRightClick} />
            </div>
          </CarouselImageContainer>
        </CarouselContainer>
        <Modal {...{ open }} onClose={() => setOpen(false)}>
          <CarouselModal
            {...{
              selectedIndex,
              itemList: thumbnailListState,
              handlePrevClick: handleLeftClick,
              handleNextClick: handleRightClick,
              handleModalClose: () => setOpen(false),
            }}
          />
        </Modal>
      </WholeContainer>
    </CarouselWrapper>
  );
};

export default PrewviewCarousel;
