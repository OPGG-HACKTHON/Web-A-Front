import {
  Index,
  Title,
  SelectedIndex,
  TitleContainer,
  IndexContainer,
  NonSelectedIndex,
} from "./IndexTitle.style";

export interface IIndexTitleProps {
  title: string;
  total?: number;
  clickHandler?: (idx: number) => void;
  selectedIndex?: number;
  onScreenCount?: number;
  withoutIndex?: true;
}

const IndexTitle: React.FC<IIndexTitleProps> = ({
  total,
  withoutIndex,
  title,
  clickHandler,
  selectedIndex,
  onScreenCount,
}) => {
  if (withoutIndex)
    return (
      <TitleContainer>
        <Title>{title}</Title>
        <IndexContainer />
      </TitleContainer>
    );

  if (total && onScreenCount && clickHandler) {
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
  }

  return null;
};

export default IndexTitle;
