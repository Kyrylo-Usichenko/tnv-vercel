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
							<CardTop>
								<CardTopIcon />
								<CardTopStars />
								<RedLine />
								<Title>Chats</Title>
								<Text width='191.27'>
									Connect to anyone in your supply chain and exchange messages{' '}
								</Text>
							</CardTop>
							<CardMiddle>
								<CardMiddleIcon />
								<CardMiddleStars />
								<Title>Orders</Title>
								<RedLine2 />
								<Text width='175.11'>Create or confirm purchase orders with tap of a button</Text>
							</CardMiddle>
							<CardBot>
								<CardBotIcon />
								<CardBotStars />
								<CardBotStars2 />
								<DotsLeft />
								<Title>Payments</Title>
								<Text width='175.11'>Send invoices and reconcile payments in one dashboard</Text>
							</CardBot>
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
						<DotsRight />
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
	@media (max-width: 1024px) {
		margin: 159px 0 0 0;
	}
	@media (max-width: 970px) {
		height: inherit;
		padding-bottom: 40px;
	}
	@media (max-width: 768px) {
		margin: 639px 0 0 0;
	}

	@media (max-width: 425px) {
		margin: 710px 0 0 0;
	}
	@media (max-width: 375px) {
		margin: 395px 0 0 0;
	}
`;
const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 970px) {
		flex-direction: column;
		align-items: center;
	}
`;
const Null = styled.div`
	transform: skewY(8deg);
	width: 826px;
	height: 495px;
	position: relative;
	top: 64px;
	@media (max-width: 1440px) {
		width: 708px;
	}
	@media (max-width: 1280px) {
		width: 636px;
	}
	@media (max-width: 1024px) {
		width: 550px;
	}
	@media (max-width: 970px) {
		order: 1;
	}
`;
const Info = styled.div`
	transform: skewY(8deg);
	max-width: 574px;
	height: 230px;
	margin-top: 200px;
	@media (max-width: 970px) {
		text-align: center;
		margin-top: 100px;
	}
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
	@media (max-width: 1440px) {
		font-size: 36px;
		line-height: 42px;
	}
	@media (max-width: 1024px) {
		font-size: 32px;
		line-height: 38px;
	}
	@media (max-width: 768px) {
		font-size: 28px;
		line-height: 34px;
	}
`;
const InfoText = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #5c5c5c;
	padding: 0;
	max-width: 478px;
	margin: 0 0 32px 0;
	@media (max-width: 1440px) {
		font-size: 16px;
		line-height: 23px;
	}
	@media (max-width: 1280px) {
		max-width: 398px;
	}
	@media (max-width: 1024px) {
		max-width: 356px;
	}
	@media (max-width: 970px) {
		max-width: 429px;
	}
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
	@media (max-width: 970px) {
		margin: 0 auto;
	}
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

const CardTop = styled.div`
	position: relative;
	top: 33.99px;
	left: 25px;
	height: 109.36px;
	width: 271.77px;
	background: white;
	border-radius: 19.0256px;
	box-shadow: 4px 7px 20px 0px rgba(33, 33, 33, 0.1);
	transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 970px) {
		width: 166.16px;
		height: 66.86px;
		left: 110px;
		padding: 0 15px;
	}
`;
const CardMiddle = styled.div`
	position: absolute;
	top: 204.32px;
	left: 269.44px;
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
	@media (max-width: 970px) {
		width: 166.16px;
		height: 66.86px;
		padding: 0 30px;
		top: 147px;
		left: 272px;
	}
`;
const CardBot = styled.div`
	position: absolute;
	top: 341.88px;
	left: 0.87px;
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
	@media (max-width: 970px) {
		width: 166.16px;
		height: 66.86px;
		padding: 0 30px;
		top: 237px;
		left: 91px;
	}
	@media (max-width: 375px) {
		width: 166.16px;
		height: 66.86px;
		padding: 0 30px;
		top: 237px;
		left: 100px;
	}
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
	@media (max-width: 970px) {
		font-size: 12.6018px;
		line-height: 16px;
		margin-top: 15px;
	}
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
	@media (max-width: 970px) {
		margin: 0;
		font-weight: 400;
		font-size: 7.33688px;
	}
`;

