import React, { FC, RefObject, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '@/components/common/Container/Container';
import FadeIn from '@/components/common/FadeIn/FadeIn';

import useAnimate from '@/hooks/useAnimate';

const delay1 = 500;
const delay2 = 800;
const delay3 = 1100;
const delay4 = 1400;
const delay5 = 1700;
const delay6 = 2000;
const delay7 = 2300;
const delay8 = 2600;
const delay9 = 2900;
const delay10 = 3200;

const Smile: FC = () => {
  const { t } = useTranslation();
  const ref = useRef() as RefObject<HTMLDivElement>;
  const isShow = useAnimate(ref);

  return (
    <Wrapper>
      <FeaturesCon>
        <Title>{t('main:smileTitle')}</Title>
      </FeaturesCon>
      <MainBox>
        <Dots top='-512' left='647' src='/images/main/smile/rightDots.png' alt='Dots' loading='lazy' />

        <RightTopGrey top='-293' left='311' size='457.92' radius='42.6248' />
        <LeftTopGrey top='-288' left='-536' size='554.34' radius='51.6' />
        <LeftGrey top='44' left='-514' size='554.34' radius='51.6' />

        <Dots top='27' left='-353' src='/images/main/smile/leftDots.png' alt='Dots' />
        <Inner ref={ref}>
          <GreyWrapper1>
            <FadeIn duration={400} delay={delay1} isShow={isShow}>
              <Grey></Grey>
              <GreyInner></GreyInner>
              <Img
                src='/images/main/smile/pet-shop.png'
                srcSet='/images/main/smile/pet-shop2x.png 2x'
                alt='pet-shop'
                loading='lazy'
              />
            </FadeIn>
          </GreyWrapper1>

          <TopFirstLine>
            <GreyWrapper2>
              <FadeIn duration={400} delay={delay3} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img src='/images/main/smile/nex.svg' alt='nex' loading='lazy' />
              </FadeIn>
            </GreyWrapper2>
            <GreyWrapper>
              <FadeIn duration={400} delay={delay5} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img
                  src='/images/main/smile/bbs.png'
                  srcSet='/images/main/smile/bbs2x.png 2x'
                  alt='bbs'
                  loading='lazy'
                />
              </FadeIn>
            </GreyWrapper>
          </TopFirstLine>
          <TopSecondLine>
            <GreyWrapper3>
              <FadeIn duration={500} delay={delay7} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img src='/images/main/smile/nayla.svg' alt='nayla' loading='lazy' />
              </FadeIn>
            </GreyWrapper3>
            <GreyWrapper>
              <FadeIn duration={400} delay={delay9} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img src='/images/main/smile/toko-kita.svg' alt='toko-kita' loading='lazy' />
              </FadeIn>
            </GreyWrapper>
          </TopSecondLine>

          {isShow ? (
            <FadeIn duration={2000} delay={0.2} isShow={isShow}>
              <PinkWrapper>
                <PinkBig />
                <PinkSmall />
                <Red>
                  <Bardo>
                    <Content>
                      <TextWrapper>
                        <Text>5000+</Text>
                        <Text>{t('main:smileContent')}</Text>
                      </TextWrapper>
                      <Line />
                    </Content>
                  </Bardo>
                </Red>
              </PinkWrapper>
            </FadeIn>
          ) : (
            <PinkWrapper />
          )}

          <BotFirstLine>
            <GreyWrapper3>
              <FadeIn duration={400} delay={delay2} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img
                  src='/images/main/smile/burger.png'
                  srcSet='/images/main/smile/burger2x.png 2x'
                  alt='burger'
                  loading='lazy'
                />
              </FadeIn>
            </GreyWrapper3>
            <GreyWrapper>
              <FadeIn duration={400} delay={delay4} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img src='/images/main/smile/group-the-companies.svg' alt='group-the-companies' loading='lazy' />
              </FadeIn>
            </GreyWrapper>
          </BotFirstLine>
          <BotSecondLine>
            <GreyWrapper2>
              <FadeIn duration={400} delay={delay6} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img src='/images/main/smile/es-teh.svg' alt='es-teh' loading='lazy' />
              </FadeIn>
            </GreyWrapper2>
            <GreyWrapper>
              <FadeIn duration={400} delay={delay8} isShow={isShow}>
                <Grey></Grey>
                <GreyInner></GreyInner>
                <Img
                  src='/images/main/smile/gong-cha.png'
                  srcSet='/images/main/smile/gong-cha2x.png 2x'
                  alt='gong-cha'
                  loading='lazy'
                />
              </FadeIn>
            </GreyWrapper>
          </BotSecondLine>
          <GreyWrapper4>
            <FadeIn duration={400} delay={delay10} isShow={isShow}>
              <Grey></Grey>
              <GreyInner></GreyInner>
              <Img src='/images/main/smile/kho-pa-ka.svg' alt='kho-pa-ka' loading='lazy' />
            </FadeIn>
          </GreyWrapper4>
        </Inner>
      </MainBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 200px;
  }
`;
const MainBox = styled.div`
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 320px) {
    max-width: 375px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

const Dots = styled.img<{ top: string; left: string }>`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  z-index: -2;
`;

const BigGrey = styled.div<{ top: string; left: string; size: string; radius: string }>`
  position: absolute;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  border-radius: ${({ radius }) => `${radius}px`};
  transform: rotate(-45deg);
  z-index: -1;
`;

const RightTopGrey = styled(BigGrey)`
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
`;

const LeftTopGrey = styled(BigGrey)`
  background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
  opacity: 0.1;
`;

const LeftGrey = styled(BigGrey)`
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;
const Title = styled.p`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;
  color: #212121;
  text-align: center;
  margin: 0 0 32px;
  padding: 0 0 40px;
  @media (max-width: 1440px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 39px;
  }
  @media (max-width: 1023px) {
    padding: 0;
  }
  @media (max-width: 425px) {
    font-size: 28px;
    line-height: 33px;
  }
`;

const pulseShape = keyframes`
 0% { transform: scale(0.5); }
  80%, 100% { opacity: 0; }
`;
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const PinkWrapper = styled.div`
  width: 344px;
  height: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -96px 0 0;
  transform: rotate(45deg);
  position: relative;

  @media (min-width: 768px) {
    width: 491px;
    height: 491px;
    margin: -226px 0 0;
  }
  @media (min-width: 1024px) {
    width: 462px;
    height: 462px;
    margin: 0 2px;
  }
`;

const PinkBig = styled.div`
  position: absolute;
  width: 343px; // increase for animation 243px + 100px
  height: 343px;
  background: rgba(251, 36, 43, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17.7451px;
  animation: ${pulseShape} 2.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  @media (min-width: 768px) {
    width: 447px; // increase for animation 347px + 100px
    height: 447px;
    border-radius: 25.3502px;
  }
  @media (min-width: 1024px) {
    width: 427px; // increase for animation 327px + 100px
    height: 427px;
    border-radius: 24.0543px;
  }
`;

const PinkSmall = styled.div`
  position: absolute;
  width: 215px;
  height: 215px;
  background: rgba(251, 36, 43, 0.4);
  border-radius: 17.7451px;
  animation: ${pulse} 2.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;

  @media (min-width: 768px) {
    width: 308px;
    height: 308px;
    border-radius: 25.3502px;
  }
  @media (min-width: 1024px) {
    width: 292px;
    height: 292px;
    border-radius: 24.0543px;
  }
`;
const Red = styled.div`
  width: 215px;
  height: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17.7451px;
  @media (min-width: 768px) {
    width: 308px;
    height: 308px;
    border-radius: 25.3502px;
  }
  @media (min-width: 1024px) {
    width: 292px;
    height: 292px;
    border-radius: 24.0543px;
  }
`;

const Bardo = styled.div`
  width: 182px;
  height: 182px;
  background: #fb242b;
  border-radius: 17.7451px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 259px;
    height: 259px;
    border-radius: 25.3502px;
  }
  @media (min-width: 1024px) {
    width: 246px;
    height: 246px;
    border-radius: 24.0543px;
  }
`;

const GreyWrapper = styled.div`
  width: 107px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (min-width: 768px) {
    width: 156px;
    height: 156px;
  }
  @media (min-width: 1024px) {
    width: 169px;
    height: 169px;
  }
  @media (min-width: 1920px) {
    width: 188px;
    height: 188px;
  }
`;

const Grey = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 76px;
  height: 74px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(246, 245, 245, 0.5) 0%, rgba(250, 250, 250, 0.5) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 111px;
    height: 108px;
    border-radius: 14.8359px;
  }
  @media (min-width: 1024px) {
    width: 121px;
    height: 118px;
  }
  @media (min-width: 1920px) {
    width: 135px;
    height: 131px;
  }
`;

const GreyInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 57px;
  height: 57px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.8) 0%, rgba(250, 250, 250, 0.8) 100%);
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 83px;
    height: 83px;
    border-radius: 11.9999px;
  }
  @media (min-width: 1024px) {
    width: 90px;
    height: 90px;
  }
  @media (min-width: 1920px) {
    width: 100px;
    height: 100px;
  }
