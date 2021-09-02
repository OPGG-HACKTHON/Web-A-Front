import styled from "styled-components";

export const KeywordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.25rem;
  width: 67.5rem;
`;

export const KeywordItem = styled.button<{ isSelected: boolean }>`
  border: none;
  width: 12rem;
  height: 4rem;
  padding: 1rem;
  border-radius: 3.3rem;
  margin: 0.75rem;
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: -0.03em;
  cursor: pointer;
  background: ${({ theme, isSelected }) =>
    isSelected
      ? theme.palette.primary.main
      : theme.palette.backgroundColors.light};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.grayScale[100] : theme.palette.grayScale[600]};
  transition: all 0.3s 0s;
`;
