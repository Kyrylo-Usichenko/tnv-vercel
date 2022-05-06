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

const Slider: FC = () => {
  const { t } = useTranslation();

  const sliders = [
    {
      sliderText: t('main:whyChooseSlide1'),
      logo: '/images/main/whyChoose/itacho-logo.svg',
      name: 'Hafidz & Indah',
      text: 'Owners (Sejadah Grocery)',
      image: '/images/main/whyChoose/itacho@2x.png',
      imgData: {
        imageHeight: {
          '1280w': '353px',
          '1024w': '360px',
          '768w': '298px',
          '375w': '235px',
        },
        top: 'auto',
        right: '20px',
        left: 'auto',
        bottom: '0',
      },
      panelWidth: {
        '1920w': '935px',
        '1280w': '840px',
        '1024w': '756px',
      },
      textPanelWidth: {
        '1920w': '690px',
        '1280w': '645px',
        '1024w': '552px',
      },
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
      imgData: {
        imageHeight: {
          '1280w': '360px',
          '1024w': '368px',
          '768w': '316px',
          '375w': '240px',
        },
        top: '3%',
        right: '20px',
        left: 'auto',
        bottom: 'auto',
      },
      panelWidth: {
        '1920w': '866px',
        '1280w': '762px',
        '1024w': '677px',
      },
      textPanelWidth: {
        '1920w': '660px',
        '1280w': '600px',
        '1024w': '530px',
      },
      width: '102px',
      height: '48px',
    },
    {
      sliderText: t('main:whyChooseSlide3'),
      logo: '/images/main/whyChoose/phaitong-logo.png',
      name: 'Punnasiri Chaipatikul',
      text: 'Business Development Manager (Phaitong Station)',
      image: '/images/main/whyChoose/phaitong@2x.png',
      imgData: {
        imageHeight: {
          '1280w': '350px',
          '1024w': '350px',
          '768w': '307px',
          '375w': '235px',
        },
        top: '4%',
        right: '35px',
        left: 'auto',
        bottom: 'auto',
      },
      panelWidth: {
        '1920w': '976px',
        '1280w': '874px',
        '1024w': '792px',
      },
      textPanelWidth: {
        '1920w': '725px',
        '1280w': '707px',
        '1024w': '570px',
      },
      width: '70px',
      height: '52px',
    },
    {
      sliderText: t('main:whyChooseSlide4'),
      logo: '/images/main/whyChoose/baker-logo.png',
      name: 'Fathira Dida',
      text: 'Owner (Baker Old)',
      image: '/images/main/whyChoose/baker@2x.png',
      imgData: {
        imageHeight: {
          '1280w': '328px',
          '1024w': '317px',
          '768w': '287px',
          '375w': '223px',
        },
        top: '8%',
        right: '0',
        left: 'auto',
        bottom: 'auto',
      },
      panelWidth: {
        '1920w': '933px',
        '1280w': '823px',
        '1024w': '724px',
      },
      textPanelWidth: {
        '1920w': '650px',
        '1280w': '651px',
        '1024w': '485px',
      },
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
                panelWidth={slide.panelWidth}
                textPanelWidth={slide.textPanelWidth}
              />
              <MainImg src={slide.image} alt={slide.name} imgData={slide.imgData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </LeftSliderWrap>
      <Dots className='dots' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 1132px;
  width: 100%;
  margin: 40px 40px 0;
  background-color: #ffffff;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  max-width: 343px;

  @media (min-width: 768px) {
    max-width: 490px;
  }

  @media (min-width: 1024px) {
    max-width: 947px;
  }

  @media (min-width: 1280px) {
    max-width: 1032px;
  }

  @media (min-width: 1920px) {
    max-width: 1132px;
  }
`;

const LeftSliderWrap = styled.div`
  width: 100%;
  position: relative;
  margin: 25px 0 42px 0;

  & .swiper-slide {
    display: flex;
    flex-direction: column;
  }

  .swiper {
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: rgba(209, 209, 209, 0.7);
    }

    &:focus {
      background-color: rgba(209, 209, 209, 0.7);
    }

    @media (min-width: 768px) {
      top: auto;
      bottom: 56px;
      width: 40px;
      height: 40px;
      background-color: #d2d2d2;
      border-radius: 8px;
      margin: 25px 0 0 0;
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
    margin-left: 56px;

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
    left: 120px;

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

  @media (min-width: 1024px) {
    margin: 0;

    & .swiper-slide {
      display: block;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: flex;
    }
  }
`;

const MainImg = styled.img<{
  imgData: {
    imageHeight: {
      '1280w': string;
      '1024w': string;
      '768w': string;
      '375w': string;
    };
    top: string;
    right: string;
    left: string;
    bottom: string;
  };
}>`
  position: static;
  align-self: center;
  order: 1;
  height: ${({ imgData }) => imgData.imageHeight['375w']};
  width: auto;

  @media (min-width: 768px) {
    height: ${({ imgData }) => imgData.imageHeight['768w']};
  }

  @media (min-width: 1024px) {
    height: ${({ imgData }) => imgData.imageHeight['1024w']};
    position: absolute;
    top: ${({ imgData }) => imgData.top};
    right: ${({ imgData }) => imgData.right};
    left: ${({ imgData }) => imgData.left};
    bottom: ${({ imgData }) => imgData.bottom};
  }

  @media (min-width: 1280px) {
    height: ${({ imgData }) => imgData.imageHeight['1280w']};
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
