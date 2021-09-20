import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";

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
import { NotExist } from "components/NotExist";

const VideoCarousel: React.FC<{ movies: Array<string> }> = ({ movies }) => {
  const { t } = useTranslation("about");

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
        newIdx = movies.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleVideoModalClose = () => {
    videoRef?.current?.pause();
    setOpen(false);
  };

  return (
    <CarouselWrapper>
      <WholeContainer>
        <IndexTitle withoutIndex title={t("about_video_title")} />
        {movies.length ? (
          <>
            <CarouselContainer>
              <SelectedVideo
                key={movies[selectedIndex]}
                onClick={() => setOpen(true)}>
                <source src={movies[selectedIndex]} type="video/mp4" />
              </SelectedVideo>
              <VideoListWrapper>
                <ButtonWrapper upper>
                  <ArrowBtn onClick={handleUpClick} left />
                </ButtonWrapper>
                <VideoWrapper>
                  {movies.map((moviesrc: string, idx) => (
                    <VideoItemWrapper
                      key={`${moviesrc}-${idx}`}
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
            <Modal {...{ open }} onClose={handleVideoModalClose}>
              <CarouselModal
                video
                {...{
                  selectedIndex: selectedIndex + 1,
                  itemList: movies,
                  handlePrevClick: handleUpClick,
                  handleNextClick: handleDownClick,
                  handleModalClose: handleVideoModalClose,
                  videoRef,
                }}
              />
            </Modal>
          </>
        ) : (
          <NotExist text={t("about_video_not_exist")} />
        )}
      </WholeContainer>
    </CarouselWrapper>
  );
};

export default VideoCarousel;
