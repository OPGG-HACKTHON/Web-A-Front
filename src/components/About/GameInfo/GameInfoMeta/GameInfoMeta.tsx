import {
  GameInfoMetaWrapper,
  GameInfoMetaTitle,
  GameInfoMetaDesc,
} from "./GameInfoMeta.style";

interface GameInfoMetaProps {
  title: string;
  desc: string;
}

const GameInfoMeta = ({ title, desc }: GameInfoMetaProps) => {
  return (
    <GameInfoMetaWrapper>
      <GameInfoMetaTitle>{title}</GameInfoMetaTitle>
      <GameInfoMetaDesc>{desc}</GameInfoMetaDesc>
    </GameInfoMetaWrapper>
  );
};

export default GameInfoMeta;
