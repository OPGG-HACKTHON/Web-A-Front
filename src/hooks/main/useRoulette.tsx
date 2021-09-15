import { useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios, { CancelTokenSource } from "axios";
import { useTranslation } from "next-i18next";

import {
  keywordsState,
  rouletteDefaultState,
  rouletteState,
} from "atom/roulette.atom";
import client from "lib/customAxios";

const useRoulette = () => {
  const { t } = useTranslation("main");

  const keywords = useRecoilValue(keywordsState);
  const [roulette, setRoulette] = useRecoilState(rouletteState);

  const [waiting, setWaiting] = useState(false);
  const [skip, setSkip] = useState(true);
  const [played, setPlayed] = useState(false);

  const loading = useRef(false);
  const timeout = useRef<null | ReturnType<typeof setTimeout>>(null);
  const callback = useRef<null | (() => void)>(null);
  const source = useRef<CancelTokenSource | null>(null);

  const selectedCount = useMemo(
    () => keywords.filter((v) => v.isSelected).length,
    [keywords]
  );
  const selectedKeywords = useMemo(
    () =>
      keywords.reduce(
        (result: string[], { key, isSelected }) => [
          ...result,
          ...(isSelected ? [t(key)] : []),
        ],
        []
      ),
    [keywords, t]
  );

  const clear = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  };

  const onClickSkip = () => {
    clear();
    setWaiting(true);
    setSkip(true);
    if (callback.current) {
      callback.current();
      callback.current = null;
    }
  };

  const onClickReset = () => {
    clear();
    setPlayed(false);
    setSkip(true);
    setWaiting(false);
    setRoulette(rouletteDefaultState);
    callback.current = null;
    loading.current = false;
    if (source.current) {
      source.current.cancel();
      source.current = null;
    }
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
      setRoulette(rouletteDefaultState);

      source.current = axios.CancelToken.source();
      client
        .post(
          "api/roulette-recommendation",
          { keywords: selectedKeywords },
          {
            cancelToken: source.current.token,
          }
        )
        .then((res) => {
          const fn = () => {
            setWaiting(false);
            setPlayed(true);
            setRoulette({ ...rouletteDefaultState, data: res.data.data });
            loading.current = false;
          };

          if (timeout.current) {
            callback.current = fn;
          } else {
            fn();
          }
        })
        .catch(() => {
          onClickReset();
        });

      timeout.current = setTimeout(() => {
        if (loading.current) {
          setWaiting(true);
        }
        if (typeof callback.current === "function") {
          callback.current();
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
    loading: loading.current,
    onClickReset,
    onClickStart,
  };
};

export default useRoulette;
