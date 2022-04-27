import React, { FC, RefObject, useRef } from 'react';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import useAnimate from '../../../hooks/useAnimate';

import { FeaturesCon } from '../../common/Container/Container';
import FadeIn from '../../common/FadeIn/FadeIn';

const HowItWorks: FC = () => {
	const { t } = useTranslation();
	const ref = useRef(null) as RefObject<HTMLDivElement>;
	const isShow = useAnimate(ref);

	return (
		<Wrapper>
			<ContainerHow>
				<Inner>
					<Null>
						<div ref={ref}>
							{isShow && (
								<>
									<CardTop>
										<FadeIn duration={200} delay={0}>
											<Box>
												<CardContent>
													<CardTitle>{t('main:howItWorksChats')}</CardTitle>
													<CardText>{t('main:howItWorksChatsText')}</CardText>
												</CardContent>
											</Box>
										</FadeIn>
										<FadeIn duration={200} delay={1000}>
											<CardTopIcon />
										</FadeIn>
										<FadeIn duration={200} delay={2000}>
											<CardTopStars />
										</FadeIn>
										<FadeIn duration={200} delay={200}>
											<RedLine />
										</FadeIn>
										{/*<img*/}
										{/*	src='./images/main/howItWorks/text-chat.svg'*/}
										{/*	alt='Connect to anyone in your supply chain and exchange messages'*/}
										{/*/>*/}
									</CardTop>
									<CardMiddle>
										<FadeIn duration={200} delay={400}>
											<Box>
												<CardContent>
													<CardTitle>{t('main:howItWorksOrders')}</CardTitle>
													<CardText>{t('main:howItWorksOrdersText')}</CardText>
												</CardContent>
											</Box>
										</FadeIn>
										<FadeIn duration={200} delay={1200}>
											<CardMiddleIcon />
										</FadeIn>
										<FadeIn duration={200} delay={1800}>
											<CardMiddleStars />
										</FadeIn>
										<FadeIn duration={200} delay={600}>
											{/* <Title>Orders</Title> */}
											<RedLine2 />
										</FadeIn>
										{/* <Text width='175.11'>Create or confirm purchase orders with tap of a button</Text> */}
									</CardMiddle>
									<CardBot>
										<FadeIn duration={200} delay={800}>
											<Box>
												<CardContent>
													<CardTitle>{t('main:howItWorksPayments')}</CardTitle>
													<CardText>{t('main:howItWorksPaymentsText')}</CardText>
												</CardContent>
											</Box>
										</FadeIn>
										<FadeIn duration={200} delay={1400}>
											<CardBotIcon />
										</FadeIn>
										<FadeIn duration={200} delay={1600}>
											<CardBotStars />
										</FadeIn>
										<FadeIn duration={200} delay={2000}>
											<CardBotStars2 />
										</FadeIn>
										<DotsLeft />
										{/* <Title>Payments</Title>
										<Text width='175.11'>Send invoices and reconcile payments in one dashboard</Text> */}
									</CardBot>
								</>
							)}
						</div>
					</Null>
					<Info>
						<InfoTitle>{t('main:howItWorksTitle')}</InfoTitle>
						<InfoText>{t('main:howItWorksContent')}</InfoText>
						<Button>
							<img width='12px' height='14px' src='icons/main/howItWorks/Play.svg' alt='' />
							<ButtonText>{t('main:howItWorksButton')}</ButtonText>
						</Button>
						<DotsRight />
					</Info>
				</Inner>
			</ContainerHow>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: #f7f7f7;
	z-index: 1;
	transform: skewY(-8deg);
	transform-origin: bottom right;
	border-radius: 50px 0px 0px 50px;
	margin: 395px 0 0 0;
	padding-bottom: 30px;
	height: inherit;
	@media (min-width: 768px) {
		margin: 639px 0 0 0;
		padding-bottom: 110px;
	}
	@media (min-width: 1024px) {
		margin: 195px 0 0 0;
	}
	@media (min-width: 1280px) {
		margin: 200px 0 0 58px;
		padding-bottom: 125px;
	}
	@media (min-width: 1440px) {
		margin: 185px 0 0 58px;
	}
	@media (min-width: 1920px) {
		height: 685px;
		margin: 159px 0 0 58px;
		background: #f7f7f7;
		z-index: 1;
		transform: skewY(-8deg);
		transform-origin: bottom right;
		border-radius: 50px 0px 0px 50px;
	}
`;
const ContainerHow = styled(FeaturesCon)`
	top: 33px;
`;
const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 1024px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;
const Null = styled.div`
	transform: skewY(8deg);
	width: 550px;
	height: 495px;
	position: relative;
	top: 64px;
	order: 1;

	@media (min-width: 1024px) {
		order: 0;
	}
	@media (min-width: 1280px) {
		width: 636px;
	}
	@media (min-width: 1440px) {
		width: 708px;
	}

	@media (min-width: 1920px) {
		transform: skewY(8deg);
		width: 826px;
		height: 495px;
		position: relative;
		top: 64px;
	}
`;
const Info = styled.div`
	transform: skewY(8deg);
	max-width: 574px;
	height: 230px;
	text-align: center;
	margin-top: 100px;
	@media (min-width: 1024px) {
		text-align: left;
		margin-top: 200px;
	}
`;
const InfoTitle = styled.h2`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	color: #212121;
	padding: 0;
	margin: 0 0 16px 0;
	white-space: nowrap;
	font-size: 28px;
	line-height: 34px;
	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 38px;
	}
	@media (min-width: 1280px) {
		font-size: 36px;
		line-height: 42px;
	}
	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
	}
