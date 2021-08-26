import React from "react";
import styled from "styled-components";

interface IIconProps {
  width?: string;
  height?: string;
}

const Icon = styled.svg<IIconProps>`
  width: ${({ width }) => (width ? width : `1rem`)};
  height: ${({ height }) => (height ? height : `1rem`)};
`;

const CloseIcon: React.FC<IIconProps> = ({ width, height }) => {
  return (
    <Icon
      {...{ width, height }}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 17L9.5 9.5L2 2"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 2L9.5 9.5L17 17"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export { CloseIcon };
