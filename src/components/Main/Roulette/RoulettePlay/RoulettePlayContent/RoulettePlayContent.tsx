import Image from "next/image";
import Link from "next/link";

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
  const { error, data } = item;

  return (
    <RoulettePlayContentWrapper>
      <RoulettePlayContentGroup>
        <RoulettePlayContentCircle isPlay={!skip}>
          {data && !error && !loading ? (
            <RoulettePlayContentRandom>
              <Image src={data.header_image} width={460} height={215} />
              <RoulettePlayContentBox>
                <RoulettePlayContentTitle>
                  {data.name || "이름없음."}
                </RoulettePlayContentTitle>
                <RoulettePlayContentGenres>
                  {data.genres.map((v, i) => (
                    <span key={i}>{v}</span>
                  ))}
                </RoulettePlayContentGenres>
                <Link href={`/about/${data.id}`} scroll={true}>
                  <RoulettePlayContentBtn>게임 상세보기</RoulettePlayContentBtn>
                </Link>
              </RoulettePlayContentBox>
            </RoulettePlayContentRandom>
          ) : (
            <RoulettePlayContentRandom>
              {waiting ? (
                <Image src={loadingGif} width={30} height={30} />
              ) : (
                <Image src={random} />
              )}
            </RoulettePlayContentRandom>
          )}
          <RoulettePlayContentRandom>
            <Image src={random} />
          </RoulettePlayContentRandom>
          <RoulettePlayContentRandom>
            <Image src={random} />
          </RoulettePlayContentRandom>
          <RoulettePlayContentRandom>
            <Image src={random} />
          </RoulettePlayContentRandom>
        </RoulettePlayContentCircle>
      </RoulettePlayContentGroup>
    </RoulettePlayContentWrapper>
  );
};

export default RoulettePlayContent;
