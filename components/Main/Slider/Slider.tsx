import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import SwiperCore, { Controller, Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SlideLeft from '@/components/Main/Slider/SlideLeft';
import SlideImage from '@/components/Main/Slider/SlideRight';

const Slider: FC = () => {
  const { t } = useTranslation();

  const sliders = [
    {
      sliderText: t('main:whyChooseSlide1'),
      logo: '/images/main/whyChoose/itacho-logo.svg',
      name: 'Hafidz & Indah',
      text: 'Owners (Sejadah Grocery)',
      image: '/images/main/whyChoose/itacho@2x.jpg',
      width: '96px',
      height: '49px',
    },
    {
      sliderText: t('main:whyChooseSlide2'),
      logo: '/images/main/whyChoose/moonleaf-logo.png',
      name: 'Pauline Limgenco',
      text: 'Director (Moonleaf)',
      image: '/images/main/whyChoose/moonleaf@2x.jpg',
      width: '102px',
      height: '48px',
    },
    {
      sliderText: t('main:whyChooseSlide3'),
      logo: '/images/main/whyChoose/phaitong-logo.png',
      name: 'Punnasiri Chaipatikul',
      text: 'Business Development Manager (Phaitong Station)',
      image: '/images/main/whyChoose/phaitong@2x.jpg',
      width: '70px',
      height: '52px',
    },
    {
      sliderText: t('main:whyChooseSlide4'),
      logo: '/images/main/whyChoose/baker-logo.png',
      name: 'Fathira Dida',
      text: 'Owner (Baker Old)',
      image: '/images/main/whyChoose/baker@2x.jpg',
      width: '54px',
      height: '64px',
    },
  ];

  SwiperCore.use([Autoplay]);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore | null>(null);

  return (
    <Wrapper>
      <LeftSliderWrap>
        <Swiper
          className='swiper'
          modules={[Controller, Navigation, Pagination, Autoplay]}
          controller={{ control: controlledSwiper! }}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ el: '.dots', clickable: true }}
          initialSlide={1}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={`${slide.sliderText}${index}`} className='swiper-slide'>
              <SlideLeft
                sliderText={slide.sliderText}
                logo={slide.logo}
                name={slide.name}
                text={slide.text}
                width={slide.width}
                height={slide.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </LeftSliderWrap>
      <RightSliderWrap>
        <Swiper
          className='swiper'
          modules={[EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => setControlledSwiper(swiper)}
          effect='fade'
          allowTouchMove={false}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={`${slide.sliderText}${index}`} className='swiper-slide'>
              <SlideImage image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </RightSliderWrap>
      <Dots className='dots' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 1132px;
  width: 100%;
  margin: 40px 40px 0;
  background: radial-gradient(136.24% 142.18% at 50% 50%, #ffffff 0%, rgba(250, 250, 250, 0.8) 100%);
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1140px) {
    max-width: calc(100vw - 80px);
  }

  @media (max-width: 950px) {
    flex-direction: column;
    max-width: 490px;
    align-items: center;
    padding: 32px;
  }
  @media (max-width: 768px) {
    padding: 32px 32px 64px;
  }
  @media (max-width: 425px) {
    padding: 24px 24px 48px 24px;
  }
`;

const LeftSliderWrap = styled.div`
  flex: 0 1 46%;
  width: 46%;
  margin: 48px;
  border-radius: 32px;
  position: relative;

  @media (max-width: 1220px) {
    flex: 0 1 47%;
    width: 47%;
  }
  @media (max-width: 1023px) {
    flex: 0 1 calc(46% - 76px);
    width: calc(46% - 76px);
  }
  @media (max-width: 950px) {
    flex: 0 0 100%;
    width: 100%;
    order: 2;
    margin: 0;
  }
  .swiper {
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    @media (min-width: 769px) {
      top: auto;
      bottom: 0%;
      width: 40px;
      height: 40px;
      background: #ffffff;
      border-radius: 8px;
      margin: 0;
      display: flex;
      cursor: pointer;
      transition: all 0.3s ease;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:focus {
        outline: none !important;
      }
    }
  }
  .swiper-button-prev {
    left: 0px;
    padding: 10px 15px 10px 13.33px;
    &:after {
      content: '';
      width: 11.67px;
      height: 20px;
      background: url('/images/main/whyChoose/arrow.svg');
    }
  }
  .swiper-button-next {
    left: 65px;
    padding: 10px 13.33px 10px 15px;
    &:after {
      content: '';
      transform: rotate(180deg);
      width: 11.67px;
      height: 20px;
      background: url('/images/main/whyChoose/arrow.svg');
    }
  }
`;
const RightSliderWrap = styled.div`
  flex: 0 0 40.3%;
  width: 40.3%;
  margin: 32px 32px 32px 0;

  & div {
    height: 100%;
  }

  @media (max-width: 1220px) {
    flex: 0 1 39%;
    width: 39%;
  }

  @media (max-width: 950px) {
    flex: 0 0 100%;
    width: 100%;
    order: 1;
    margin: 0 0 30px;
  }
`;

const Dots = styled.div`
  &.swiper-pagination-bullets.swiper-pagination-horizontal {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: -50px;
    @media (max-width: 1440px) {
      bottom: -47px;
    }
    @media (max-width: 767px) {
      bottom: -40px;
    }

    .swiper-pagination-bullet {
      width: 17px;
      height: 12px;
      flex: 0 0 12px;
      margin: 0 12px !important;
      border-radius: 2px;
      transform: rotate(45deg);
      background: #e1e1e1;
      cursor: pointer;
      @media (max-width: 767px) {
        height: 10px;
        flex: 0 0 10px;
      }
    }
  }
`;

export default Slider;