`;
const InfoText = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	color: #5c5c5c;
	padding: 0;
	max-width: 478px;
	margin: 0 0 32px 0;
	font-size: 14px;
	line-height: 23px;

	@media (min-width: 768px) {
		max-width: 429px;
		font-size: 16px;
	}
	@media (min-width: 1024px) {
		max-width: 356px;
	}
	@media (min-width: 1280px) {
		max-width: 398px;
	}
	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 478px;
	}
`;

const Button = styled.button`
	width: 220px;
	height: 56px;
	background: #ffffff;
	border-radius: 18px;
	border: none;
	margin: 0 auto;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	@media (min-width: 1024px) {
		margin: 0;
	}
`;
const ButtonText = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	display: flex;
	align-items: center;
	text-align: center;
	color: #212121;
	margin: 0 0 0 8px;
	padding: 0;
	font-size: 14px;
	line-height: 17px;
	@media (min-width: 768px) {
		font-size: 18px;
		line-height: 22px;
	}
`;

const Box = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: white;
	border-radius: 11.6324px;
	box-shadow: 4px 7px 20px 0px rgba(33, 33, 33, 0.1);
	transform: rotate(8deg);
	@media (min-width: 768px) {
		border-radius: 17.642px;
	}
	@media (min-width: 1280px) {
		border-radius: 19.0256px;
	}
`;

const CardTop = styled.div`
	position: relative;
	top: 34px;
	z-index: 2;
	width: 167px;
	height: 67px;
	left: 110px;
	padding: 0 15px;
	& img {
		position: absolute;
		width: 100%;
		height: 80%;
		top: 10px;
		left: 0;
		object-fit: contain;
		z-index: 1;
	}
	@media (min-width: 768px) {
		width: 252px;
		height: 101px;
		left: 60px;
		padding: 0 15px;
	}
	@media (min-width: 1024px) {
		height: 101px;
		left: 60px;
		padding: 0 15px;
	}
	@media (min-width: 1280px) {
		position: relative;
		top: 34px;
		left: 25px;
		height: 110px;
		width: 272px;
		z-index: 2;
	}
`;
const CardMiddle = styled.div`
	position: absolute;

	// background: white;
	// border-radius: 19.0256px;
	// box-shadow: 4px 7px 20px 0px rgba(33, 33, 33, 0.1);
	// transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);
	z-index: 2;
	// display: flex;
	// flex-direction: column;
	// align-items: center;
	width: 166.16px;
	height: 66.86px;
	padding: 0 30px;
	top: 147px;
	left: 272px;

	& img {
		position: absolute;
		width: 100%;
		height: 80%;
		top: 10px;
		left: 0;
		object-fit: contain;
		z-index: 1;
	}
	@media (min-width: 768px) {
		width: 252px;
		height: 101px;
		top: 191px;
		left: 290px;
	}
	@media (min-width: 1024px) {
		top: 204.32px;
		left: 269.44px;
		height: 109.36px;
		width: 271.77px;
	}
	//@media (max-width: 970px) {
	//	width: 252px;
	//	height: 101px;
	//	top: 191px;
	//	left: 290px;
	//}
	//
	//@media (max-width: 425px) {
	//	width: 166.16px;
	//	height: 66.86px;
	//	padding: 0 30px;
	//	top: 147px;
	//	left: 272px;
	//}
`;
const CardBot = styled.div`
	position: absolute;
	top: 341.88px;
	left: 0.87px;
	height: 109.36px;
	width: 271.77px;
	z-index: -1;

	& img {
		position: absolute;
		object-fit: contain;
		z-index: 1;

		width: 166.16px;
		height: 66.86px;
		padding: 0 30px;
		top: 244px;
		left: 100px;
	}
	@media (min-width: 1px) {
		width: 166.16px;
		height: 66.86px;
		padding: 0 30px;
		top: 244px;
		left: 100px;
	}
	@media (min-width: 768px) {
		padding: 0 30px;
		width: 252px;
		height: 101px;
		top: 293px;
		left: 26px;
	}

	@media (min-width: 1024px) {
		position: absolute;
		top: 341.88px;
		left: 0.87px;
		height: 109.36px;
		width: 271.77px;
		z-index: -1;
		padding: 0;
	}
`;

