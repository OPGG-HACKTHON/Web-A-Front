import React, { useState, useRef } from "react";
import Link from "next/link";

import { useInterval } from "hooks/main";
import { useIntersect } from "hooks/main";

import {
  RankingViewWrapper,
  RankingViewContainer,
  RankingViewHeader,
  RankingViewContents,
  RankingViewAutoScrollWrapper,
  RankingViewTitle,
  RankingViewText,
  RankingViewImage,
} from "./RankingView.style";

interface RankingViewProps {
  rankingList: [
    {
      name: string;
      id: number;
      header_image: string;
    }
  ];
}

const RankingView = ({ rankingList }: RankingViewProps) => {
  const [activeNum, setActiveNum] = useState(0);

  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRefTop = useRef<HTMLDivElement | null>(null);
  const scrollRefBottom = useRef<HTMLDivElement | null>(null);

  const entry = useIntersect(scrollWrapperRef, {});
  const isVisible = !!entry?.isIntersecting; //threshold에 들어왔을때만 setInterval

  const RankingScrollToTop = () => {
    return <div ref={scrollRefTop} />;
  };
  const RankingScrollToBottom = () => {
    return <div ref={scrollRefBottom} />;
  };

  useInterval(() => {
    if (isVisible) {
      if (activeNum === 4) {
        scrollRefBottom?.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (activeNum === 10) {
        scrollRefTop?.current?.scrollIntoView({ behavior: "smooth" });
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }
  }, 3000);

  return (
    <RankingViewWrapper>
      <RankingViewContainer>
        <RankingViewHeader>실시간 VIEW 랭킹</RankingViewHeader>
        <RankingViewContents>
          <RankingViewAutoScrollWrapper ref={scrollWrapperRef}>
            <RankingScrollToTop />
            {rankingList.map((list, idx) => (
              <RankingViewTitle key={list.id} isActive={idx === activeNum}>
                <Link href={`/about/${list.id}`}>
                  <a>
                    <RankingViewText>{idx + 1}</RankingViewText>
                    <RankingViewText> {list.name}</RankingViewText>
                  </a>
                </Link>
              </RankingViewTitle>
            ))}
            <RankingScrollToBottom />
          </RankingViewAutoScrollWrapper>

          <RankingViewImage
            url={
              activeNum === 10
                ? rankingList[0]["header_image"]
                : rankingList[activeNum]["header_image"]
            }
          />
        </RankingViewContents>
      </RankingViewContainer>
    </RankingViewWrapper>
  );
};

export default React.memo(RankingView);
