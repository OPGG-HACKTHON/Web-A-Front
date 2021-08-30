import styled from "styled-components";

export const RoulettePlayIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const RoulettePlayIconsContainer = styled.div`
  position: relative;
  width: 76px;
  height: 66px;
`;

export const RoulettePlayIconsImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RoulettePlayIconsImg = styled.div<{ isLeft: boolean }>`
  ${({ isLeft }) => (isLeft ? "margin-left: 2.6rem" : "")};
  &:nth-child(2) {
    ${({ isLeft }) => (isLeft ? "margin: 0rem" : "margin-left: 2.6rem")};
  }
`;
