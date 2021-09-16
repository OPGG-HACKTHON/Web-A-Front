import styled from "styled-components";

export interface PickImgProps {
  selected: boolean;
}

export interface CarouselImageContainerProps {
  width: number;
}

const CarouselWrapper = styled.section`
  padding: 10rem 0 20rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
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
  margin: 0 0.8rem;
  height: 16.6rem;
  min-width: 33rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: ${({ selected }) => (selected ? "unset;" : `brightness(20%);`)};
  border-radius: 1rem;
`;

const CurrentItemInfoContainer = styled.div`
  position: absolute;
  top: 18rem;
  width: 26.4rem;
  height: 13rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.grayScale[100]};

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ItemIndex = styled.div`
  font-size: 1.4rem;
  padding: 1.5rem 0 2rem 0;
`;

const GameTitle = styled.div`
  font-size: 2.2rem;
  line-height: 2.754rem;
  width: 26rem;
  padding: 0 1rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ReleaseDate = styled.div`
  font-size: 1.4rem;
  padding: 2rem 0 1.5rem 0;
`;

export {
  WholeContainer,
  CarouselContainer,
  CarouselImageContainer,
  CurrentItemInfoContainer,
  PickImg,
  CarouselWrapper,
  ItemIndex,
  GameTitle,
  ReleaseDate,
};