const CardTopIcon = styled.div`
	background: url('/images/main/howItWorks/iconFirstCard.png');
	position: absolute;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: cover;
	left: 145px;
	top: -13px;
	width: 50px;
	height: 50px;

	@media (min-width: 768px) {
		left: 224px;
		top: -2px;
		width: 70px;
		height: 70px;
	}
	@media (min-width: 1024px) {
		background: url('/images/main/howItWorks/iconFirstCard.png');
		width: 92px;
		height: 92px;
		position: absolute;
		left: 219px;
		top: -34px;
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
		background-size: cover;
	}
	//@media (max-width: 970px) {
	//	left: 224px;
	//	top: -2px;
	//	width: 70px;
	//	height: 70px;
	//}
	//
	//@media (max-width: 425px) {
	//	left: 145px;
	//	top: -13px;
	//	width: 50px;
	//	height: 50px;
	//}
`;
const CardMiddleIcon = styled.div`
	position: absolute;
	background: url('/images/main/howItWorks/iconSecondCard.svg');
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: cover;
	left: -18px;
	bottom: -26px;
	width: 50px;
	height: 50px;
	@media (min-width: 768px) {
		left: -18px;
		bottom: -15px;
		width: 68px;
		height: 66px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		width: 91px;
		height: 93px;
		left: -19px;
		bottom: -45px;
		background: url('/images/main/howItWorks/iconSecondCard.svg');
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
		background-size: cover;
	}
`;
const CardBotIcon = styled.div`
	position: absolute;
	background: url('/images/main/howItWorks/iconThirdCard.png');
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	left: -2px;
	top: -21px;
	width: 50px;
	height: 50px;
	@media (min-width: 1px) {
		left: -2px;
		top: -21px;
		width: 50px;
		height: 50px;
	}
	@media (min-width: 768px) {
		left: -2px;
		top: -39px;
		width: 70px;
		height: 70px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		width: 87px;
		height: 87px;
		background: url('/images/main/howItWorks/iconThirdCard.png');
		left: -5px;
		top: -35px;
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
		background-size: contain;
	}
`;

const CardTopStars = styled.div`
	position: absolute;
	left: 170px;
	top: -53px;
	width: 56px;
	height: 42px;
	background: url('/images/main/howItWorks/starsFirstCard.svg');
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	@media (max-width: 1px) {
		left: 75px;
	}
	@media (min-width: 768px) {
		left: 170px;
	}

	@media (min-width: 1024px) {
		position: absolute;
		left: 137px;
		top: -53px;
		width: 56px;
		height: 42px;
		background: url('/images/main/howItWorks/starsFirstCard.svg');
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	}
`;

const CardMiddleStars = styled.div`
	position: absolute;
	background: url('/images/main/howItWorks/starsSecondCard.svg') no-repeat;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: cover;
	width: 85px;
	height: 45px;
	left: 167px;
	top: -49px;
	@media (min-width: 1px) {
		width: 60px;
		height: 32px;
		left: 100px;
		top: -43px;
	}
	@media (min-width: 768px) {
		width: 85px;
		height: 45px;
		left: 167px;
		top: -49px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		left: 187px;
		top: -71px;
		width: 80px;
		height: 44px;
		background: url('/images/main/howItWorks/starsSecondCard.svg') no-repeat;
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
		background-size: cover;
	}
`;

const CardBotStars = styled.div`
	position: absolute;
	height: 59px;
	background: url('/images/main/howItWorks/starsThirdCard.svg') no-repeat;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	width: 60px;
	left: 277px;
	top: 7px;
	@media (min-width: 1px) {
		width: 40px;
		left: 167px;
		top: -9px;
	}
	@media (min-width: 768px) {
		width: 60px;
		left: 277px;
		top: 7px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		left: 281px;
		top: -5px;
		width: 50px;
		height: 59px;
		background: url('/images/main/howItWorks/starsThirdCard.svg') no-repeat;
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
		background-size: contain;
	}
`;

const CardBotStars2 = styled.div`
	position: absolute;
	height: 36px;
	background: url('/images/main/howItWorks/sideStars.svg') no-repeat;
	transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
	background-size: contain;
	width: 70px;
	left: 76px;
	top: -60px;
	@media (min-width: 1px) {
		width: 40px;
		left: 37px;
		top: -44px;
	}
	@media (min-width: 768px) {
		width: 70px;
		left: 76px;
		top: -60px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		left: 80px;
		top: -68px;
		width: 51px;
		height: 36px;
		background: url('/images/main/howItWorks/sideStars.svg') no-repeat;
		transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
		background-size: contain;
	}
`;

