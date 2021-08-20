import styled from "styled-components";

const WholeContainer = styled.div`
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

export { WholeContainer, CarouselContainer, CarouselImageContainer, Container };
