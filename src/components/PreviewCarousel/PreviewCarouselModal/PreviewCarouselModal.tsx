import React from "react";
import Image from "next/image";

import close from "assets/images/close.svg";

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

import { ArrowBtn } from "components/ArrowBtn";

export interface IPreviewCarouselModal {
  selectedIndex: number;
  thumbnailListState: Array<string>;
  handleLeftClick: () => void;
  handleRightClick: () => void;
  handleModalClose: () => void;
}

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
            <Image src={close} height={15} width={15} />
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
              <Dot
                key={`${thumbnailListState[i]}-${i}`}
                selected={i === selectedIndex}
              />
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
