import React, { FC, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '../../common/Container/Container';

const MoreMoney: FC = () => {
	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
	}

	const titleRef = useRef(null) as RefObject<HTMLHeadingElement>;
	const companiesRef = useRef(null) as RefObject<HTMLDivElement>;
	const { t } = useTranslation();

	useEffect(() => {
		const box = companiesRef.current;
		const [x, xEnd] = ['100%', 0];

		gsap.fromTo(
			box,
			{ x },
			{
				x: xEnd,
				scrollTrigger: {
					trigger: '.start',
					scrub: 0.5,
					start: 'top bottom',
					end: 'bottom center',
				},
			},
		);
	}, []);
	useEffect(() => {
		const box = titleRef.current;
		const [x, xEnd] = ['-40%', 0];

		gsap.fromTo(
			box,
			{ x },
			{
				x: xEnd,
				scrollTrigger: {
					trigger: '.start',
					scrub: 0.5,
					start: 'top bottom',
					end: 'bottom center',
				},
			},
		);
	}, []);

	return (
		<Styled>
			<Stars />

			<Wrapper>
				<GreySquare />
				<GreySquareRight top='-279' right='88' />
				<Dots src='/images/main/featuredOn/dots.svg' alt='' />
				<DivideLine />

				<FeaturesCon>
					<Inner>
						<Title ref={titleRef} className='start'>
							{t('main:FeaturedOn')}
						</Title>
						<Companies ref={companiesRef}>
							<Company1 src='/images/main/featuredOn/techCrunch.svg' alt='' />
							<Company2 src='/images/main/featuredOn/techInAsia.svg' alt='' />
							<Company3 src='/images/main/featuredOn/pymnts.svg' alt='' />
							<Company4 src='/images/main/featuredOn/ventureBeat.svg' alt='' />
						</Companies>
					</Inner>
				</FeaturesCon>
			</Wrapper>
		</Styled>
	);
};

const Wrapper = styled.div`
	background: radial-gradient(129.72% 141.01% at 50% 50%, #f7f7f7 0%, #fafafa 100%);
	border-radius: 0 40px 40px 0;

	position: relative;
	overflow: hidden;
	padding-bottom: 48px;
	margin-top: 510px;

	@media (min-width: 768px) {
		padding-bottom: 0;
		margin-top: 560px;
	}
	@media (min-width: 1024px) {
		padding-bottom: 0;
		margin-top: 95px;
	}
	@media (min-width: 1280px) {
		margin-top: 560px;
		margin-right: 54px;
	}
	@media (min-width: 1440px) {
		margin-top: 95px;
	}
`;

const Styled = styled.div`
	position: relative;
`;
const Company = styled.img`
	@media (max-width: 950px) {
		margin-bottom: 60px;
	}
`;

const Company1 = styled(Company)`
	@media (min-width: 320px) {
		width: 189px;
	}
	@media (min-width: 1920px) {
		width: 222.75px;
	}
`;
const Company2 = styled(Company)`
	@media (min-width: 320px) {
		width: 203px;
	}
	@media (min-width: 1920px) {
		width: 228px;
	}
`;
const Company3 = styled(Company)`
	@media (min-width: 320px) {
		width: 153px;
	}
	@media (min-width: 1920px) {
		width: 187px;
	}
`;
const Company4 = styled(Company)`
	@media (min-width: 320px) {
		width: 169px;
		@media (min-width: 1920px) {
			width: 211px;
		}
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.animate-box {
		width: 100%;
	}
`;

const Title = styled.h4`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	margin: 0 0 32px 0;
	padding: 48px 0 16px 0;
	text-align: center;
	width: 100%;

	@media (max-width: 1440px) {
		font-size: 36px;
		line-height: 42px;
	}
	@media (max-width: 1024px) {
		font-size: 32px;
		line-height: 38px;
	}
	@media (max-width: 768px) {
		// max-width: 336px;
	}
	@media (max-width: 440px) {
		// max-width: 253px;
		font-size: 28px;
		line-height: 33px;
		padding-bottom: 24px;
	}
`;

const Companies = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1132px;
	width: 100%;
	flex-wrap: wrap;
	margin: 0 auto;
	& img {
		margin-bottom: 48px;
	}
	@media (max-width: 1024px) {
		& img {
			height: 22px;
			max-height: 100%;
		}
		& img:nth-child(2) {
			min-height: 40px;
		}
	}
	@media (max-width: 975px) {
		flex-wrap: wrap;
		max-width: 570px;
		& img {
			flex: 0 0 50%;
			margin-bottom: 48px;
		}
	}

	@media (max-width: 575px) {
		justify-content: center;
		padding-left: 20px;
		padding-right: 20px;
		& img {
			flex: 0 0 100%;
		}
		& img:nth-child(1) {
			min-height: 28px;
		}
	}
`;

export const GreySquare = styled.div`
	width: 505.8px;
	height: 505.8px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 94.9017px;
	transform: rotate(-45deg);
	position: absolute;
	top: -90px;
	left: 234px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
	overflow: hidden;
	@media (max-width: 425px) {
		top: 119px;
		left: 334px;
	}
`;

export const GreySquareRight = styled.div<{ top: string; right: string }>`
	width: 505.8px;
	height: 505.8px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #fafafa 100%);
	opacity: 0.5;
	border-radius: 94.9017px;
	transform: rotate(-45deg);
	position: absolute;
	top: ${({ top }) => `${top}px`};
	right: ${({ right }) => `${right}px`};
	z-index: 0;
	overflow: hidden;
`;
export const Dots = styled.img`
	position: absolute;
	top: -3px;
	right: 382px;
	z-index: 0;

	@media (max-width: 1024px) {
		right: -15%;
	}
`;
export const Stars = styled.div`
	position: absolute;
	top: 60px;
	right: 1px;
	z-index: -1;
	width: 946px;
	height: 393px;
	background: url('/images/main/featuredOn/stars.svg') no-repeat;
	@media (max-width: 1440px) {
		top: 40px;
	}
	@media (max-width: 1024px) {
		top: 45px;
	}
	@media (max-width: 950px) {
		//display: none;
		right: 0;
		top: 108px;
	}
	@media (max-width: 425px) {
		//display: none;
		right: 0;
		top: 389px;
		background: url('/images/main/featuredOn/stars375.svg') no-repeat;
		background-size: contain;
		width: 353px;
		height: 213px;
	}
`;
const DivideLine = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 665px;
	height: 1px;
	transform: translateX(-50%);
	background-color: #d2d2d2;
	@media (max-width: 975px) {
		width: 336px;
		top: 108px;
	}
	@media (max-width: 440px) {
		width: 253px;
		top: 104px;
	}
`;

export default MoreMoney;
