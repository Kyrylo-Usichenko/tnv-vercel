import React, { FC, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '@/components/common/Container/Container';
import LightButton from '@/components/common/Buttons/LightButton';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type GreetingsProps = {
  scrollDown: () => void;
  locale: string;
};

const Greetings: FC<GreetingsProps> = ({ scrollDown, locale }) => {
  const { t } = useTranslation();

  const heading = useRef() as RefObject<HTMLHeadingElement>;
  const entry = useIntersectionObserver(heading, {});

  const pic1 = useRef() as RefObject<HTMLPictureElement>;

  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;

    const dec1 = pic1?.current;

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const updateScale = () => {
      const scrolled = (window.scrollY / (scrollHeight - window.innerHeight)) * 30;
      const scale = 1 + scrolled;
      const opacity = 1 - scrolled;

      dec1!.style.transform = `scale(${scale})`;

      dec1!.style.opacity = `${opacity}`;
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
    <Wrapper>
      <FeaturesCon>
        <TitleDiv>
          <Title ref={heading}>
            <TitleDec ref={pic1}>
              <source srcSet='/images/company/Greetings/dec-768.svg' media='(min-width: 768px)' />
              <img src='/images/company/Greetings/dec-375.svg' alt='Stars' />
            </TitleDec>
            {t('company:greetingsTitle')} <span className='accent'>Tinvio</span>
            {locale == 'vn' ? ' ????y' : ''}!
          </Title>
        </TitleDiv>
        <SubTitle>{t('company:greetingsSubTitle')}</SubTitle>
        <Main>
          <Info>
            <Text>{t('company:greetingsText1')}</Text>
            <Text>{t('company:greetingsText2')}</Text>
            <Contact width={210} fSize={18} lHeight={22} onClick={scrollDown}>
              <img src='/images/company/Greetings/chat-icon.svg' alt='chat' />
              {t('company:greetingsButton')}
            </Contact>
            <LeftTopSquare />
            <LeftBotSquare />
            <LeftBotSquare2 />
          </Info>
          <PhoneWrapper>
            <Phone width='398' height='658' src='/images/company/Greetings/phone@2x.png' alt='app' />
            <Dec1></Dec1>
            <RSquare />
          </PhoneWrapper>
        </Main>
      </FeaturesCon>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 142px 0 140px 0;

  @media (min-width: 1920px) {
    margin: 152px 0 140px 0;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  display: inline-block;
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;
  color: #212121;
  text-align: center;
  margin: 0 0 16px 0;
  position: relative;

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 59px;
  }

  @media (min-width: 1280px) {
    font-size: 56px;
    line-height: 66px;
  }

  @media (min-width: 1920px) {
    font-size: 60px;
    line-height: 74px;
  }
`;

const TitleDec = styled.picture`
  position: absolute;
  top: -16px;
  left: -26px;

  @media (min-width: 768px) {
    top: -25px;
    left: -66px;
  }
`;

const SubTitle = styled.h2`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #5c5c5c;
  text-align: center;
  margin: 0 0 28px 0;

  @media (min-width: 768px) {
    margin: 0 0 40px 0;
  }

  @media (min-width: 1920px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 60px;
  }

  @media (min-width: 1280px) {
    gap: 90px;
  }

  @media (min-width: 1440px) {
    gap: 100px;
  }

  @media (min-width: 1920px) {
    gap: 174px;
  }
`;

const Info = styled.div`
  position: relative;
  padding: 48px 0;
  order: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -16px;
    width: 100vw;
    height: 100%;
    background: #f7f7f7;
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
    z-index: -1;
  }

  @media (min-width: 1024px) {
    order: 0;
    flex: 0 0 430px;

    &::after {
      left: -400px;
    }
  }

  @media (min-width: 1200px) {
    &::after {
      left: -500px;
    }
  }

  @media (min-width: 1280px) {
    flex: 0 0 492px;
  }

  @media (min-width: 1400px) {
    &::after {
      left: -650px;
    }
  }

  @media (min-width: 1440px) {
    flex: 0 0 736px;

    &::after {
      left: -520px;
    }
  }

  @media (min-width: 1600px) {
    &::after {
      left: -690px;
    }
  }

  @media (min-width: 1770px) {
    &::after {
      left: -850px;
    }
  }
`;

const Text = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #5c5c5c;
  margin: 0 0 30px 0;

  &:last-of-type {
    margin-bottom: 32px;
  }
`;

const Contact = styled(LightButton)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    display: inline-flex;
    margin-right: 8px;
    max-width: 16px;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const PhoneWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;

  &::before {
    content: url('/images/company/Greetings/ph-dots-b-375.svg');
    position: absolute;
    bottom: -120px;
    right: -30px;
    z-index: -1;
  }

  &::after {
    content: url('/images/company/Greetings/ph-dec-375.svg');
    position: absolute;
    top: 186px;
    right: -33px;
    z-index: -1;
  }

  @media (min-width: 768px) {
    &::before {
      content: url('/images/company/Greetings/ph-dots-b-768.svg');
      bottom: -22px;
      right: 67px;
    }

    &::after {
      content: url('/images/company/Greetings/ph-dec-768.svg');
      top: 75px;
      right: -93px;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;

    &:before {
      bottom: -61px;
      right: -45px;
    }

    &::after {
      display: block;
      content: url('/images/company/Greetings/ph-dec-1280.svg');
      top: 110px;
      right: -80px;
    }
  }
`;

const Phone = styled.img`
  height: 433px;
  width: auto;

  @media (min-width: 768px) {
    height: 700px;
  }

  @media (min-width: 1024px) {
    display: block;
    height: 600px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    height: 500px;
  }
`;

const Dec1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::before {
    content: url('/images/company/Greetings/ph-dots-t.svg');
    position: absolute;
    top: 60px;
    left: -209px;
    z-index: -1;
  }

  @media (min-width: 768px) {
    &::before {
      top: -10px;
      left: 55px;
    }
  }

  @media (min-width: 1024px) {
    &::before {
      top: -4px;
      left: -35px;
    }
  }
`;

const RSquare = styled.div`
  width: 678.98px;
  height: 678.98px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
  transform: rotate(45deg);
  border-radius: 63.2013px;
  opacity: 0.15;
  position: absolute;
  top: -60px;
  right: -547px;
  z-index: -1;

  @media (min-width: 768px) {
    right: -347px;
  }

  @media (min-width: 768px) {
    top: -120px;
    right: -459px;
  }
`;

const LeftTopSquare = styled.div`
  position: absolute;
  left: -118px;
  top: -173px;
  width: 251.35px;
  height: 251.35px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
  transform: rotate(45deg);
  border-radius: 23.3968px;
  opacity: 0.15;
  z-index: -1;

  @media (min-width: 768px) {
    left: -200px;
    top: -149px;
  }

  @media (min-width: 1024px) {
    left: -240px;
    top: -280px;
  }
`;

const LeftBotSquare = styled.div`
  position: absolute;
  left: -240px;
  top: 100px;
  width: 460.84px;
  height: 460.84px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
  transform: rotate(45deg);
  border-radius: 42.8967px;
  opacity: 0.15;
  z-index: -2;

  @media (min-width: 768px) {
    left: -336px;
    top: 42px;
  }

  @media (min-width: 1024px) {
    top: -25px;
  }
`;

const LeftBotSquare2 = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    width: 399.51px;
    height: 399.51px;
    background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
    opacity: 0.15;
    border-radius: 37.1876px;
    transform: rotate(-45deg);
    z-index: -1;
    left: -200px;
    top: 550px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default Greetings;
