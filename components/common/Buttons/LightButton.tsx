import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ width: number; fSize: number; lHeight: number }>`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  width: 188px;
  height: 48px;
  text-align: center;
  padding: 14px 0;
  border: none;
  border-radius: 16px;
  color: var(--text-main);
  background-color: var(--text-white);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e1;
  }

  &:focus {
    background-color: #e0e0e1;
  }

  @media (min-width: 1920px) {
    width: ${({ width }) => `${width}px`};
    height: 56px;
    font-size: ${({ fSize }) => `${fSize}px`};
    line-height: ${({ lHeight }) => `${lHeight}px`};
    border-radius: 18px;
    padding: 16px 0;
  }
`;

type LightButtonProps = {
  width: number;
  fSize: number;
  lHeight: number;
  [x: string]: any;
};

const LightButton: FC<LightButtonProps> = ({ children, width, fSize, lHeight, ...props }) => {
  return (
    <StyledButton width={width} fSize={fSize} lHeight={lHeight} {...props}>
      {children}
    </StyledButton>
  );
};

export default LightButton;
