import { useState } from "react";

import GameInfoHashtag from "./GameInfoHashtag";
import GameInfoMeta from "./GameInfoMeta";

import {
  GameInfoWrapper,
  GameInfoHeader,
  GameInfoContent,
  GameInfoTitle,
  GameInfoImg,
  GameInfoBox,
} from "./GameInfo.style";

const dummyData = ["액션", "캐주얼", "인디"];

const GameInfo = () => {
  const [isTooltipShow, setIsTooltipShow] = useState<boolean>(false);

  return (
    <GameInfoWrapper>
      <GameInfoHeader>
        <GameInfoContent>
          <GameInfoTitle>OverCooked2 !</GameInfoTitle>
          {dummyData.map((text, idx) => (
            <GameInfoHashtag key={idx} text={text} />
          ))}
        </GameInfoContent>

        <GameInfoImg />
      </GameInfoHeader>

      <GameInfoBox>
        <GameInfoMeta title={"게임장르"} desc={"액션, 캐주얼, 인디"} />
      </GameInfoBox>
    </GameInfoWrapper>
  );
};

export default GameInfo;
