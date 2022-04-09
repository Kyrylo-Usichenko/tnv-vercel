import React, { FC, RefObject, useRef, useState } from 'react';
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';

import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import { Container } from '../../common/Container/Container';

const TYPE_WRITE_SPEED = 1.5;
const TYPE_WRITER_CHARACTERS = 10; // max words width

const MoreMoney: FC = () => {
	const [slide, setSlide] = useState('Payments');
	const typeRef = useRef() as RefObject<HTMLSpanElement>;
	const entry = useIntersectionObserver(typeRef, {});
	const isVisible = !!entry?.isIntersecting;

	return (
		<Wrapper>
			<GreySquare />
			<PurpleSquare>
				<RedSquare>
					<Null>
						<PaymentsActivity />
						<FruitPlanet />
						<Stars src='images/main/moreMoney/stars.svg' alt='' />
						<Dots src='images/main/moreMoney/dots.svg' alt='' />
					</Null>
				</RedSquare>
			</PurpleSquare>
			<Container>
				<Inner>
					<Title>
						Smarter supply chain transactions.{' '}
						<TitleSpan ref={typeRef} isVisible={isVisible}>
							More money
						</TitleSpan>
					</Title>
					<ButtonsWrapper>
						<Button width='134' onClick={() => setSlide('Payments')} isActive={slide === 'Payments'}>
							Payments
						</Button>
						<Button width='114' onClick={() => setSlide('Orders')} isActive={slide === 'Orders'}>
							Orders
						</Button>
						<Button width='107' onClick={() => setSlide('Chats')} isActive={slide === 'Chats'}>
							Chats
						</Button>
					</ButtonsWrapper>
					<List>
						<Item>Send invoices and easily track them until they’re paid</Item>
						<Item>Real-time payments settlement and reconciliation</Item>
						<Item>Safe, secure, and compliant</Item>
					</List>
					<Link href='/features'>
						<BottomButton>More Features</BottomButton>
					</Link>
				</Inner>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	height: 826px;
	margin-top: 299px;
	@media (max-width: 1280px) {
		margin-top: 0px;
	}
`;

const GreySquare = styled.div`
	width: 477.93px;
	height: 477.93px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
	border-radius: 28.2072px;
	transform: rotate(-45deg);
	position: absolute;
	top: 108px;
	left: 71px;
	@media (max-width: 1280px) {
		top: 221px;
		left: -277px;
	}
`;

const PurpleSquare = styled.div`
	width: 559.25px;
	height: 559.25px;
	background: rgba(251, 36, 43, 0.6);
	border-radius: 72px;
	transform: rotate(-45deg);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 55px;
	@media (max-width: 1280px) {
		top: 660px;
		left: 247px;
	}
	@media (max-width: 1280px) {
		top: 660px;
		left: 247px;
	}
	@media (max-width: 1280px) {
		left: 240px;
	}
	@media (max-width: 768px) {
		left: 105px;
	}
	@media (max-width: 425px) {
		left: -10px;
		width: 451px;
		height: 451px;
	}
	@media (max-width: 375px) {
		left: -36px;
	}
`;

const RedSquare = styled.div`
	width: 489.69px;
	height: 489.69px;
	background: #fb242b;
	border-radius: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 425px) {
		width: 395px;
		height: 395px;
	}
`;

const Null = styled.div`
	transform: rotate(45deg);
	width: 400px;
	height: 400px;
	position: relative;
`;

const PaymentsActivity = styled.div`
	position: absolute;
	left: -139px;
	top: -102px;
	background: url('images/main/moreMoney/paymentsActivity.png') no-repeat;
	background-size: contain;
	width: 299px;
	height: 488px;
	@media (max-width: 425px) {
		width: 250px;
		left: -10px;
		top: -38px;
	}
`;

const Dots = styled.img`
	position: absolute;
	left: 133px;
	top: -78px;
	@media (max-width: 425px) {
		top: 10px;
		left: 120px;
	}
`;

const FruitPlanet = styled.div`
	position: absolute;
	left: 116px;
	top: 42px;
	background: url('images/main/moreMoney/fruitPlanet.png') no-repeat;
	background-size: contain;
	width: 300px;
	height: 488px;
	@media (max-width: 425px) {
		left: 204px;
		top: 0;
		width: 250px;
	}
`;

const Stars = styled.img`
	position: absolute;
	left: -251px;
	top: -57px;
`;

const Title = styled.h3`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	margin: 90px 0 24px 0;
	padding: 190px 0 0 0;
	@media (max-width: 1280px) {
		text-align: center;
		font-size: 32px;
		line-height: 39px;
		margin: 0 0 24px 0;
	}
	@media (max-width: 425px) {
		font-size: 28px;
		line-height: 34px;
	}
`;
const typewriter = keyframes`
	to {
		left: 100%;
	}
`;
const blink = keyframes`
	to {
		background: transparent;
	}
`;

const TitleSpan = styled.span<{ isVisible: boolean }>`
	color: #ff474d;
	margin: 0;
	padding: 0;
	position: relative;
	&:after {
		background: #212121;
		height: 40px;
		width: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		right: -5px;
	}

	position: relative;
	width: max-content;

	${({ isVisible }) =>
		isVisible &&
		css`
			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
			}

			&::before {
				background: #ffffff;
				animation: ${typewriter} ${TYPE_WRITE_SPEED}s steps(${TYPE_WRITER_CHARACTERS}) 1s forwards;
			}

			&::after {
				width: 0.125em;
				background: black;
				animation: ${typewriter} ${TYPE_WRITE_SPEED}s steps(${TYPE_WRITER_CHARACTERS}) 1s forwards,
					${blink} 750ms steps(${TYPE_WRITER_CHARACTERS}) infinite;
			}
		`}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 387px;
	margin: 0 0 24px 0;
	width: 100%;
	padding: 0;
	@media (max-width: 1280px) {
		margin: 0 auto 24px;
	}
`;
const Inner = styled.div`
	max-width: 528px;
	width: 100%;
	@media (max-width: 1280px) {
		margin: 0 auto;
		max-width: 408px;
	}
	@media (max-width: 425px) {
		max-width: 335px;
	}
`;

const Button = styled.a<{ width: string; isActive: boolean }>`
	max-width: 528px;
	height: 40px;
	width: ${({ width }) => `${width}px`};
	background: #f3f4f5;
	border-radius: 8px;
	cursor: pointer;
	border: ${({ isActive }) => (isActive ? '1px solid #212121' : 'none')};
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		box-shadow: ${({ isActive }) => (isActive ? 'none' : '4px 4px 20px 0px rgba(33, 33, 33, 0.1)')};
	}
	@media (max-width: 1280px) {
		margin: 0 16px 0 0;
	}
`;

const BottomButton = styled.button`
	background: #ff474d;
	border-radius: 18px;
	cursor: pointer;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	width: 210px;
	height: 56px;
	margin: 32px 0 0 0;
	padding: 0;
	outline: none;
	border: none;
	&:hover {
		opacity: 0.8;
	}
	@media (max-width: 1280px) {
		margin: 32px auto 0;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Item = styled.li`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 23px;
	color: #212121;
	margin: 0 0 8px 0;
	padding: 0 0 0 27px;
	position: relative;
	&:last-child {
		margin: 0;
	}
	&:before {
		content: '';
		position: absolute;
		background: url('images/main/moreMoney/square.svg');
		width: 14px;
		height: 14px;
		left: 0;
		top: 4px;
	}
	@media (max-width: 1280px) {
		margin: 0 0 12px -20px;
		font-size: 16px;
		line-height: 23px;
		&:last-child {
			margin: 0 0 0 -20px;
		}
	}
	@media (max-width: 470px) {
		margin: 0 0 12px -5px;
		&:last-child {
			margin: 0 0 0 -5px;
		}
	}
	@media (max-width: 425px) {
		font-size: 14px;
		line-height: 20px;
	}
`;

export default MoreMoney;
