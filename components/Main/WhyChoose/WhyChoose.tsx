import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import Slider from '../Slider/Slider';
import { useTranslation } from 'next-i18next';

const WhyChoose: FC = () => {
	const { t } = useTranslation();

	return (
		<Styled>
			<LeftTopDots />

			<Wrapper>
				<Null>
					<FeaturesCon>
						<DotsLeftBot>
							<Image src='/images/main/whyChoose/big-rombs.png' layout='fill' objectFit='contain' />
						</DotsLeftBot>
						<DotsRight>
							<Image src='/images/main/whyChoose/small-rombs.png' layout='fill' objectFit='contain' />
						</DotsRight>
						<Inner>
							<RightSquare />
							<LeftSquare />
							<Title>{t('main:whyChoose')}</Title>
							<Slider />
						</Inner>
					</FeaturesCon>
				</Null>
			</Wrapper>
		</Styled>
	);
};

const Styled = styled.div`
	position: relative;
`;

const Wrapper = styled.section`
	padding: 0 0 145px;
	margin: 78px 0 0 53.66px;
	z-index: 1;
	transform: skewY(-8deg);
	transform-origin: bottom right;
	border-radius: 50px 0px 0px 50px;
	background: #363636;
	overflow: hidden;
	position: relative;
	@media (max-width: 1280px) {
		margin: 90px 0 0 0;
	}
	@media (max-width: 1210px) {
		margin: 78px 0 0 0;
	}
	@media (max-width: 767px) {
		padding: 55px 0 215px;
	}
	@media (max-width: 425px) {
		margin: 115px 0 0 0;
	}
`;

const Null = styled.div`
	transform: skewY(8deg);
`;

const DotsLeftBot = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-910px);
	bottom: -255px;
	width: 465px;
	height: 219px;
	@media (max-width: 1279px) {
		transform: translateX(0);
		left: -175px;
		bottom: -245px;
	}
	@media (max-width: 1023px) {
	}
	@media (max-width: 767px) {
		width: 411px;
		height: 193px;
		left: -140px;
		bottom: -290px;
	}
`;
const LeftTopDots = styled.div`
	position: absolute;
	left: 246px;
	top: -36px;
	background: url('/images/main/whyChoose/leftTopDots.svg') no-repeat;
	width: 427px;
	height: 323px;
	z-index: -2;
	@media (max-width: 1280px) {
		left: -47px;
		top: -30px;
	}
`;
const DotsRight = styled.div`
	position: absolute;
	left: 838px;
	top: 116px;
	width: 465px;
	height: 219px;
	@media (max-width: 1440px) {
		left: 824px;
	}
	@media (max-width: 1280px) {
		left: 687px;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const Inner = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h4`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	padding: 77px 0 0 0;
	color: #ffffff;
	margin: 0;

	@media (max-width: 1024px) {
		font-size: 32px;
		line-height: 38px;
	}
	@media (max-width: 768px) {
		line-height: 39px;
	}
	@media (max-width: 325px) {
		font-size: 28px;
		line-height: 33px;
	}
`;

const LeftSquare = styled.div`
	position: absolute;
	top: -130px;
	left: calc(50% - 581px);
	width: 640px;
	height: 640px;
	transform: translateX(-83%);
	z-index: -1;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(62, 62, 62, 255);
		border-radius: 67.6132px;
		transform: rotate(-45deg);
	}

	@media (max-width: 950px) {
		top: -190px;
		left: 50%;
		width: 626px;
		height: 626px;
		transform: translateX(-100%);
	}

	@media (max-width: 375px) {
		left: 70%;
	}
`;

const RightSquare = styled.div`
	position: absolute;
	top: 47%;
	right: calc(50% - 581px);
	width: 700px;
	height: 700px;
	border-radius: 67.6132px;
	transform: translateX(62%);
	z-index: -1;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(62, 62, 62, 255);
		border-radius: 67.6132px;
		transform: rotate(-45deg);
	}

	@media (max-width: 950px) {
		top: 20%;
		right: 50%;
		width: 840px;
		height: 840px;
		transform: translateX(112%);
	}
`;

export default WhyChoose;
