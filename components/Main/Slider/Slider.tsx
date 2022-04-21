import React, { FC, useState } from 'react';
import SwiperCore, { Controller, Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SlideLeft from './SlideLeft';
import SlideImage from './SlideRight';

const SLIDERS = [
	{
		sliderText:
			"Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
		logo: '/images/main/whyChoose/itacho-logo.png',
		name: 'Hafidz & Indah',
		text: 'Owners (Sejadah Grocery)',
		image: '/images/main/whyChoose/itacho.webp',
		width: '96px',
		height: '49px',
	},
	{
		sliderText:
			'Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.',
		logo: '/images/main/whyChoose/moonleaf-logo.svg',
		name: 'Pauline Limgenco',
		text: 'Director (Moonleaf)',
		image: '/images/main/whyChoose/moonleaf.webp',
		width: '102px',
		height: '48px',
	},
	{
		sliderText:
			'Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.',
		logo: '/images/main/whyChoose/phaitong-logo.svg',
		name: 'Punnasiri Chaipatikul',
		text: 'Business Development Manager (Phaitong Station)',
		image: '/images/main/whyChoose/phaitong.webp',
		width: '70px',
		height: '52px',
	},
	{
		sliderText:
			"With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
		logo: '/images/main/whyChoose/baker-logo.svg',
		name: 'Fathira Dida',
		text: 'Owner (Baker Old)',
		image: '/images/main/whyChoose/baker.webp',
		width: '54px',
		height: '64px',
	},
];

const Slider: FC = () => {
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
					{SLIDERS.map((slide, index) => (
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
					{SLIDERS.map((slide, index) => (
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
	position: relative;

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
		padding: 24px;
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
			background: #ff474d;
			border-radius: 8px;
			margin: 0;
			display: flex;
			cursor: pointer;
			transition: all 0.3s ease;
			&:hover {
				background: rgba(255, 71, 77, 0.8);
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
			background: url('images/main/whyChoose/arrow.svg');
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
			background: url('images/main/whyChoose/arrow.svg');
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
