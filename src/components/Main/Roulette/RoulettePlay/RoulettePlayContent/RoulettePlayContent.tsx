import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { IRouletteState } from "types/IRouletteResult";

import loadingGif from "assets/images/roulette/loading.gif";
import random from "assets/images/roulette/random.svg";

import {
  RoulettePlayContentWrapper,
  RoulettePlayContentRandom,
  RoulettePlayContentCircle,
  RoulettePlayContentGroup,
  RoulettePlayContentBox,
  RoulettePlayContentTitle,
  RoulettePlayContentGenres,
  RoulettePlayContentBtn,
  RoulettePlayContentImage,
} from "./RoulettePlayContent.style";

interface IRoulettePlayContentProps {
  item: IRouletteState;
  skip: boolean;
  waiting: boolean;
  loading: boolean;
}

const RoulettePlayContent: React.FC<IRoulettePlayContentProps> = ({
  item,
  skip,
  waiting,
  loading,
}) => {
  const { t } = useTranslation("main");

  const { error, data } = item;

  return (
    <RoulettePlayContentWrapper>
      <RoulettePlayContentGroup>
        <RoulettePlayContentCircle isPlay={!skip}>
          {data && !error && !loading ? (
            <RoulettePlayContentRandom>
              <RoulettePlayContentImage
                src={data.header_image}
                width={460}
                height={215}
              />
              <RoulettePlayContentBox>
                <RoulettePlayContentTitle>{data.name}</RoulettePlayContentTitle>
                <RoulettePlayContentGenres>
                  {data.genres.map((v, i) => (
                    <span key={i}>{v}</span>
                  ))}
                </RoulettePlayContentGenres>
                <Link href={`/about/${data.id}`} scroll={true}>
                  <RoulettePlayContentBtn>
                    {t("main_roulette_game_info")}
                  </RoulettePlayContentBtn>
                </Link>
              </RoulettePlayContentBox>
            </RoulettePlayContentRandom>
          ) : (
            <RoulettePlayContentRandom>
              {waiting ? (
                <RoulettePlayContentImage
                  src={loadingGif}
                  width={30}
                  height={30}
                />
              ) : (
                <Image src={random} width={56} height={98} />
              )}
            </RoulettePlayContentRandom>
          )}
          <RoulettePlayContentRandom>
            <Image src={random} width={56} height={98} />
          </RoulettePlayContentRandom>
          <RoulettePlayContentRandom>
            <Image src={random} width={56} height={98} />
          </RoulettePlayContentRandom>
          <RoulettePlayContentRandom>
            <Image src={random} width={56} height={98} />
          </RoulettePlayContentRandom>
        </RoulettePlayContentCircle>
      </RoulettePlayContentGroup>
    </RoulettePlayContentWrapper>
  );
};

export default RoulettePlayContent;
