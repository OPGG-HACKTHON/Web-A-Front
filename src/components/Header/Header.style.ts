import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  top: 4.2rem;
  display: flex;
  justify-content: center;
`;

export const HeaderTranslationWrapper = styled.div`
  position: absolute;
  top: -0.5rem;
  right: 100px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.palette.grayScale[300]};
  width: 10rem;
  display: flex;
  justify-content: space-around;
`;

export const HeaderTranslation = styled.button<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.grayScale[100] : theme.palette.grayScale[300]};
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 28px;
  letter-spacing: -0.03em;
  padding: 0;
`;