const CardTopIcon = styled.div`
	background: url('images/main/howItWorks/iconFirstCard.png');
	width: 92px;
	height: 92px;
	position: absolute;
	left: 219px;
	top: -34px;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	@media (max-width: 970px) {
		left: 145px;
		top: -13px;
		width: 50px;
		height: 50px;
	}
`;
const CardMiddleIcon = styled.div`
	position: absolute;
	width: 91px;
	height: 93px;
	left: -19px;
	bottom: -50px;
	background: url('images/main/howItWorks/iconSecondCard.png');
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;

	@media (max-width: 970px) {
		left: -18px;
		bottom: -26px;
		width: 50px;
		height: 50px;
	}
`;
const CardBotIcon = styled.div`
	position: absolute;
	width: 87px;
	height: 87px;
	background: url('images/main/howItWorks/iconThirdCard.png');
	left: -5px;
	top: -35px;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	@media (max-width: 970px) {
		left: -2px;
		top: -21px;
		width: 50px;
		height: 50px;
	}
`;

const CardTopStars = styled.div`
	position: absolute;
	left: 137px;
	top: -53px;
	width: 56px;
	height: 42px;
	background: url('images/main/howItWorks/starsFirstCard.png');
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	@media (max-width: 970px) {
		left: 75px;
	}
`;

const CardMiddleStars = styled.div`
	position: absolute;
	left: 187px;
	top: -71px;
	width: 80px;
	height: 44px;
	background: url('images/main/howItWorks/starsSecondCard.png') no-repeat;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	@media (max-width: 970px) {
		width: 60px;
		height: 32px;
		left: 100px;
		top: -43px;
	}
`;

const CardBotStars = styled.div`
	position: absolute;
	left: 281px;
	top: -28px;
	width: 50px;
	height: 59px;
	background: url('images/main/howItWorks/starsThirdCard.png') no-repeat;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	@media (max-width: 970px) {
		width: 40px;
		left: 167px;
		top: -25px;
	}
`;

const CardBotStars2 = styled.div`
	position: absolute;
	left: 80px;
	top: -68px;
	width: 51px;
	height: 36px;
	background: url('images/main/howItWorks/sideStars.png') no-repeat;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	@media (max-width: 970px) {
		width: 40px;
		left: 37px;
		top: -44px;
	}
`;

const DotsLeft = styled.div`
	width: 298px;
	height: 225px;
	position: absolute;
	left: 42px;
	top: 153px;
	background: url('images/main/howItWorks/leftBottomDots.png') no-repeat;
	transform: rotate(-8deg);
	background-size: contain;
	z-index: -2;
	@media (max-width: 970px) {
		width: 298px;
		height: 225px;
		left: -292px;
		top: -339px;
	}
`;

const DotsRight = styled.div`
	position: absolute;
	left: 397px;
	top: 303px;
	background: url('images/main/howItWorks/rightBottomDots.png') no-repeat;
	width: 254px;
	height: 192px;
	background-size: contain;
	@media (max-width: 970px) {
		left: 343px;
		top: 527px;
	}
	@media (max-width: 375px) {
		width: 166.16px;
		padding: 0 30px;
		top: 527px;
		left: 215px;
	}
`;

const RedLine = styled.div`
	position: absolute;
	width: 141px;
	height: 91px;
	left: 267px;
	top: 42px;
	background: url('images/main/howItWorks/redLineFirst.png') no-repeat;
	transform: rotate(-8deg);
	background-size: contain;
	@media (max-width: 970px) {
		width: 100px;
		left: 164px;
		top: 18px;
	}
`;
const RedLine2 = styled.div`
	position: absolute;
	width: 141px;
	height: 91px;
	left: -122px;
	top: 55px;
	background: url('images/main/howItWorks/redLineSecond.svg') no-repeat;
	transform: rotate(-8deg);
	background-size: contain;
	@media (max-width: 970px) {
		width: 100px;
		left: -87px;
		top: 29px;
	}
`;
export default HowItWorks;
