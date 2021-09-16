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
  GameInfoButtons,
  GameInfoButton,
  GameInfoImg,
  GameInfoBox,
  GameInfoBoxContent,
} from "./GameInfo.style";

const GameInfo = ({ item }: AboutPageProps) => {
  const { name, genres, release_date, short_description, header_image } = item;
  const { t } = useTranslation("about");

  const handleClickButton = () => {
    alert("해당 기능은 준비중입니다.");
  };
  return (
    <GameInfoWrapper>
      <GameInfoContainer>
        <GameInfoHeader>
          <GameInfoContent>
            <GameInfoTitle>
              {name ? name : t("about_info_no_name")}
            </GameInfoTitle>
            <GameInfoHashTags>
              {genres.map((text: string, idx: number) => (
                <GameInfoHashtag key={`${text}_${idx}`} text={text} />
              ))}
            </GameInfoHashTags>

            <GameInfoButtons>
              <GameInfoButton onClick={handleClickButton}>
                {t("about_info_button_goGame")}
              </GameInfoButton>
              <GameInfoButton onClick={handleClickButton}>
                {t("about_info_button_share")}
              </GameInfoButton>
            </GameInfoButtons>
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
