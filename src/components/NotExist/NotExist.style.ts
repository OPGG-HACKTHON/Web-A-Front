import styled from "styled-components";

const NotExistWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const NotExistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 89rem;
  height: 40rem;
  margin: 4rem;
  background-color: ${({ theme }) => theme.palette.backgroundColors.main};
`;

const NotExistText = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.grayScale[400]};
  margin: 2rem;
`;

export { NotExistWrapper, NotExistText, NotExistContainer };
