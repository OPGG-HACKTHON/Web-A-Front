import React, { useRef, useState } from "react";

import {
  WholeContainer,
  VideoChip,
  VideoWrapper,
  CarouselContainer,
  VideoListWrapper,
  VideoItemWrapper,
  SelectedVideo,
  ButtonWrapper,
} from "./VideoCarousel.style";
import { ArrowBtn } from "components/ArrowBtn";

import { IndexTitle } from "components/IndexTitle";

const VideoCarousel: React.FC<{ videos: Array<string> }> = ({ videos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (videos && videos.length > 0) {
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
    if (videos && videos.length > 0) {
      let newIdx = selectedIndex + 1;
      if (newIdx >= videos.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleUpClick = () => {
    if (videos && videos.length > 0) {
      let newIdx = selectedIndex - 1;
      if (newIdx < 0) {
        newIdx = videos.length;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <WholeContainer>
      <IndexTitle
        withoutIndex
        title="영상"
        total={videos.length}
        clickHandler={handleSelectedImageChange}
        onScreenCount={0}
        selectedIndex={0}
      />
      <CarouselContainer>
        <SelectedVideo controls>
          <source src={videos[selectedIndex]} type="video/mp4" />
        </SelectedVideo>
        <VideoListWrapper>
          <ButtonWrapper upper>
            <ArrowBtn onClick={handleUpClick} left />
          </ButtonWrapper>
          <VideoWrapper>
            {videos.map((videoSrc: string, idx) => (
              <VideoItemWrapper
                ref={(el: HTMLDivElement) =>
                  (carouselItemsRef.current[idx] = el)
                }
                selected={selectedIndex === idx}>
                <VideoChip src={videoSrc} />
              </VideoItemWrapper>
            ))}
          </VideoWrapper>
          <ButtonWrapper>
            <ArrowBtn onClick={handleDownClick} />
          </ButtonWrapper>
        </VideoListWrapper>
      </CarouselContainer>
    </WholeContainer>
  );
};

export default VideoCarousel;
