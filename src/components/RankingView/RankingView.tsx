import {
  RankingViewWrapper,
  RankingViewContainer,
  RankingViewHeader,
  RankingViewContents,
  RankingViewAutoScroll,
  RankingViewTitle,
  RankingViewImage,
} from "./RankingView.style";

const RankingView = () => {
  return (
    <RankingViewWrapper>
      <RankingViewContainer>
        <RankingViewHeader> 실시간 VIEW 랭킹</RankingViewHeader>
        <RankingViewContents>
          <RankingViewAutoScroll>
            <RankingViewTitle>111</RankingViewTitle>
            <RankingViewTitle>111</RankingViewTitle>
            <RankingViewTitle>111</RankingViewTitle>
            <RankingViewTitle>111</RankingViewTitle>
          </RankingViewAutoScroll>
          <RankingViewImage>asfd</RankingViewImage>
        </RankingViewContents>
      </RankingViewContainer>
    </RankingViewWrapper>
  );
};

export default RankingView;
