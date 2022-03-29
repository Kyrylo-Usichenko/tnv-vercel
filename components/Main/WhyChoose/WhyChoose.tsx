import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';
import Slider from '../Slider/Slider';

const WhyChoose: FC = () => {
	return (
		<Styled>
			<Dots left='246' top='-36' rotate='0' src='images/main/whyChoose/leftTopDots.svg' />

			<Wrapper>
				<Null>
					<GreySquare />
					<Dots left='48' top='585' rotate='0' src='images/main/whyChoose/leftBotDots.svg' />
					<Dots left='1199' top='112' rotate='0' src='images/main/whyChoose/rightDots.svg' />
					<RightSquare src='images/main/whyChoose/rightSquare.svg' />
					<LeftSquare src='images/main/whyChoose/leftSquare.svg' />

					<Container>
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

const Wrapper = styled.section`
	height: 677px;
	margin: 78px 0 0 53.66px;
	z-index: 1;
	transform: skewY(-8deg);
	transform-origin: bottom right;
	border-radius: 50px 0px 0px 50px;
	background: #363636;
	overflow: hidden;
	position: relative;
`;

const Styled = styled.div`
	position: relative;
`;

const Null = styled.div`
	transform: skewY(8deg);
`;

const Dots = styled.img<{ top: string; left: string; rotate: string }>`
	position: absolute;
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
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
`;

const RightSquare = styled.img`
	position: absolute;
	top: 124px;
	right: 25px;
	width: 698.85px;
	height: 698.85px;
`;

export default WhyChoose;
