import { useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import {
  keywordsDefaultState,
  keywordsState,
  rouletteDefaultState,
  rouletteState,
} from "atom/roulette.atom";
// import client from "lib/customAxios";

const useRoulette = () => {
  const [keywords, setKeywords] = useRecoilState(keywordsState);
  const [roulette, setRoulette] = useRecoilState(rouletteState);

  const [waiting, setWaiting] = useState(false);
  const [skip, setSkip] = useState(true);
  const [played, setPlayed] = useState(false);

  const loading = useRef(false);
  const timeout = useRef<null | ReturnType<typeof setTimeout>>(null);

  const selectedCount = useMemo(
    () => keywords.filter((v) => v.isSelected).length,
    [keywords]
  );

  const clear = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  };

  const onClickSkip = () => {
    clear();
    if (loading.current) {
      setWaiting(true);
      setSkip(true);
    }
  };

  const onClickReset = () => {
    setKeywords(keywordsDefaultState);
    setPlayed(false);
    setSkip(true);
    setWaiting(false);
    setRoulette(rouletteDefaultState);
    clear();
  };

  const onClickStart = () => {
    if (loading.current) {
      onClickSkip();
    } else {
      loading.current = true;
      setSkip(true);

      // 이벤트 루프 활용
      setTimeout(() => {
        setSkip(false);
      }, 0);
      setWaiting(false);
      setRoulette({ ...rouletteDefaultState });

      // client.post('/api/roulette-recommendation')
      setTimeout(() => {
        setPlayed(true);
        loading.current = false;
        setRoulette({
          ...rouletteDefaultState,
          data: {
            id: 348800,
            name: "test",
            header_image:
              "https://cdn.akamai.steamstatic.com/steam/apps/348800/header.jpg?t=1611266489",
            genres: ["액션", "어드벤처", "인디"],
          },
        });
      }, 3000);

      timeout.current = setTimeout(() => {
        if (loading.current) {
          setWaiting(true);
        }
      }, 3000);
    }
  };

  return {
    selectedCount,
    roulette,
    played,
    skip,
    waiting,
    onClickSkip,
    onClickReset,
    onClickStart,
  };
};

export default useRoulette;