`;
const TopFirstLine = styled.div`
  display: flex;
  margin: -46px 0 0;
  @media (min-width: 768px) {
    margin: -42px 0 0;
  }
  @media (min-width: 1024px) {
    flex-direction: column-reverse;
    margin: 0;
  }
  @media (min-width: 1280px) {
    flex-direction: column-reverse;
    margin: 0 16px 0 0;
  }
  @media (min-width: 1440px) {
    flex-direction: column-reverse;
    margin: 0 32px 0 0;
  }

  @media (min-width: 1920px) {
    margin: 0 0 0 0;
  }
`;
const TopSecondLine = styled.div`
  display: flex;
  margin: -39px 0 0;
  @media (min-width: 768px) {
    margin: -12px 0 0;
  }
  @media (min-width: 1024px) {
    flex-direction: column-reverse;
    margin: 0 -84px 0 0;
  }
  @media (min-width: 1280px) {
    margin: 0 -69px 0 0;
  }
  @media (min-width: 1440px) {
    margin: 0 -9px 0 0;
  }
  @media (min-width: 1920px) {
    margin: 0 -85px 0 119px;
  }
`;
const BotFirstLine = styled.div`
  display: flex;
  margin: -96px 0 0;
  @media (min-width: 768px) {
    margin: -214px 0 0;
  }
  @media (min-width: 1024px) {
    flex-direction: column-reverse;
    margin: 0 0 0 -84px;
  }
  @media (min-width: 1280px) {
    margin: 0 0 0 -69px;
  }
  @media (min-width: 1440px) {
    margin: 0 0 0 -9px;
  }
  @media (min-width: 1920px) {
    margin: 0 119px 0 -85px;
  }
