// Type
import { IIndexTitleProps } from "./IndexTitle.type";
// Style
import {
  Title,
  TitleContainer,
  NonSelectedIndex,
  SelectedIndex,
  Index,
  IndexContainer,
} from "./IndexTitle.style";

const IndexTitle: React.FC<IIndexTitleProps> = ({
  title,
  total,
  clickHandler,
  selectedIndex,
  onScreenCount,
  withoutIndex,
}) => {
  if (withoutIndex)
    return (
      <TitleContainer>
        <Title>{title}</Title>
        <IndexContainer />
      </TitleContainer>
    );

  const indexList = [...Array(Math.ceil(total / onScreenCount)).keys()];

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <IndexContainer>
        {indexList.map((i: number) =>
          selectedIndex === i ? (
            <SelectedIndex key={i}>
              <Index>{i + 1}</Index>
            </SelectedIndex>
          ) : (
            <NonSelectedIndex key={i} onClick={() => clickHandler(i)}>
              <Index>{i + 1}</Index>
            </NonSelectedIndex>
          )
        )}
      </IndexContainer>
    </TitleContainer>
  );
};

export default IndexTitle;
