import React, { FC } from 'react';
import styled from 'styled-components';

const LogoText: FC = () => {
  return (
    <>
      <Img src='/icons/common/logo/logo-text.svg' alt='tinvio' />
    </>
  );
};

const Img = styled.img`
  margin-left: 7.4px;
  width: 60.2px;
  height: 19px;

  @media (min-width: 1920px) {
    width: 69.71px;
    height: 22px;
  }
`;

export default LogoText;
