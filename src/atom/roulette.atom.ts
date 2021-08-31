import { atom } from "recoil";

import keywords from "models/keywords";
import IKeyword from "types/IKeyword";
import { IRouletteState } from "types/IRouletteResult";

export const keywordsDefaultState = keywords;

export const rouletteDefaultState: IRouletteState = {
  error: null,
  data: null,
};

export const keywordsState = atom<Array<IKeyword>>({
  key: "keywordsState",
  default: keywords,
});

export const rouletteState = atom<IRouletteState>({
  key: "roletteState",
  default: rouletteDefaultState,
});
