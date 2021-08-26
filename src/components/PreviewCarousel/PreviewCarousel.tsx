import React, { useEffect, useRef, useState } from "react";
// styled
import {
  WholeContainer,
  CarouselContainer,
  CarouselImageContainer,
  PickImg,
} from "./PreviewCarousel.style";
// custom-components
import { IndexTitle } from "components/IndexTitle";
import { ArrowBtn } from "components/ArrowBtn";
import Modal from "components/Modal/Modal";
import PrewviewCarouselModal from "./PreviewCarouselModal/PreviewCarouselModal";

const PrewviewCarousel: React.FC<{ thumbnailList: Array<string> }> = ({
  thumbnailList,
}) => {
  const [visible, setVisible] = useState(false);
  const [thumbnailListState, setThumbnailListState] = useState<Array<string>>(
    []
  );
  const [selectedIndex, setSelectedIndex] = useState(1);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    setThumbnailListState([
      thumbnailList[thumbnailList.length - 1],
      ...thumbnailList,
      thumbnailList[0],
    ]);
  }, [thumbnailList]);

  useEffect(() => {
    if (carouselItemsRef?.current[1]) {
      carouselItemsRef?.current[1]?.scrollIntoView({
        inline: "center",
      });
    }
  }, [thumbnailListState]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (thumbnailList && thumbnailList.length > 0) {
      setSelectedIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
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
    <WholeContainer>
      <IndexTitle
        withoutIndex
        title="프리뷰"
        total={thumbnailList.length}
        clickHandler={handleSelectedImageChange}
        onScreenCount={0}
        selectedIndex={0}
      />
      <CarouselContainer>
        <CarouselImageContainer width={890}>
          {thumbnailListState.map((thumbnail: string, idx: number) => (
            <PickImg
              onClick={() => setVisible(true)}
              selected={idx === selectedIndex}
              key={`${thumbnail}-${idx}`}
              ref={(el: HTMLDivElement) => (carouselItemsRef.current[idx] = el)}
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
      <Modal {...{ visible }} onClose={() => setVisible(false)}>
        <PrewviewCarouselModal
          {...{
            selectedIndex,
            thumbnailListState,
            handleLeftClick,
            handleRightClick,
            handleModalClose: () => setVisible(false),
          }}
        />
      </Modal>
    </WholeContainer>
  );
};

export default PrewviewCarousel;
