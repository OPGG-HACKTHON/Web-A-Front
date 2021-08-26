import React from "react";
// type
import { IPreviewCarouselModal } from "./PreviewCarouselModal.type";
// styled
import {
  Dot,
  PickedImg,
  DotWrapper,
  IndexWrapper,
  ButtonWrapper,
  PreviewImgHeader,
  PreviewImgWrapper,
  CloseIconWrapper,
} from "./PreviewCarouselModal.style";
// custom-components
import { ArrowBtn } from "components/ArrowBtn";
// icons
import { CloseIcon } from "assets/icons";

const PrewviewCarouselModal: React.FC<IPreviewCarouselModal> = ({
  selectedIndex,
  thumbnailListState,
  handleLeftClick,
  handleRightClick,
  handleModalClose,
}) => {
  return (
    <>
      <ButtonWrapper style={{ left: "22rem" }}>
        <ArrowBtn left white onClick={handleLeftClick} />
      </ButtonWrapper>
      <PreviewImgWrapper>
        <PreviewImgHeader>
          <IndexWrapper>
            {selectedIndex} / {thumbnailListState.length - 2}
          </IndexWrapper>
          <CloseIconWrapper onClick={handleModalClose}>
            <CloseIcon width="1.5rem" height="1.5rem" />
          </CloseIconWrapper>
        </PreviewImgHeader>
        <PickedImg
          style={{
            backgroundImage: `url(${thumbnailListState[selectedIndex]})`,
          }}
        />
        <DotWrapper>
          {thumbnailListState.map((_, i) =>
            i === 0 || i === thumbnailListState.length - 1 ? null : (
              <Dot selected={i === selectedIndex} />
            )
          )}
        </DotWrapper>
      </PreviewImgWrapper>
      <ButtonWrapper style={{ right: "22rem" }}>
        <ArrowBtn white onClick={handleRightClick} />
      </ButtonWrapper>
    </>
  );
};

export default PrewviewCarouselModal;
