import {
  RoulettePlayContentWrapper,
  // RoulettePlayContentRandom,
  // RoulettePlayContentGroup,
} from "./RoulettePlayContent.style";

interface IRoulettePlayContentProps {}

const RoulettePlayContent: React.FC<IRoulettePlayContentProps> = ({}) => {
  return (
    <RoulettePlayContentWrapper>
      {/* <RoulettePlayContentGroup> */}
      {/* <RoulettePlayContentRandom>{"?"}</RoulettePlayContentRandom>
        <RoulettePlayContentRandom>{"?"}</RoulettePlayContentRandom>
        <RoulettePlayContentRandom>{"?"}</RoulettePlayContentRandom> */}
      {/* </RoulettePlayContentGroup> */}
    </RoulettePlayContentWrapper>
  );
};

export default RoulettePlayContent;
