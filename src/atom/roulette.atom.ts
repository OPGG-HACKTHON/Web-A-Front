import { atom } from "recoil";

import keywords from "models/keywords";
import IKeyword from "types/IKeyword";

export const keywordsState = atom<Array<IKeyword>>({
  key: "keywordsState",
  default: keywords,
});
