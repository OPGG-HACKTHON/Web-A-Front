import styled from "styled-components";

export const Bubble = styled.div<{ isShow: boolean }>`
  position: absolute;
  top: calc(50% + 2.5rem);
  right: calc(-50% - 4.1rem);
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity 0.3s 0s,
    z-index 0s ${({ isShow }) => (isShow ? "0s" : "0.3s")};
  z-index: ${({ isShow }) => (isShow ? 100 : -1)};
`;

export const BubbleWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.grayScale[100]};
  border-radius: 0.4em;
  box-shadow: 0rem 0.4rem 0.8rem rgba(77, 77, 77, 0.3);
  border-radius: 2rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 3.9rem;
    width: 0;
    height: 0;
    border: 1rem solid transparent;
    border-right: 0.65rem solid transparent;
    border-left: 0.65rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.palette.grayScale[100]};
    border-top: 0;
    margin-top: -1rem;
  }
`;

export const BubbleContainer = styled.div`
  color: ${({ theme }) => theme.palette.grayScale[600]};
  letter-spacing: -0.03em;
  padding: 2.5rem;
`;

export const BubbleTtile = styled.h4`
  line-height: 2.3rem;
  font-size: 1.8rem;
  padding: 0 0.3rem;
  margin-bottom: 1rem;
`;

export const BubbleUnderline = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grayScale[200]};
`;

export const BubbleContent = styled.p`
  margin-top: 2rem;
  font-size: 1.4rem;
  line-height: 1.9rem;
  white-space: pre-line;
`;

export const BubbleClose = styled.button`
  color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  border: none;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.grayScale[200]};
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  padding: 1.5rem 0rem;
`;
