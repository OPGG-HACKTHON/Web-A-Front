import { AxiosError } from "axios";

export default interface IRouletteResult {
  id: number;
  name: string;
  header_image: string;
  genres: Array<string>;
}

export interface IRouletteState {
  error: AxiosError | null;
  data: IRouletteResult | null;
}
