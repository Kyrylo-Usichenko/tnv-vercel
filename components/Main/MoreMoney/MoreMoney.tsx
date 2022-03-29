import Link from 'next/link';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const MoreMoney: FC = () => {
	const [slide, setSlide] = useState('Payments');
	return (
		<Wrapper>
			<GreySquare />
			<PurpleSquare>
				<RedSquare>
					<Null>
						<PaymentsActivity src='images/main/moreMoney/paymentsActivity.svg' alt='' />
						<FruitPlanet src='images/main/moreMoney/fruitPlanet.svg' alt='' />
						<Stars src='images/main/moreMoney/stars.svg' alt='' />
						<Dots src='images/main/moreMoney/dots.svg' alt='' />
					</Null>
				</RedSquare>
			</PurpleSquare>
			<Container>
				<Inner>
					<Title>
						Smarter supply chain transactions. <TitleSpan>More money</TitleSpan>
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
				</Inner>

				<List>
					<Item>Send invoices and easily track them until they’re paid</Item>
					<Item>Real-time payments settlement and reconciliation</Item>
					<Item>Safe, secure, and compliant</Item>
				</List>
				<Link href='/features'>
					<BottomButton>More Features</BottomButton>
				</Link>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	height: 826px;
	margin-top: 299px;
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
`;

const RedSquare = styled.div`
	width: 489.69px;
	height: 489.69px;
	background: #fb242b;
	border-radius: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Null = styled.div`
	transform: rotate(45deg);
	width: 400px;
	height: 400px;
	position: relative;
`;

const PaymentsActivity = styled.img`
	position: absolute;
	left: -139px;
	top: -102px;
`;

const Dots = styled.img`
	position: absolute;
	left: 133px;
	top: -78px;
`;

const FruitPlanet = styled.img`
	position: absolute;
	left: 116px;
	top: 42px;
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
`;
const TitleSpan = styled.span`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
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
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 387px;
	margin: 0 0 24px 0;
`;
const Inner = styled.div`
	max-width: 528px;
`;

const Button = styled.button<{ width: string; isActive: boolean }>`
	max-width: 528px;
	height: 40px;
	width: ${({ width }) => `${width}px`};
	background: #f3f4f5;
	border-radius: 8px;
	cursor: pointer;
	border: ${({ isActive }) => (isActive ? '1px solid #212121' : 'none')};
	&:hover {
		box-shadow: ${({ isActive }) => (isActive ? 'none' : '4px 4px 20px 0px rgba(33, 33, 33, 0.1)')};
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
	padding: 0;
	&:last-child {
		margin: 0;
	}
`;

export default MoreMoney;
