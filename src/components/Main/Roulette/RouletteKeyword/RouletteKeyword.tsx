import { useTranslation } from "next-i18next";

import { useKeywords } from "hooks/main";

import { KeywordItem, KeywordWrapper } from "./RouletteKeyword.style";

const RouletteKeyword: React.FC = () => {
  const { t } = useTranslation("main");
  const { keywords, handleOnClick } = useKeywords();

  return (
    <KeywordWrapper>
      {keywords.map((item, idx) => (
        <KeywordItem
          key={idx}
          onClick={() => handleOnClick(item)}
          isSelected={item.isSelected}>
          {t(item.key)}
        </KeywordItem>
      ))}
    </KeywordWrapper>
  );
};

export default RouletteKeyword;
