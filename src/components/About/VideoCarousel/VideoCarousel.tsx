import React, { useRef, useState } from "react";

import {
  WholeContainer,
  CarouselWrapper,
  VideoChip,
  VideoWrapper,
  CarouselContainer,
  VideoListWrapper,
  VideoItemWrapper,
  SelectedVideo,
  ButtonWrapper,
} from "./VideoCarousel.style";
import { ArrowBtn } from "components/ArrowBtn";

import { CarouselModal } from "components/CarouselModal";
import { IndexTitle } from "components/IndexTitle";
import { Modal } from "components/Modal";

const VideoCarousel: React.FC<{ movies: Array<string> }> = ({ movies }) => {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (movies && movies.length > 0) {
      setSelectedIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const handleDownClick = () => {
    if (movies && movies.length > 0) {
      let newIdx = selectedIndex + 1;
      if (newIdx >= movies.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleUpClick = () => {
    if (movies && movies.length > 0) {
      let newIdx = selectedIndex - 1;
      if (newIdx < 0) {
        newIdx = movies.length;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <CarouselWrapper>
      <WholeContainer>
        <IndexTitle withoutIndex title="영상" />
        <CarouselContainer>
          <SelectedVideo onClick={() => setVisible(true)}>
            <source src={movies[selectedIndex]} type="video/mp4" />
          </SelectedVideo>
          <VideoListWrapper>
            <ButtonWrapper upper>
              <ArrowBtn onClick={handleUpClick} left />
            </ButtonWrapper>
            <VideoWrapper>
              {movies.map((moviesrc: string, idx) => (
                <VideoItemWrapper
                  ref={(el: HTMLDivElement) =>
                    (carouselItemsRef.current[idx] = el)
                  }
                  selected={selectedIndex === idx}>
                  <VideoChip src={moviesrc} />
                </VideoItemWrapper>
              ))}
            </VideoWrapper>
            <ButtonWrapper>
              <ArrowBtn onClick={handleDownClick} />
            </ButtonWrapper>
          </VideoListWrapper>
        </CarouselContainer>
        <Modal {...{ visible }} onClose={() => setVisible(false)}>
          <CarouselModal
            video
            {...{
              selectedIndex,
              itemList: movies,
              handlePrevClick: handleUpClick,
              handleNextClick: handleDownClick,
              handleModalClose: () => setVisible(false),
            }}
          />
        </Modal>
      </WholeContainer>
    </CarouselWrapper>
  );
};

export default VideoCarousel;
