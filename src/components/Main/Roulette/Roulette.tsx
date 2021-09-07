import debounce from "debounce";
import { useState } from "react";

import tooltip from "assets/images/roulette/tooltip.svg";

import {
  RouletteContent,
  RouletteSubTitle,
  RouletteSubTitleTooltip,
  RouletteSubTitleWrapper,
  RouletteTitle,
  RouletteWrapper,
} from "./Roulette.style";
import RouletteKeyword from "./RouletteKeyword";
import RoluletteBubble from "./RoluletteBubble";
import RoulettePlay from "./RoulettePlay";

const Roulette: React.FC = () => {
  const [isTooltipShow, setIsTooltipShow] = useState<boolean>(false);

  const handleOnMouseEnter = debounce(() => setIsTooltipShow(true), 500);

  const handleOnCloseTooltip = () => {
    setIsTooltipShow(false);
  };

  return (
    <RouletteWrapper>
      <RouletteContent>
        <RouletteTitle>인디칩 키워드를 골라보세요!</RouletteTitle>
        <RouletteSubTitleWrapper>
          <RouletteSubTitle>
            키워드를 클릭해서 랜덤으로 추천 게임을 받아보세요!
          </RouletteSubTitle>
          <RouletteSubTitleTooltip
            unoptimized
            src={tooltip}
            onMouseEnter={handleOnMouseEnter}
          />
          <RoluletteBubble
            isShow={isTooltipShow}
            onClose={handleOnCloseTooltip}
            title="랜덤 게임 추천기 안내"
            content={
              "잼픽의 인디칩은 인디게임을 의미합니다.\n\n하단의 키워드를 최대 6개까지 선택하여 랜덤\n으로 게임을 추천 받아보세요."
            }
          />
        </RouletteSubTitleWrapper>
        <RouletteKeyword />
        <RoulettePlay />
      </RouletteContent>
    </RouletteWrapper>
  );
};

export default Roulette;
