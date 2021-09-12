import styled from "styled-components";

const ErrorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 53rem;
`;
const ErrorHeader = styled.h1`
  font-weight: 500;
  font-size: 4rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.palette.grayScale[200]};
  margin-bottom: 1.5rem;
`;

const ErrorDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
`;
const ErrorText = styled.p`
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.palette.grayScale[400]};
  margin: 0;
`;

const ErrorButton = styled.button`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.4rem 1.8rem;
  border: ${({ theme }) => `1px solid ${theme.palette.primary.main}`};
  border-radius: 0.5rem;
  background-color: transparent;
  width: 14rem;
  cursor: pointer;
`;

export {
  ErrorWrapper,
  ErrorContainer,
  ErrorHeader,
  ErrorText,
  ErrorDesc,
  ErrorButton,
};
