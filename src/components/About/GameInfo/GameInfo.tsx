import { useState } from "react";

import GameInfoHashtag from "./GameInfoHashtag";
import GameInfoMeta from "./GameInfoMeta";

import {
  GameInfoWrapper,
  GameInfoContainer,
  GameInfoHeader,
  GameInfoContent,
  GameInfoTitle,
  GameInfoHashTags,
  GameInfoImg,
  GameInfoBox,
  GameInfoBoxContent,
} from "./GameInfo.style";

const dummyData = ["액션", "캐주얼", "인디"];

const GameInfo = () => {
  return (
    <GameInfoWrapper>
      <GameInfoContainer>
        <GameInfoHeader>
          <GameInfoContent>
            <GameInfoTitle>OverCooked2 !</GameInfoTitle>
            <GameInfoHashTags>
              {dummyData.map((text, idx) => (
                <GameInfoHashtag key={idx} text={text} />
              ))}
            </GameInfoHashTags>
          </GameInfoContent>
          <GameInfoImg />
        </GameInfoHeader>

        <GameInfoBox>
          <GameInfoBoxContent>
            <GameInfoMeta title={"게임장르"} desc={"액션, 캐주얼, 인디"} />
            <GameInfoMeta title={"게임장르"} desc={"액션, 캐주얼, 인디"} />
          </GameInfoBoxContent>
          <GameInfoBoxContent>
            <GameInfoMeta title={"게임장르"} desc={"액션, 캐주얼, 인디"} />
          </GameInfoBoxContent>
        </GameInfoBox>
      </GameInfoContainer>
    </GameInfoWrapper>
  );
};

export default GameInfo;
