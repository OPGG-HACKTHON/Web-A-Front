import styled from "styled-components";

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 20rem;
  height: 20rem;
  margin: 4rem 1.5rem;
`;

const CardInfo = styled.div`
  background-color: ${({ theme }) => theme.palette.grayScale[100]};
  padding: 1.2rem 0 1.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 0 1rem 1rem;
`;

const CardTagContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.4rem;
`;

const CardTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  line-height: 1.9rem;
  height: 2.4rem;
  padding: 0.2rem 1.5rem;
  border-radius: 1.4rem;
  margin: 0 0.25rem;
  color: ${({ theme }) => theme.palette.grayScale[100]};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const CardTitle = styled.div`
  color: ${({ theme }) => theme.palette.grayScale[700]};
  width: 100%;
  font-size: 1.8rem;
  line-height: 2.3rem;
  height: 4.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  text-decoration: none;

  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardThumbnail = styled.div`
  border-radius: 1rem 1rem 0 0;
  height: 9rem;
  min-width: 15rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export {
  CardContainer,
  CardInfo,
  CardTag,
  CardTagContainer,
  CardThumbnail,
  CardTitle,
};
