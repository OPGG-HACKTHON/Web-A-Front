import styled from "styled-components";

const Title = styled.div`
  display: flex;
  font-size: 2.8rem;
  line-height: 3.5rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
`;

const IndexContainer = styled.div`
  display: flex;
`;

const SelectedIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Index = styled.div`
  font-size: 1.8rem;
  line-height: 2.3rem;
`;

const NonSelectedIndex = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 2.5rem 2.5rem 0;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.grayScale[500]};
`;

export {
  Title,
  TitleContainer,
  NonSelectedIndex,
  SelectedIndex,
  Index,
  IndexContainer,
};
