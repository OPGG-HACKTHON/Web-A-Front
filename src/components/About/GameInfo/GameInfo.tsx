import { AboutPageProps } from "pages/about/[id]";

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

const GameInfo = ({ item }: AboutPageProps) => {
  const { name, genres, release_date, short_description, header_image } = item;

  return (
    <GameInfoWrapper>
      <GameInfoContainer>
        <GameInfoHeader>
          <GameInfoContent>
            <GameInfoTitle>{name ? name : "이름 없음"}</GameInfoTitle>
            <GameInfoHashTags>
              {genres.map((text, idx) => (
                <GameInfoHashtag key={idx} text={text} />
              ))}
            </GameInfoHashTags>
          </GameInfoContent>
          <GameInfoImg url={header_image} />
        </GameInfoHeader>

        <GameInfoBox>
          <GameInfoBoxContent>
            <GameInfoMeta title={"게임 장르"} desc={genres.join(", ")} />
            <GameInfoMeta title={"출시 날짜"} desc={release_date} />
          </GameInfoBoxContent>
          <GameInfoBoxContent>
            <GameInfoMeta title={"게임 소개"} desc={short_description} />
          </GameInfoBoxContent>
        </GameInfoBox>
      </GameInfoContainer>
    </GameInfoWrapper>
  );
};

export default GameInfo;
