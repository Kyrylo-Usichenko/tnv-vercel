import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import SwiperCore, { Controller, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SlideLeft from '@/components/Main/Slider/SlideLeft';
// import SlideImage from '@/components/Main/Slider/SlideRight';

const Slider: FC = () => {
  const { t } = useTranslation();

  const sliders = [
    {
      sliderText: t('main:whyChooseSlide1'),
      logo: '/images/main/whyChoose/itacho-logo.svg',
      name: 'Hafidz & Indah',
      text: 'Owners (Sejadah Grocery)',
      image: '/images/main/whyChoose/itacho@2x.png',
      imageHeight: '353px',
      width: '96px',
      height: '49px',
    },
    {
      sliderText: t('main:whyChooseSlide2'),
      logo: '/images/main/whyChoose/moonleaf-logo.png',
      name: 'Pauline Limgenco',
      text: 'Director (Moonleaf)',
      image: '/images/main/whyChoose/moonleaf@2x.png',
      imageHeight: '361px',
      width: '102px',
      height: '48px',
    },
    {
      sliderText: t('main:whyChooseSlide3'),
      logo: '/images/main/whyChoose/phaitong-logo.png',
      name: 'Punnasiri Chaipatikul',
      text: 'Business Development Manager (Phaitong Station)',
      image: '/images/main/whyChoose/phaitong@2x.png',
      imageHeight: '350px',
      width: '70px',
      height: '52px',
    },
    {
      sliderText: t('main:whyChooseSlide4'),
      logo: '/images/main/whyChoose/baker-logo.png',
      name: 'Fathira Dida',
      text: 'Owner (Baker Old)',
      image: '/images/main/whyChoose/baker@2x.png',
      imageHeight: '317px',
      width: '54px',
      height: '64px',
    },
  ];

  SwiperCore.use([Autoplay]);
  const [controlledSwiper] = useState<SwiperCore | null>(null);

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
              <MainImg src={slide.image} alt={slide.name} imgHeight={slide.imageHeight} />
            </SwiperSlide>
          ))}
        </Swiper>
      </LeftSliderWrap>
      {/* <RightSliderWrap>
        <Swiper
          className='swiper'
          modules={[EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => setControlledSwiper(swiper)}
          allowTouchMove={false}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={`${slide.sliderText}${index}`} className='swiper-slide'>
              <SlideImage image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </RightSliderWrap> */}
      <Dots className='dots' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 1132px;
  width: 100%;
  margin: 40px 40px 0;
  padding: 32px 18px 56px 32px;
  background-color: #ffffff;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1440px) {
    max-width: 1082px;
  }

  @media (max-width: 1024px) {
    max-width: 947px;
    padding: 32px 18px 48px 32px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    max-width: 490px;
    align-items: center;
    padding: 32px 0;
  }

  @media (max-width: 768px) {
    padding: 32px 0 64px 0;
  }

  @media (max-width: 425px) {
    padding: 24px 0 48px 0;
  }
`;

const LeftSliderWrap = styled.div`
  width: 100%;
  position: relative;

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
      background-color: #d2d2d2;
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
    margin-left: 24px;

    &:after {
      content: '';
      width: 12px;
      height: 20px;
      padding-right: 15px;
      background: url('/images/main/whyChoose/arrow.svg');
      background-repeat: no-repeat;
    }

    @media (max-width: 950px) {
      margin-left: 32px;
    }
  }

  .swiper-button-next {
    left: 87.5px;

    &:after {
      content: '';
      transform: rotate(180deg);
      width: 12px;
      height: 20px;
      padding-left: 15px;
      background: url('/images/main/whyChoose/arrow.svg');
      background-repeat: no-repeat;
    }

    @media (max-width: 950px) {
      left: 95.5px;
    }
  }

  & .swiper-slide {
    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
    }
  }

  /* @media (max-width: 950px) {
    flex: 0 0 100%;
    width: 100%;
    order: 2;
    margin: 0;
  } */
`;

const MainImg = styled.img<{ imgHeight: string }>`
  position: absolute;
  top: 0;
  right: 15px;
  height: 100%;
  width: auto;

  @media (max-width: 950px) {
    position: static;
    height: 290px;
    align-self: center;
    order: 1;
  }
`;

// const RightSliderWrap = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 0;
//   height: 85%;
//   width: 330px;
//   transform: translateY(-50%);
//   z-index: 99999;

//   & div {
//     height: 100%;
//   }

//   @media (max-width: 1220px) {
//     flex: 0 1 39%;
//     width: 39%;
//   }

//   @media (max-width: 950px) {
//     flex: 0 0 100%;
//     width: 100%;
//     order: 1;
//     margin: 0 0 30px;
//   }
// `;

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
