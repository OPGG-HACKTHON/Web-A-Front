import React, { useState, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { useInterval } from "hooks/main";
import { useIntersect } from "hooks/main";

import {
  RankingViewWrapper,
  RankingViewContainer,
  RankingViewHeader,
  RankingViewContents,
  RankingViewAutoScrollWrapper,
  RankingViewActiveWrapper,
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
  const [scrollY, setScrollY] = useState(0);
  const [activeY, setActiveY] = useState(0);

  const num = useRef(1);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation("main");
  const entry = useIntersect(scrollWrapperRef, {});

  const isVisible = !!entry?.isIntersecting; //threshold에 들어왔을때만 setInterval

  useInterval(() => {
    if (isVisible) {
      num.current += 1;

      if (num.current < 6) {
        setActiveY(activeY + 5);
      } else if (num.current === 6) {
        setScrollY(scrollY - 25);
        setActiveY(0);
      } else if (num.current >= 7 && num.current <= 10) {
        setActiveY(activeY + 5);
      } else if (num.current > 10) {
        setScrollY(0);
        setActiveY(0);
        num.current = 1;
      }
    }
  }, 3000);

  return (
    <RankingViewWrapper>
      <RankingViewContainer>
        <RankingViewHeader>{t("main_view_ranking_title")}</RankingViewHeader>
        <RankingViewContents>
          <RankingViewAutoScrollWrapper
            ref={scrollWrapperRef}
            scrollY={scrollY}>
            {rankingList.map((list, idx) => (
              <RankingViewTitle key={list.id}>
                <RankingViewText>{idx + 1}</RankingViewText>
                <RankingViewText> {list.name}</RankingViewText>
              </RankingViewTitle>
            ))}
          </RankingViewAutoScrollWrapper>

          <Link
            href={`/about/${
              num.current * 1 === 11
                ? rankingList[0].id
                : rankingList[num.current * 1 - 1].id
            }`}>
            <RankingViewActiveWrapper activeY={activeY} />
          </Link>

          <Link
            href={`/about/${
              num.current * 1 === 11
                ? rankingList[0].id
                : rankingList[num.current * 1 - 1].id
            }`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <RankingViewImage
                url={
                  num.current * 1 === 11
                    ? rankingList[0].header_image
                    : rankingList[num.current * 1 - 1].header_image
                }
              />
            </a>
          </Link>
        </RankingViewContents>
      </RankingViewContainer>
    </RankingViewWrapper>
  );
};

export default React.memo(RankingView);