`;
const BotSecondLine = styled.div`
  display: flex;
  margin: -39px 0 0;
  @media (min-width: 768px) {
    margin: -12px 0 0;
  }
  @media (min-width: 1024px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 1280px) {
    margin: 0 0 0 16px;
  }
  @media (min-width: 1440px) {
    margin: 0 0 0 32px;
  }
  @media (min-width: 1920px) {
    margin: 0;
  }
`;

const GreyWrapper2 = styled(GreyWrapper)`
  margin: 0 19px 0 0;
  @media (min-width: 768px) {
    margin: 0 143px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 119px 0 0 0;
  }
  @media (min-width: 1920px) {
    margin: 99px 0 0 0;
  }
`;

const GreyWrapper1 = styled(GreyWrapper)`
  @media (min-width: 1024px) {
    margin: 0 -268px 0 0;
  }
  @media (min-width: 1440px) {
    margin: 0 -269px 0 0;
  }
  @media (min-width: 1920px) {
    margin: 0 -330px 0 0;
  }
`;

const GreyWrapper3 = styled(GreyWrapper)`
  margin: 0 151px 0 0;
  @media (min-width: 768px) {
    margin: 0 428px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 267px 0 0 0;
  }
`;
const GreyWrapper4 = styled(GreyWrapper)`
  margin: -46px 0 0 0;
  @media (min-width: 768px) {
    margin: -42px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0 -268px;
  }
  @media (min-width: 1440px) {
    margin: 0 0 0 -269px;
  }
  @media (min-width: 1920px) {
    margin: 0 0 0 -330px;
  }
`;
const Img = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5638);
  @media (min-width: 768px) {
    transform: translate(-50%, -50%) scale(0.819);
  }
  @media (min-width: 1024px) {
    transform: translate(-50%, -50%) scale(0.8936);
  }
  @media (min-width: 1920px) {
    transform: translate(-50%, -50%) scale(1);
  }
`;
const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  transform: rotate(-45deg);
  align-items: center;
  position: relative;
  width: 340px;
  height: 344px;
  @media (min-width: 768px) {
    height: 491px;
  }
  @media (min-width: 1024px) {
    height: 462px;
  }
`;
const TextWrapper = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #ffffff;
  margin-top: 122px;
  @media (min-width: 768px) {
    margin-top: 173px;
  }
  @media (min-width: 1024px) {
    margin-top: 164px;
  }
  @media (min-width: 1920px) {
    margin-top: 174px;
  }
`;

const Text = styled.p`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  @media (max-width: 1440px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 1440px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 34px;
  }
  @media (max-width: 758px) {
    font-size: 29.5682px;
    line-height: 36px;
  }
  @media (max-width: 650px) {
    font-size: 20.6988px;
    line-height: 25px;
    &:first-child {
      margin-top: 0px;
    }
  }
`;
const Line = styled.div`
  margin-top: 13px;
  background: url('/images/main/smile/line.svg') no-repeat;
  width: 137px;
  height: 51px;
  background-size: contain;
  @media (min-width: 768px) {
    margin-top: 17px;
    width: 196px;
    height: 73px;
  }
  @media (min-width: 1024px) {
    margin-top: 16px;
    width: 186px;
    height: 70px;
  }
  @media (min-width: 1920px) {
    margin-top: 17px;
    width: 197px;
    height: 73px;
  }
`;
export default Smile;
