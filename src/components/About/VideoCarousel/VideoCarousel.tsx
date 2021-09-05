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

import { IndexTitle } from "components/IndexTitle";

const VideoCarousel: React.FC<{ movies: Array<string> }> = ({ movies }) => {
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
        <IndexTitle
          withoutIndex
          title="영상"
          total={movies.length}
          clickHandler={handleSelectedImageChange}
          onScreenCount={0}
          selectedIndex={0}
        />
        <CarouselContainer>
          <SelectedVideo controls>
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
      </WholeContainer>
    </CarouselWrapper>
  );
};

export default VideoCarousel;
