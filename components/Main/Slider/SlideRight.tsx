import React, { FC } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';

interface ISlide {
  image: string;
}

const SlideImage: FC<ISlide> = ({ image }) => {
  return (
    <ImageBlock>
      <img src={image} />
    </ImageBlock>
  );
};

const ImageBlock = styled.div`
  max-width: 100%;
  background: transparent;
  border-radius: 24px;
  position: relative;
  display: flex;
  justify-content: center;

  & img {
    max-width: 100%;
    height: 100%;
  }

  @media (max-width: 425px) {
    order: -1;
    width: 100%;
    padding: 0 0 239px;
  }
`;

export default SlideImage;
