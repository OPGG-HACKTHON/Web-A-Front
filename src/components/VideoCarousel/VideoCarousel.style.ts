import styled from "styled-components";

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

const SelectedVideo = styled.video`
  width: 71.2rem;
  height: 40rem;
`;

const VideoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.2rem;
  height: 40rem;
  margin-left: 2.6rem;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  width: 15.2rem;
  height: 28rem;
`;

const VideoChip = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonWrapper = styled.div<{ upper?: boolean }>`
  transform: rotate(90deg);
  position: relative;
  top: ${({ upper }) => (upper ? "-1rem" : "1rem")};
`;

const VideoItemWrapper = styled.div<{ selected: boolean }>`
  min-height: 7.5rem;
  width: 15rem;
  transform: skew(0, -5deg);
  border-radius: 0.4rem;
  position: relative;
  margin: 1rem 0;
  overflow: hidden;
  border: ${({ selected, theme }) =>
    selected ? `.2rem solid ${theme.palette.primary.main}` : `unset`};
`;

export {
  WholeContainer,
  VideoChip,
  CarouselContainer,
  VideoListWrapper,
  SelectedVideo,
  VideoWrapper,
  ButtonWrapper,
  CarouselWrapper,
  VideoItemWrapper,
};
