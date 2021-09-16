import styled from "styled-components";
import {
  CarouselImageContainerProps,
  PickImgProps,
} from "./PreviewCarousel.type";

const CarouselWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.palette.backgroundColors.dark};
`;

const WholeContainer = styled.div`
  width: 102.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;

const CarouselImageContainer = styled.div<CarouselImageContainerProps>`
  display: flex;
  max-width: ${(props) => `${props.width}px`};
  overflow-x: hidden;
`;

const PickImg = styled.div<PickImgProps>`
  margin: 0 0.9rem;
  height: 23rem;
  min-width: 41.6rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: ${({ selected }) => (selected ? "unset;" : `brightness(20%);`)};
`;

export {
  WholeContainer,
  CarouselContainer,
  CarouselImageContainer,
  PickImg,
  CarouselWrapper,
};
