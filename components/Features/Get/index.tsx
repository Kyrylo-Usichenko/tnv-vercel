import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '@/components/common/Container/Container';

const Get = () => {
  const { t } = useTranslation();

  return (
    <SyledGet>
      <FeaturesCon>
        <GetCon>
          <GetTitle>{t('features:getSmarterTitle')}</GetTitle>
          <GetText>{t('features:getSmarterText')}</GetText>
          <First>
            <Second>
              <Stars>
                <div>
                  <Image src={'/images/features/get/dec.svg'} alt='Stars' width={73} height={72.6} />
                </div>
              </Stars>
              <LeftImgWrap>
                <LeftImg>
                  <Image
                    src='/images/features/get/left@2x.png'
                    layout='fill'
                    objectFit='contain'
                    alt='app'
                    priority={true}
                  />
                </LeftImg>
              </LeftImgWrap>
              <RightImgWrap>
                <RightImg>
                  <Image
                    src='/images/features/get/right@2x.png'
                    layout='fill'
                    objectFit='contain'
                    alt='app'
                    priority={true}
                  />
                </RightImg>
              </RightImgWrap>
              <Dots>
                <div>
                  <Image src={'/images/features/get/dots.png'} alt='Dots' layout='fill' objectFit='contain' />
                </div>
              </Dots>
            </Second>
          </First>
        </GetCon>
      </FeaturesCon>
    </SyledGet>
  );
};

const SyledGet = styled.section`
  padding: 0;
  margin-bottom: 200px;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 300px;
  }

  @media (min-width: 1024px) {
    padding: 288px 0;
    margin-bottom: 80px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 140px;
  }
`;

const GetCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const GetTitle = styled.h2`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #212121;
  margin: 0 0 12px 0;
  position: relative;
  text-align: center;
  max-width: 343px;

  &::before {
    content: '';
    width: 383.28px;
    height: 383.28px;
    position: absolute;
    top: -160px;
    left: -300px;
    background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
    opacity: 0.15;
    border-radius: 52.9944px;
    transform: rotate(-45deg);
    z-index: -1;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 44px;
    max-width: 382px;

    &::before {
      width: 569.32px;
      height: 569.32px;
      top: -250px;
      left: -520px;
    }
  }

  @media (min-width: 1024px) {
    text-align: left;
    margin: 0 0 25px 0;
    max-width: 350px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 49px;
    margin: 0 0 17px 0;
    max-width: 405px;
  }

  @media (min-width: 1440px) {
    &::before {
      left: -420px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
    max-width: 440px;

    &::before {
      top: -290px;
      left: -400px;
    }
  }
`;

const GetText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #5c5c5c;
  margin: 0 0 24px 0;
  position: relative;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }

  @media (min-width: 1024px) {
    max-width: 336px;
  }

  @media (min-width: 1280px) {
    max-width: 400px;
  }

  @media (min-width: 1440px) {
    max-width: 480px;
  }

  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const First = styled.div`
  position: static;
  width: 405.53px;
  height: 405.53px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
  border-radius: 52.1364px;
  transform: rotate(-45deg);
  padding: 25px;
  margin-top: 80px;

  @media (min-width: 768px) {
    width: 560.03px;
    height: 560.03px;
    padding: 35px;
    margin-top: 150px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: -175px;
    right: -44px;
    margin: 0;
  }

  @media (min-width: 1280px) {
    right: -112px;
  }

  @media (min-width: 1440px) {
    right: -40px;
  }

  @media (min-width: 1920px) {
    right: 20px;
  }
`;

const Second = styled.div`
  width: 355.09px;
  height: 355.09px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 52.1364px;
  position: relative;

  @media (min-width: 768px) {
    width: 490.37px;
    height: 490.37px;
  }
`;

const Stars = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: -67px;
    left: 28px;
    transform: rotate(45deg);

    & > div {
      position: relative;
      height: inherit;
      width: inherit;
    }
  }

  @media (min-width: 1024px) {
    top: -83px;
    left: 57px;
  }
`;

const Dots = styled.div`
  position: absolute;
  top: 29px;
  right: -104px;
  transform: rotate(45deg);
  width: 188px;
  height: 180px;

  & > div {
    position: relative;
    height: inherit;
    width: inherit;
  }

  @media (min-width: 768px) {
    top: 66px;
    right: -200px;
    width: 322px;
    height: 248px;
  }
`;

const LeftImgWrap = styled.div`
  position: absolute;
  transform: rotate(45deg);
  top: -9px;
  left: -31px;
  z-index: 2;

  @media (min-width: 768px) {
    top: -9px;
    left: -109px;
  }

  @media (min-width: 1024px) {
    top: -25px;
    left: -93px;
  }
`;

const LeftImg = styled.div`
  position: relative;
  width: 202px;
  height: 320px;

  @media (min-width: 768px) {
    width: 271px;
    height: 430px;
  }

  @media (min-width: 1024px) {
    width: 288px;
    height: 455px;
  }
`;

const RightImgWrap = styled.div`
  position: absolute;
  transform: rotate(45deg);
  top: 28px;
  right: -78px;
  z-index: 2;

  @media (min-width: 768px) {
    top: -37px;
    right: -122px;
  }

  @media (min-width: 1024px) {
    top: -4px;
    right: -131px;
  }
`;

const RightImg = styled.div`
  position: relative;
  width: 318px;
  height: 410px;

  @media (min-width: 768px) {
    width: 504px;
    height: 650px;
  }

  @media (min-width: 1024px) {
    width: 498px;
    height: 641px;
  }
`;

export default Get;
