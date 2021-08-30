import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import { keywordsState } from "atom/roulette.atom";

const useRoulette = () => {
  const keywords = useRecoilValue(keywordsState);

  const selectedCount = useMemo(
    () => keywords.filter((v) => v.isSelected).length,
    [keywords]
  );

  return {
    selectedCount,
  };
};

export default useRoulette;
