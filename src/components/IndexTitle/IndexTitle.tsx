import styled from "styled-components";
import { IIndexTitleProps } from "./IndexTitle.type";

const UnderLine = styled.div`
  border: 0.2rem solid ${({ theme }) => theme.palette.grayScale[500]};
`;

const Title = styled.div`
  font-size: 2rem;
`;

const SelectedIndex = styled.div`
  color: red;
`;
const Flex = styled.div`
  display: flex;
`;

const IndexTitle: React.FC<IIndexTitleProps> = ({
  title,
  total,
  clickHandler,
  selectedIndex,
  onScreenCount,
}) => {
  const indexList = [...Array(Math.ceil(total / onScreenCount)).keys()];

  return (
    <>
      <Flex>
        <Title>{title}</Title>
        {indexList.map((i: number) =>
          selectedIndex === i ? (
            <SelectedIndex key={i} onClick={() => clickHandler(i)}>
              {i}
            </SelectedIndex>
          ) : (
            <div key={i} onClick={() => clickHandler(i)}>
              {i}
            </div>
          )
        )}
      </Flex>
      <UnderLine />
    </>
  );
};

export default IndexTitle;
