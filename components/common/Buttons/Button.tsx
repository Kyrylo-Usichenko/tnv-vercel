import React, { FC } from 'react';
import styled from 'styled-components';

type RedButtonProps = {
  [x: string]: any;
};

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  width: 188px;
  height: 48px;
  color: var(--text-white);
  text-align: center;
  padding: 14px 0;
  border: none;
  border-radius: 16px;
  background-color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--text-primary-hover);
  }

  &:focus {
    background-color: var(--text-primary-hover);
  }

  @media (min-width: 1920px) {
    width: 219px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    border-radius: 18px;
    padding: 16px 0;
  }
`;

const RedButton: FC<RedButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default RedButton;
