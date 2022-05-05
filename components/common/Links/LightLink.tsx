import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a<{ width: number; fSize: number; lHeight: number }>`
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  width: 188px;
  height: 48px;
  text-align: center;
  text-decoration: none;
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

type LightLinkProps = {
  width: number;
  fSize: number;
  lHeight: number;
  [x: string]: any;
};

const LightLink: FC<LightLinkProps> = ({ children, width, fSize, lHeight, ...props }) => {
  return (
    <StyledLink width={width} fSize={fSize} lHeight={lHeight} {...props}>
      {children}
    </StyledLink>
  );
};

export default LightLink;
