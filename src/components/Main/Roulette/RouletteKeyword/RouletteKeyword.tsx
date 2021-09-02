import { useKeywords } from "hooks/main";

import { KeywordItem, KeywordWrapper } from "./RouletteKeyword.style";

const RouletteKeyword: React.FC = () => {
  const { keywords, handleOnClick } = useKeywords();

  return (
    <KeywordWrapper>
      {keywords.map((item, idx) => (
        <KeywordItem
          key={idx}
          onClick={() => handleOnClick(item)}
          isSelected={item.isSelected}>
          {item.name}
        </KeywordItem>
      ))}
    </KeywordWrapper>
  );
};

export default RouletteKeyword;
