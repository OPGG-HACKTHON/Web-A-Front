import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("about");

  return (
    <GameInfoWrapper>
      <GameInfoContainer>
        <GameInfoHeader>
          <GameInfoContent>
            <GameInfoTitle>
              {name ? name : t("about_info_no_name")}
            </GameInfoTitle>
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
            <GameInfoMeta
              title={t("about_info_game_genre")}
              desc={genres.join(", ")}
            />
            <GameInfoMeta
              title={t("about_info_game_date")}
              desc={release_date}
            />
          </GameInfoBoxContent>
          <GameInfoBoxContent>
            <GameInfoMeta
              title={t("about_info_game_introduction")}
              desc={short_description}
            />
          </GameInfoBoxContent>
        </GameInfoBox>
      </GameInfoContainer>
    </GameInfoWrapper>
  );
};

export default GameInfo;
