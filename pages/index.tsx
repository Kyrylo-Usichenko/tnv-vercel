import React, { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ReactPlayer from 'react-player/wistia';

import CustomHead from '@/components/common/Head';
import { FeaturesCon } from '@/components/common/Container/Container';
import FeaturesHeader from '@/components/common/Header/FeaturesHeader';
import Footer from '@/components/common/Footer';
import { Main } from '@/components/Main/Styles/Styles';
import RedTopSquare from '@/components/Main/RedTopSquare/RedTopSquare';
import Preview from '@/components/Main/Preview/Preview';
import HowItWorks from '@/components/Main/HowItWorks/HowItWorks';
import MoreMoney from '@/components/Main/MoreMoney/MoreMoney';
import FeaturedOn from '@/components/Main/FeaturedOn/FeaturedOn';
import WhyChoose from '@/components/Main/WhyChoose/WhyChoose';
import FormFilling from '@/components/Main/FormFilling/FormFilling';
import SmileRework from '@/components/Main/SmileRework/SmileRework';

import useOnClickOutsideVideo from '@/hooks/useOnClickOutside';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['header', 'main'])),
    },
  };
}
const Home: NextPage<any> = (props) => {
  const locale = props.locale;
  const [isPlayer, setIsPlayer] = useState(false);

  const formSection = useRef() as RefObject<HTMLDivElement>;

  const executeScroll = () => {
    if (formSection.current) {
      scrollTo({
        top: formSection.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setIsPlayer(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  const playerRef = useRef(null) as RefObject<any>;

  const modalRef = useOnClickOutsideVideo(() => {
    if (isPlayer) {
      setIsPlayer(false);
      const timeToStart = 0;
      playerRef.current.seekTo(timeToStart, 'seconds');
    }
  });

  const videoLink = useMemo(() => {
    switch (locale) {
      case 'en':
        return 'https://tinvio-3.wistia.com/medias/wam61v1zoz';
      case 'th':
        return 'https://tinvio-1.wistia.com/medias/4elq4lgqpe';
      case 'id':
        return 'https://tinvio-2.wistia.com/medias/brtcodihas';
      case 'vn':
        return 'https://tinvio-4.wistia.com/medias/ltwnbzjbs1';
      default:
        return 'https://tinvio-3.wistia.com/medias/wam61v1zoz';
    }
  }, [locale]);

  return (
    <Styled>
      <GreySquare2>
        <GreySquareDots src='/images/main/preview/dots-under-text.png' alt='grey dimonds' />
      </GreySquare2>
      <RedTopSquare />
      <GreySquare />

      <Main>
        <CustomHead titleName='Home' />
        <FeaturesHeader locale={locale} tab='Home' scrollDown={executeScroll} />
        <section>
          <FeaturesCon>
            <Preview locale={locale} scrollDown={executeScroll} />
          </FeaturesCon>
          <HowItWorks setIsPlayer={() => setIsPlayer(!isPlayer)} />
          <MoreMoney locale={locale} />

          <FeaturedOn />
          <WhyChoose />
          <SmileRework />
          <FormFilling locale={locale} formRef={formSection} />
          <Footer background='#ffffff' />
        </section>
      </Main>
      <Video isPlayer={isPlayer}>
        <div ref={modalRef} className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={videoLink}
            controls
            ref={playerRef}
            playing={isPlayer}
            width='100%'
            height='100%'
            config={{
              options: { playerColor: '#42474d' },
            }}
          />
        </div>
      </Video>
    </Styled>
  );
};

export const GreySquare = styled.div`
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
  border-radius: 45.0024px;
  transform: rotate(-45deg);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  width: 248.41px;
  height: 248.41px;
  left: 300px;
  top: -115px;
  @media (min-width: 768px) {
    width: 327.73px;
    height: 327.73px;
    left: 600px;
    top: -153px;
  }
  @media (min-width: 1024px) {
    left: 215px;
  }

  @media (min-width: 1280px) {
    left: 350px;
  }
  @media (min-width: 1440px) {
    left: 415px;
  }
  @media (min-width: 1920px) {
    top: -182px;
    left: 642px;
    width: 256.75px;
    height: 256.75px;
    background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
    border-radius: 45.0024px;
    transform: rotate(-45deg);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    overflow: hidden;
  }
`;
export const GreySquare2 = styled.div`
  left: -200px;
  top: 164px;
  width: 343.78px;
  height: 343.78px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
  border-radius: 45.0024px;
  transform: rotate(-45deg);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    left: -65px;
    top: 220px;
  }
  @media (min-width: 1440px) {
    left: -46px;
    top: 415px;
  }
  @media (min-width: 1920px) {
    top: 410px;
    left: 212px;
    width: 343.78px;
    height: 343.78px;
    background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
    border-radius: 45.0024px;
    transform: rotate(-45deg);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    overflow: hidden;
  }
`;

export const GreySquareDots = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: inherit;
    transform: rotate(45deg);
    position: absolute;
    left: 5px;
    bottom: 120px;
    z-index: 0;
  }
`;

export const Styled = styled.div`
  position: relative;
  overflow: hidden;
`;

const Video = styled.div<{ isPlayer: boolean }>`
  display: ${({ isPlayer }) => (isPlayer ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & .player-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 844px;
    height: 474px;
    @media (max-width: 938px) {
      padding-top: 52.25%;
      width: 90%;
      height: auto;
    }
  }
  & .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default Home;
