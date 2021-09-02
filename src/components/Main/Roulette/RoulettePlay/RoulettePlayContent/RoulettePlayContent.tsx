import Image from "next/image";

import { IRouletteState } from "types/IRouletteResult";

import loading from "assets/images/roulette/loading.gif";
import random from "assets/images/roulette/random.svg";

import {
  RoulettePlayContentWrapper,
  RoulettePlayContentRandom,
  RoulettePlayContentCircle,
  RoulettePlayContentGroup,
} from "./RoulettePlayContent.style";

interface IRoulettePlayContentProps {
  item: IRouletteState;
  skip: boolean;
  waiting: boolean;
  onClickSkip: () => void;
}

const RoulettePlayContent: React.FC<IRoulettePlayContentProps> = ({
  item,
  skip,
  waiting,
  onClickSkip,
}) => {
  const { error, data } = item;

  return (
    <RoulettePlayContentWrapper>
      <RoulettePlayContentGroup>
        <RoulettePlayContentCircle isPlay={!skip} onClick={onClickSkip}>
          {data && !error ? (
            <RoulettePlayContentRandom>
              <Image src={data.header_image} width={460} height={215} />
            </RoulettePlayContentRandom>
          ) : (
            <RoulettePlayContentRandom>
              {waiting ? (
                <Image src={loading} width={30} height={30} />
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
