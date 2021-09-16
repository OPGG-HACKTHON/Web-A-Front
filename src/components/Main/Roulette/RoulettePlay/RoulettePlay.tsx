import Image from "next/image";

import { useRoulette } from "hooks/main";

import spin from "assets/images/roulette/btn_spin.svg";
import reset from "assets/images/roulette/btn_reset.svg";
import replay from "assets/images/roulette/btn_replay.svg";

import {
  RoulettePlayWrapper,
  RoulettePlayContainer,
  RoulettePlayButton,
  RoulettePlayButtonContainer,
} from "./RoulettePlay.style";
import RoulettePlayIcons from "./RoulettePlayIcons";
import RoulettePlayContent from "./RoulettePlayContent";

const RoulettePlay: React.FC = () => {
  const {
    roulette,
    selectedCount,
    played,
    skip,
    waiting,
    loading,
    onClickReset,
    onClickStart,
  } = useRoulette();

  return (
    <RoulettePlayWrapper>
      <RoulettePlayContainer>
        <RoulettePlayIcons count={selectedCount} position="left" />
        <RoulettePlayContent {...{ skip, waiting, loading, item: roulette }} />
        <RoulettePlayIcons count={selectedCount} position="right" />
      </RoulettePlayContainer>

      <RoulettePlayButtonContainer>
        <RoulettePlayButton onClick={onClickReset}>
          <Image src={reset} />
        </RoulettePlayButton>
        <RoulettePlayButton onClick={onClickStart}>
          <Image src={played ? replay : spin} />
        </RoulettePlayButton>
      </RoulettePlayButtonContainer>
    </RoulettePlayWrapper>
  );
};

export default RoulettePlay;
