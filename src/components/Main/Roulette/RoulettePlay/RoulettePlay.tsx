import useRoulette from "hooks/main/roulette/useRoulette";

import { RoulettePlayWrapper } from "./RoulettePlay.style";
import RoulettePlayIcons from "./RoulettePlayIcons";
import RoulettePlayContent from "./RoulettePlayContent";

const RoulettePlay: React.FC = () => {
  const { selectedCount } = useRoulette();

  return (
    <RoulettePlayWrapper>
      <RoulettePlayIcons count={selectedCount} position="left" />
      <RoulettePlayContent />
      <RoulettePlayIcons count={selectedCount} position="right" />
    </RoulettePlayWrapper>
  );
};

export default RoulettePlay;
