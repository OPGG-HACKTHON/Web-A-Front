import debounce from "debounce";
import { useState } from "react";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("main");

  const [isTooltipShow, setIsTooltipShow] = useState<boolean>(false);

  const handleOnMouseEnter = debounce(() => setIsTooltipShow(true), 500);

  const handleOnCloseTooltip = () => {
    setIsTooltipShow(false);
  };

  return (
    <RouletteWrapper>
      <RouletteContent>
        <RouletteTitle>{t("main_roulette_title")}</RouletteTitle>
        <RouletteSubTitleWrapper>
          <RouletteSubTitle>{t("main_roulette_subtitle")}</RouletteSubTitle>
          <RouletteSubTitleTooltip
            src={tooltip}
            onMouseEnter={handleOnMouseEnter}
          />
          <RoluletteBubble
            isShow={isTooltipShow}
            onClose={handleOnCloseTooltip}
            title={t("main_roulette_bubble_title")}
            content={t("main_roulette_bubble_content")}
          />
        </RouletteSubTitleWrapper>
        <RouletteKeyword />
        <RoulettePlay />
      </RouletteContent>
    </RouletteWrapper>
  );
};

export default Roulette;
