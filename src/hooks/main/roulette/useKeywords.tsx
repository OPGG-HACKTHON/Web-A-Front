import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

import { keywordsState } from "atom/roulette.atom";
import IKeyword from "types/IKeyword";

const useKeywords = () => {
  const [keywords, setKeywords] = useRecoilState(keywordsState);

  const selectedKeywords = useMemo<Array<IKeyword>>(
    () => keywords.filter((v) => v.isSelected),
    [keywords]
  );

  const handleOnClick = useCallback(
    (keyword: IKeyword) => {
      if (!keyword.isSelected && selectedKeywords.length === 6) {
        return alert("최대 6개까지 선택가능합니다.");
      }

      const newValue: IKeyword = {
        ...keyword,
        isSelected: !keyword.isSelected,
      };

      setKeywords(
        keywords.map((v) => (v.name === keyword.name ? newValue : v))
      );
    },
    [keywords, selectedKeywords]
  );

  return { keywords, selectedKeywords, handleOnClick };
};

export default useKeywords;
