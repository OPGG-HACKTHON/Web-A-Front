import React from "react";
import Image from "next/image";

import keywordL from "assets/images/roulette/keyword_l.svg";
import keywordR from "assets/images/roulette/keyword_r.svg";
import keywordEmptyL from "assets/images/roulette/keyword_empty_l.svg";
import keywordEmptyR from "assets/images/roulette/keyword_empty_r.svg";
import icon1 from "assets/images/roulette/icon_1.svg";
import icon2 from "assets/images/roulette/icon_2.svg";
import icon3 from "assets/images/roulette/icon_3.svg";
import icon4 from "assets/images/roulette/icon_4.svg";
import icon5 from "assets/images/roulette/icon_5.svg";
import icon6 from "assets/images/roulette/icon_6.svg";

import {
  RoulettePlayIconsWrapper,
  RoulettePlayIconsContainer,
  RoulettePlayIconsImg,
  RoulettePlayIconsImgWrapper,
} from "./RoulettePlayIcons.style";

interface IRoulettePlayIconsProps {
  count: number;
  position: "left" | "right";
}

const RoulettePlayIcons: React.FC<IRoulettePlayIconsProps> = ({
  count,
  position,
}) => {
  const getIconSource = (idx: number) => {
    if (position === "left") {
      switch (idx) {
        case 0:
          return icon1;
        case 1:
          return icon3;
        case 2:
          return icon5;
      }
    } else {
      switch (idx) {
        case 0:
          return icon2;
        case 1:
          return icon4;
        case 2:
          return icon6;
      }
    }
  };

  const getIconOrder = (idx: number) => {
    if (position === "left") {
      switch (idx) {
        case 0:
          return 1;
        case 1:
          return 3;
        case 2:
          return 5;
      }
    } else {
      switch (idx) {
        case 0:
          return 2;
        case 1:
          return 4;
        case 2:
          return 6;
      }
    }

    return 6;
  };

  return (
    <RoulettePlayIconsWrapper>
      {[...Array(3)].map((_v, i) => (
        <React.Fragment key={i}>
          {getIconOrder(i) <= count ? (
            <RoulettePlayIconsImg isLeft={position === "left"}>
              <RoulettePlayIconsContainer>
                <Image src={position === "left" ? keywordL : keywordR} />
                <RoulettePlayIconsImgWrapper>
                  <Image src={getIconSource(i)} />
                </RoulettePlayIconsImgWrapper>
              </RoulettePlayIconsContainer>
            </RoulettePlayIconsImg>
          ) : (
            <RoulettePlayIconsImg isLeft={position === "left"}>
              <Image
                src={position === "left" ? keywordEmptyL : keywordEmptyR}
              />
            </RoulettePlayIconsImg>
          )}
        </React.Fragment>
      ))}
    </RoulettePlayIconsWrapper>
  );
};

export default RoulettePlayIcons;