const DotsLeft = styled.div`
	position: absolute;
	background: url('/images/main/howItWorks/leftBottomDots.png') no-repeat;
	//transform: rotate(-8deg);
	background-size: contain;
	z-index: -2;
	width: 298px;
	height: 225px;
	left: -292px;
	top: -339px;
	@media (min-width: 1px) {
		width: 298px;
		height: 225px;
		left: -292px;
		top: -339px;
	}
	@media (min-width: 768px) {
		width: 298px;
		height: 225px;
		left: -202px;
		top: -395px;
	}
	@media (min-width: 1024px) {
		width: 298px;
		height: 225px;
		left: -140px;
		top: 123px;
	}
	@media (min-width: 1280px) {
		width: 298px;
		height: 225px;
		position: absolute;
		left: 42px;
		top: 153px;
		background: url('/images/main/howItWorks/leftBottomDots.png') no-repeat;
		//transform: rotate(-8deg);
		background-size: contain;
		z-index: -2;
	}
`;

const DotsRight = styled.div`
	position: absolute;
	left: 397px;
	top: 303px;
	background: url('/images/main/howItWorks/rightBottomDots.png') no-repeat;
	width: 254px;
	height: 192px;
	background-size: contain;
	z-index: -1;

	@media (min-width: 320px) {
		width: 299px;
		height: 226px;
		background-size: cover;
		padding: 0 30px;
		top: 551px;
		left: 227px;
	}
	@media (min-width: 768px) {
		width: 299px;
		height: 226px;
		background-size: cover;
		padding: 0 30px;
		top: 608px;
		left: 446px;
	}
	@media (min-width: 1024px) {
		width: 299px;
		height: 226px;
		background-size: cover;
		padding: 0 30px;
		top: 229px;
		left: 270px;
	}
	@media (min-width: 1280px) {
		width: 299px;
		height: 226px;
		background-size: cover;
		padding: 0 30px;
		top: 229px;
		left: 337px;
	}
	@media (min-width: 1920px) {
		width: 299px;
		height: 226px;
		background-size: cover;
		padding: 0 30px;
		top: 229px;
		left: 391px;
	}
`;

const RedLine = styled.div`
	position: absolute;
	height: 91px;
	background: url('/images/main/howItWorks/redLineFirst.svg') no-repeat;
	// transform: rotate(-8deg);
	background-size: contain;
	width: 100px;
	left: 157px;
	top: 38px;
	@media (min-width: 768px) {
		width: 124px;
		left: 238px;
		top: 58px;
	}
	@media (min-width: 1280px) {
		position: absolute;
		width: 141px;
		height: 91px;
		// left: 267px;
		left: 265px;
		// top: 42px;
		top: 55px;
		background: url('/images/main/howItWorks/redLineFirst.svg') no-repeat;
		// transform: rotate(-8deg);
		background-size: contain;
	}
`;
const RedLine2 = styled.div`
	position: absolute;
	height: 85px;

	background: url('/images/main/howItWorks/redLineSecond.svg') no-repeat;
	background-size: contain;
	width: 100px;
	left: -87px;
	top: 29px;
	@media (min-width: 768px) {
		width: 124px;
		left: -117px;
		top: 12px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		width: 141px;
		height: 85px;
		left: -122px;
		top: 35px;
		background: url('/images/main/howItWorks/redLineSecond.svg') no-repeat;
		background-size: contain;
	}
`;
const CardContent = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px 10px;
	@media (min-width: 768px) {
		padding: 25px 24px;
	}
	@media (min-width: 1280px) {
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 25px 40px;
	}
`;
const CardTitle = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	display: flex;
	align-items: center;
	color: #212121;
	margin: 0;
	padding: 0 0 5px;
	font-size: 14px;
	line-height: 11px;
	@media (min-width: 768px) {
		font-size: 19.1121px;
		line-height: 24px;
	}
	@media (min-width: 1024px) {
		font-family: 'Gilroy';
		font-style: normal;
		font-weight: 700;
		font-size: 20.6111px;
		line-height: 26px;
		display: flex;
		align-items: center;
		color: #212121;
		margin: 0;
		padding: 0 0 5px;
	}
`;

const CardText = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	display: flex;
	align-items: center;
	text-align: center;
	margin: 0;
	padding: 0;
	color: #5c5c5c;
	font-size: 9px;
	line-height: 11px;
	@media (min-width: 768px) {
		font-size: 11px;
		line-height: 13px;
	}
	@media (min-width: 1024px) {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		display: flex;
		align-items: center;
		text-align: center;
		margin: 0;
		padding: 0;
		color: #5c5c5c;
	}
`;

export default HowItWorks;
