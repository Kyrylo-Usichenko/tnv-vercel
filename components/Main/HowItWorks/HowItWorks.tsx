import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const HowItWorks: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Inner>
					<Null>
						<div>
							<Card top='33.99' left='25'>
								<Icon top='-35' left='219' src='images/main/howItWorks/iconFirstCard.png' alt='' />
								<Stars top='-56' left='144' src='images/main/howItWorks/starsFirstCard.png' alt='' />
								<RedLine top='42' left='267' src='images/main/howItWorks/redLineFirst.png' alt='' />
								<Title>Chats</Title>
								<Text width='191.27'>
									Connect to anyone in your supply chain and exchange messages{' '}
								</Text>
							</Card>
							<Card top='204.32' left='269.44'>
								<Icon top='66' left='-19' src='images/main/howItWorks/iconSecondCard.png' alt='' />
								<Stars top='-76' left='185' src='images/main/howItWorks/starsSecondCard.png' alt='' />
								<Title>Orders</Title>
								<Text width='175.11'>Create or confirm purchase orders with tap of a button</Text>
							</Card>
							<Card top='341.88' left='0.87'>
								<Icon top='-34' left='-3' src='images/main/howItWorks/iconThirdCard.png' alt='' />
								<Stars top='-33' left='284' src='images/main/howItWorks/starsThirdCard.png' alt='' />
								<Stars top='-65' left='71' src='images/main/howItWorks/sideStars.png' alt='' />
								<Dots
									rotate='-8deg'
									top='153'
									left='42'
									src='images/main/howItWorks/leftBottomDots.png'
									alt=''
								/>
								<Title>Payments</Title>
								<Text width='175.11'>Send invoices and reconcile payments in one dashboard</Text>
							</Card>
						</div>
					</Null>
					<Info>
						<InfoTitle>Check out how it works</InfoTitle>
						<InfoText>
							It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments
							across your supply chain — all within one dashboard.
						</InfoText>
						<Button>
							<img width='12px' height='14px' src='icons/main/howItWorks/Play.svg' alt='' />
							<ButtonText>Play video</ButtonText>
						</Button>
						<Dots
							rotate='0deg'
							top='303'
							left='397'
							src='images/main/howItWorks/rightBottomDots.png'
							alt=''
						/>
					</Info>
				</Inner>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	height: 662px;
	margin: 159px 0 0 58px;
	background: #f7f7f7;
	z-index: 1;
	transform: skewY(-8deg);
	transform-origin: bottom right;
	border-radius: 50px 0px 0px 50px;
`;
const Inner = styled.div`
	display: flex;
`;
const Null = styled.div`
	transform: skewY(8deg);
	width: 826px;
	height: 495px;
	position: relative;
	top: 64px;
`;
const Info = styled.div`
	transform: skewY(8deg);
	max-width: 574px;
	height: 230px;
	margin-top: 200px;
`;
const InfoTitle = styled.h2`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	padding: 0;
	margin: 0 0 16px 0;
`;
const InfoText = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #5c5c5c;
	padding: 0;
	margin: 0 0 32px 0;
`;

const Button = styled.button`
	width: 220px;
	height: 56px;
	background: #ffffff;
	border-radius: 18px;
	border: none;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
const ButtonText = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #212121;
	margin: 0 0 0 8px;
	padding: 0;
`;

const Card = styled.div<{ top: string; left: string }>`
	position: absolute;
	top: ${({ top }) => `${top}px`};
	left: ${({ left }) => `${left}px`};
	height: 109.36px;
	width: 271.77px;
	background: white;
	border-radius: 19.0256px;
	box-shadow: 4px 7px 20px 0px rgba(33, 33, 33, 0.1);
	transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 20.6111px;
	line-height: 26px;
	display: flex;
	align-items: center;
	color: #212121;
	margin-top: 24px;
	padding: 0;
`;

const Text = styled.p<{ width: string }>`
	max-width: ${({ width }) => `${width}px`};
	padding: 0;
	margin: 10px 0 0 0;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #5c5c5c;
`;

const Icon = styled.img<{ top: string; left: string }>`
	position: absolute;
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
`;

const Stars = styled.img<{ top: string; left: string }>`
	position: absolute;
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
`;

const Dots = styled.img<{ top: string; left: string; rotate: string }>`
	position: absolute;
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
	transform: ${({ rotate }) => `rotate(${rotate})`};
`;

const RedLine = styled.img<{ top: string; left: string }>`
	position: absolute;
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
	transform: rotate(-8deg);
`;
export default HowItWorks;
