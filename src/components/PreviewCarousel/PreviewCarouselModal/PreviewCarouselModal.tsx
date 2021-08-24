import React from "react";
// type
import { IPreviewCarouselModal } from "./PreviewCarouselModal.type";
// styled
import { PickedImg } from "./PreviewCarouselModal.style";
// custom-components
import { ArrowBtn } from "components/ArrowBtn";

const PrewviewCarouselModal: React.FC<IPreviewCarouselModal> = ({
  selectedIndex,
  setSelectedIndex,
  thumbnailListState,
}) => {
  const handleRightClick = () => {
    if (thumbnailListState && thumbnailListState.length > 0) {
      let newIdx = selectedIndex + 1;
      if (newIdx >= thumbnailListState.length) {
        newIdx = 1;
      }
      setSelectedIndex(newIdx);
    }
  };
  const handleLeftClick = () => {
    if (thumbnailListState && thumbnailListState.length > 0) {
      let newIdx = selectedIndex - 1;
      if (newIdx < 0) {
        newIdx = thumbnailListState.length;
      }
      setSelectedIndex(newIdx);
    }
  };

  return (
    <>
      <div style={{ position: "absolute", left: "22rem", top: "12rem" }}>
        <ArrowBtn left white onClick={handleLeftClick}></ArrowBtn>
      </div>
      <PickedImg
        style={{ backgroundImage: `url(${thumbnailListState[selectedIndex]})` }}
      />
      <div style={{ position: "absolute", right: "22rem", top: "12rem" }}>
        <ArrowBtn white onClick={handleRightClick}></ArrowBtn>
      </div>
    </>
  );
};

export default PrewviewCarouselModal;
