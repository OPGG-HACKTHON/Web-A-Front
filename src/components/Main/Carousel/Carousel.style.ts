import styled from "styled-components";

const CarouselWrapper = styled.div`
  padding: 10rem 0 5rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.backgroundColors.dark}; ;
`;

const CarouselWidthContainer = styled.div`
  width: 102.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface CarouselImageContainerProps {
  width: number;
}

const CarouselImageContainer = styled.div<CarouselImageContainerProps>`
  display: flex;
  max-width: ${(props) => `${props.width}px`};
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
`;

export {
  CarouselWidthContainer,
  CarouselContainer,
  CarouselImageContainer,
  Container,
  CarouselWrapper,
};
