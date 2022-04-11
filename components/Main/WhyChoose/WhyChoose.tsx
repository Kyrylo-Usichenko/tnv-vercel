import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';
import Slider from '../Slider/Slider';

const WhyChoose: FC = () => {
	return (
		<Styled>
			<LeftTopDots />

			<Wrapper>
				<Null>
					<GreySquare />
					<RightSquare src='images/main/whyChoose/rightSquare.svg' />
					<LeftSquare src='images/main/whyChoose/leftSquare.svg' />

					<Container>
						<DotsLeftBot />
						<DotsRight />
						<Inner>
							<Title>Why choose Tinvio?</Title>
							<Slider />
						</Inner>
					</Container>
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
	@media (max-width: 1210px) {
		margin: 78px 0 0 0;
	}
	@media (max-width: 767px) {
		padding: 55px 0 215px;
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
	background: url('images/main/whyChoose/leftBotDots.svg') top right no-repeat;
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
	background: url('images/main/whyChoose/leftTopDots.svg') no-repeat;
	width: 427px;
	height: 323px;
`;
const DotsRight = styled.div`
	position: absolute;
	left: 990px;
	top: 112px;
	background: url('images/main/whyChoose/rightDots.svg') no-repeat;
	width: 465px;
	height: 219px;
	@media (max-width: 1440px) {
		left: 930px;
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

const GreySquare = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(55, 55, 55, 0.3) 0%, rgba(250, 250, 250, 0) 100%)
		/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	border-radius: 67.6132px;
	transform: rotate(-45deg);
	width: 639.27px;
	height: 639.27px;
	position: absolute;
	left: 0;
`;

const LeftSquare = styled.img`
	position: absolute;
	position: absolute;
	top: -160px;
	left: -4px;
	@media (max-width: 425px) {
		left: -140px;
		top: -230px;
	}
`;

const RightSquare = styled.img`
	position: absolute;
	top: 124px;
	right: 0px;
	width: 759px;
	height: 658px;

	@media (max-width: 1024px) {
		top: 356px;
		right: -388px;
	}
	@media (max-width: 768px) {
		right: -348px;
	}
	@media (max-width: 425px) {
		display: none;
	}
`;

export default WhyChoose;
