import { GameInfoHashTagWrapper } from "./GameInfoHashtag.style";

interface GameInfoHashtagProps {
  text: string;
}

const GameInfoHashtag = ({ text }: GameInfoHashtagProps) => {
  return <GameInfoHashTagWrapper>{text}</GameInfoHashTagWrapper>;
};

export default GameInfoHashtag;
