import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Greetings: FC = () => {
	return (
		<Wrapper>
			<FeaturesCon>
				<Title>
					Hi, we're <span className='accent'>Tinvio</span>!
				</Title>
				<SubTitle>We're reimaging how merchants and suppliers transact.</SubTitle>
				<Main>
					<Info>
						<Text>
							Tinvio is built for B2B transactions. It's an app, it's a dashboard, it's a checkout link,
							it's a digital wallet, it's a credit line, it's money in (and out) of your bank, and so much
							more. Tradition meets modern in a delightful chat-led user experience. The best part? We
							make it fast, flexible, and fun. Try it out – we'd love to hear your feedback too!
						</Text>
						<Text>
							Why do we do it? It's painfully frustrating for businesses to transact. It shouldn't be so
							hard. We're minting NFTs on a new blockchain everyday and we're about to colonize Mars, but
							in our supply chains, businesses are still exchanging cold hard cash, writing checks, and
							keying manual bank transfers. We're going to reimagine the status quo, we're going to
							digitize the zillions of these offline receivables and payables. One transaction at a time.
						</Text>
						<Contact>Contact Us</Contact>
					</Info>
					<PhoneWrapper>
						<picture>
							<source
								srcSet='images/company/Greetings/ph-1024.png 1x, images/company/Greetings/ph-1024@2x.png 2x'
								media='(min-width: 1024px)'
							/>
							<source
								srcSet='images/company/Greetings/ph-768.png 1x, images/company/Greetings/ph-768@2x.png 2x'
								media='(min-width: 768px)'
							/>
							<Phone
								src='images/company/Greetings/ph-375.png'
								srcSet='images/company/Greetings/ph-375@2x.png 2x'
								alt='app'
							/>
						</picture>
						{/* <Stars src='images/company/Greetings/stars.svg' alt='' />
						<PhoneTopDots src='images/company/Greetings/phoneTopDots.svg' alt='' />
						<PhoneBotDots src='images/company/Greetings/phoneBotDots.svg' alt='' />
						<PhoneLeftDots src='images/company/Greetings/leftDots.svg' alt='asd' />
						<LeftTopSquare />
						<LeftBotSquare />
						<Square /> */}
					</PhoneWrapper>
				</Main>
			</FeaturesCon>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin: 142px 0 140px 0;

	@media (min-width: 1920px) {
		margin: 152px 0 140px 0;
	}
`;

const Title = styled.h1`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	text-align: center;
	margin: 0 0 16px 0;
	position: relative;

	&::before {
		content: url('images/company/Greetings/dec-375.svg');
		position: absolute;
		top: -16px;
		left: -12px;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/company/Greetings/dec-768.svg');
			top: -25px;
			left: 150px;
		}
	}

	@media (min-width: 1024px) {
		font-size: 48px;
		line-height: 59px;

		&::before {
			left: 235px;
		}
	}

	@media (min-width: 1280px) {
		font-size: 56px;
		line-height: 66px;

		&::before {
			left: 250px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: 335px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 60px;
		line-height: 74px;

		&::before {
			left: 380px;
		}
	}
`;

const SubTitle = styled.h2`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #5c5c5c;
	text-align: center;
	margin: 0 0 28px 0;

	@media (min-width: 768px) {
		margin: 0 0 40px 0;
	}

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 26px;
	}
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		justify-content: space-between;
		flex-direction: row;
		gap: 58px;
	}
`;

const Info = styled.div`
	@media (min-width: 1024px) {
		flex: 0 0 455px;
	}

	@media (min-width: 1280px) {
		flex: 0 0 554px;
	}

	@media (min-width: 1440px) {
		flex: 0 0 684px;
	}

	@media (min-width: 1920px) {
		flex: 0 0 745px;
	}
`;

const Text = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 16px;
	line-height: 23px;
	color: #5c5c5c;
	margin: 0 0 30px 0;

	&:last-of-type {
		margin-bottom: 32px;
	}
`;

const Contact = styled.button`
	border: 1px solid #d2d2d2;
	border-radius: 16px;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: #212121;
	padding: 14px 50px;
	display: block;
	margin: 0 auto 50px auto;
	background: #ffffff;
	cursor: pointer;

	@media (min-width: 1024px) {
		margin: 0;
	}

	@media (min-width: 1920px) {
		font-size: 18.6667px;
		line-height: 23px;
		padding: 16px 55px;
	}
`;

const PhoneWrapper = styled.div`
	position: relative;
`;

const Phone = styled.img`
	@media (min-width: 768px) {
		margin-left: 130px;
	}

	@media (min-width: 1024px) {
		margin-left: 0;
	}
`;

// const Stars = styled.img`
// 	position: absolute;
// 	right: -84px;
// 	top: 140px;
// 	z-index: -1;
// `;
//
// const Square = styled.div`
// 	width: 678.98px;
// 	height: 678.98px;
// 	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
// 	transform: rotate(45deg);
// 	border-radius: 63.2013px;
// 	opacity: 0.15;
// 	position: absolute;
// 	right: -478px;
// 	top: -115px;
// 	z-index: -1;
// `;
//
// const LeftTopSquare = styled.div`
// 	width: 251.35px;
// 	height: 251.35px;
// 	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
// 	transform: rotate(45deg);
// 	border-radius: 23.3968px;
// 	opacity: 0.15;
// 	position: absolute;
// 	left: -1021px;
// 	bottom: 570px;
// 	z-index: -1;
// `;
//
// const LeftBotSquare = styled.div`
// 	width: 460.84px;
// 	height: 460.84px;
// 	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
// 	transform: rotate(45deg);
// 	border-radius: 42.8967px;
// 	opacity: 0.15;
// 	position: absolute;
// 	left: -1134px;
// 	bottom: 87px;
// 	z-index: -2;
// `;
//
// const PhoneTopDots = styled.img`
// 	position: absolute;
// 	right: 88px;
// 	top: 24px;
// 	z-index: -1;
// `;
//
// const PhoneBotDots = styled.img`
// 	position: absolute;
// 	right: -24px;
// 	bottom: -57px;
// 	z-index: -1;
// `;
//
// const PhoneLeftDots = styled.img`
// 	position: absolute;
// 	left: -978px;
// 	bottom: 132px;
// 	z-index: -1;
// `;

export default Greetings;
