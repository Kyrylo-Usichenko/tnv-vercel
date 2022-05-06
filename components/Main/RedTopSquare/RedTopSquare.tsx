import React, { FC, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const RedTopSquare: FC = () => {
  const mainDiv = useRef() as RefObject<HTMLDivElement>;
  const entry = useIntersectionObserver(mainDiv, {});

  const pic1 = useRef() as RefObject<HTMLImageElement>;
  const pic2 = useRef() as RefObject<HTMLImageElement>;

  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;

    const elem1 = pic1?.current;
    const elem2 = pic2?.current;

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const updateScale = () => {
      const scrolled1 = (window.scrollY / (scrollHeight - window.innerHeight)) * 0.25;
      const scale = 1 + scrolled1;
      const translateY = (window.scrollY / (scrollHeight - window.innerHeight)) * 350;

      elem1!.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
      elem2!.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScale);
    };

    if (isVisible) {
      window.addEventListener('scroll', onScroll);
    } else {
      window.removeEventListener('scroll', onScroll);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, [entry]);

  return (
    <BigRed>
      <SmallRed>
        <Null ref={mainDiv}>
          <AppImage ref={pic1} src='/images/main/preview/app@2x.png' />
          <Phone ref={pic2} src='/images/main/preview/phone@2x.png' />
          <DotsLeft />
          <DotsBottom />
        </Null>
      </SmallRed>
    </BigRed>
  );
};

const Null = styled.div`
  transform: rotate(45deg);
  position: relative;
  height: 500px;
  width: 964px;
`;
const BigRed = styled.div`
  width: 1031.82px;
  height: 1049.93px;
  background: rgba(251, 36, 43, 0.6);
  border-radius: 136.463px;
  transform: rotate(-45deg);
  position: absolute;
  top: -20px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  @media (min-width: 320px) {
    width: 656.57px;
    height: 669.73px;
    left: -334px;
    top: 442px;
  }

  @media (min-width: 768px) {
    width: 999px;
    height: 999px;
    left: -500px;
    top: 455px;
  }
  @media (min-width: 1024px) {
    width: 1031.82px;
    height: 1049.93px;
    background: rgba(251, 36, 43, 0.6);
    border-radius: 136.463px;
    transform: rotate(-45deg);
    position: absolute;
    top: -20px;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }
`;

const SmallRed = styled.div`
  background: #fb242b;
  border-radius: 125.316px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 615.02px;
  height: 615.02px;

  @media (min-width: 768px) {
    width: 921.24px;
    height: 921.24px;
  }
  @media (min-width: 1024px) {
    width: 964.17px;
    height: 964.17px;
  }
`;

const AppImage = styled.img`
  position: absolute;
  z-index: 2;
  top: -126px;
  right: -312px;
  width: 504px;
  height: 389px;
  background-size: contain;
  @media (min-width: 768px) {
    top: -328px;
    right: -574px;
    width: 829px;
    height: 634px;
  }
  @media (min-width: 1024px) {
    top: -202px;
    right: 125px;
  }
  @media (min-width: 1280px) {
    top: -154px;
    right: 149px;
  }
`;

const Phone = styled.img`
  position: absolute;
  z-index: 1;

  background-size: contain;
  width: 150px;
  height: 248px;
  left: 322px;
  top: 53px;

  @media (min-width: 768px) {
    top: -45px;
    left: 499px;
    width: 253px;
    height: 414px;
  }
  @media (min-width: 1024px) {
    top: 118px;
    left: -165px;
    width: 253px;
    height: 414px;
  }
  @media (min-width: 1280px) {
    top: 144px;
    left: -183px;
  }
`;
const DotsLeft = styled.div`
  position: absolute;
  z-index: 1;
  background: url('/images/main/preview/dots-top768.png') no-repeat;
  background-size: contain;
  width: 162.85px;
  height: 123.25px;
  top: -125px;
  left: 326px;
  @media (min-width: 768px) {
    width: 245px;
    height: 181px;
    top: -291px;
    left: 489px;
    background-size: contain;
  }
  @media (min-width: 1024px) {
    top: 70px;
    left: -83px;
    width: 193px;
    height: 146px;
    position: absolute;
    z-index: 1;
    background: url('/images/main/preview/dots-little.png') no-repeat;
  }
`;
const DotsBottom = styled.div`
  bottom: -90px;
  position: absolute;
  z-index: 1;
  background-size: contain;
  width: 277.53px;
  height: 210.02px;
  background: url('/images/main/preview/dots-big375.png') no-repeat;
  top: 84px;
  left: 408px;
  @media (min-width: 1px) {
    width: 277.53px;
    height: 210.02px;
    background: url('/images/main/preview/dots-big375.png') no-repeat;
    top: 84px;
    left: 408px;
  }
  @media (min-width: 768px) {
    width: 408.7px;
    height: 309.28px;
    background: url('/images/main/preview/dots-big768.png') no-repeat;
    top: 56px;
    left: 630px;
  }
  @media (min-width: 1024px) {
    top: unset;
    width: 328.75px;
    height: 248.78px;
    bottom: -90px;
    left: 269px;
    position: absolute;
    z-index: 1;
    background: url('/images/main/preview/dots-big.png') no-repeat;
    background-size: contain;
  }
`;

export default RedTopSquare;
