import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Greetings: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Title>
					Hi, we're <span className='accent'>Tinvio</span>!
				</Title>
				<SubTitle>We're reimaging how merchants and suppliers transact.</SubTitle>
				<Main>
					{/* <Bg /> */}
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
						<Contact>
							<img src='./images/company/Greetings/chat-icon.svg' alt='chat' /> Contact Us
						</Contact>
						<LeftTopSquare />
						<LeftBotSquare />
						<LeftBotSquare2 />
					</Info>
					<PhoneWrapper>
						<Image
							src='/images/company/Greetings/ph-1024.png'
							width={300}
							height={480}
							// layout='responsive'
							objectFit='cover'
						/>
						{/* <picture>
							<source
								srcSet='images/company/Greetings/ph-1024.png 1x, images/company/Greetings/ph-1024@2x.png 2x'
								media='(min-width: 1024px)'
							/>
							<source
								srcSet='images/company/Greetings/ph-768.png 1x, images/company/Greetings/ph-768@2x.png 2x'
								media='(min-width: 768px)'
							/>
							<Phone
								width='398'
								height='658'
								src='images/company/Greetings/ph-375.png'
								srcSet='images/company/Greetings/ph-375@2x.png 2x'
								alt='app'
							/>
						</picture> */}
						<Dec1></Dec1>
						<RSquare />
					</PhoneWrapper>
				</Main>
			</Container>
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
	position: relative;

	@media (min-width: 1024px) {
		justify-content: space-between;
		flex-direction: row;
		gap: 58px;
	}
`;

const Info = styled.div`
	position: relative;
	padding: 48px 0;
	// background: #f7f7f7;
	// border-top-right-radius: 48px;
	// border-bottom-right-radius: 48px;
	// width: 100%;
	flex: 0 0 735px;

	&:before {
		content: url('images/company/Greetings/text-dots.svg');
		position: absolute;
		top: 220px;
		left: -60px;
		z-index: -1;
	}
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: -25vw;
		width: 100vw;
		height: 100%;
		background: #f7f7f7;
		border-top-right-radius: 48px;
		border-bottom-right-radius: 48px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		&:before {
			top: 170px;
			left: -100px;
		}
	}
	@media (min-width: 1024px) {
		// flex: 0 0 455px;

		&:before {
			top: 90px;
			left: -200px;
		}
	}
	@media (max-width: 1280px) {
		flex: 0 0 495px;
		&:after {
			right: -34vw;
		}
	}
	@media (max-width: 1023px) {
		order: 2;
		margin-top: 58px;

		&:after {
			left: 0;
			right: -16px;
		}
	}

	@media (min-width: 1440px) {
		// flex: 0 0 684px;

		&:before {
			top: 40px;
		}
	}

	@media (min-width: 1920px) {
		// flex: 0 0 735px;
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
	// line-height: 20px;
	color: #212121;
	padding: 14px 50px;
	display: block;
	margin: 0 auto 50px auto;
	background: #ffffff;
	cursor: pointer;
	display: flex;
	alifn-items: center;

	& img {
		display: inline-flex;
		margin-right: 8px;
		max-width: 16px;
	}

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
	right: 5%;

	&::before {
		content: url('images/company/Greetings/ph-dots-b-375.svg');
		position: absolute;
		bottom: -120px;
		right: -30px;
		z-index: -1;
	}

	&::after {
		content: url('images/company/Greetings/ph-dec-375.svg');
		position: absolute;
		top: 186px;
		right: -33px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/company/Greetings/ph-dots-b-768.svg');
			bottom: -22px;
			right: 67px;
		}

		&::after {
			display: none;
		}
	}

	@media (max-width: 1023px) {
		position: static;
		order: 1;
	}

	@media (min-width: 1024px) {
		position: static;
		&:before {
			bottom: -61px;
			right: -45px;
		}

		&::after {
			display: block;
			content: url('images/company/Greetings/ph-dec-1280.svg');
			top: 110px;
			right: -80px;
		}
	}
	@media (min-width: 1280px) {
		& img {
			width: 300px;
			height: 560px;
		}
	}
`;

// const Phone = styled.img`
// 	@media (min-width: 768px) {
// 		margin-left: 130px;
// 		width: 572px;
// 		height: 760.5px;
// 	}

// 	@media (min-width: 1024px) {
// 		display: block;
// 		width: 100%;
// 		height: auto;
// 		margin-left: 0;
// 	}
// `;

const Dec1 = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	&::before {
		content: url('images/company/Greetings/ph-dots-t.svg');
		position: absolute;
		top: 60px;
		left: -209px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			top: -10px;
			left: 55px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: -4px;
			left: -35px;
		}
	}
`;

const RSquare = styled.div`
	width: 678.98px;
	height: 678.98px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	transform: rotate(45deg);
	border-radius: 63.2013px;
	opacity: 0.15;
	position: absolute;
	top: -60px;
	right: -547px;
	z-index: -1;

	@media (min-width: 768px) {
		right: -347px;
	}

	@media (min-width: 768px) {
		top: -120px;
		right: -459px;
	}
`;

const LeftTopSquare = styled.div`
	position: absolute;
	left: -118px;
	top: -173px;
	width: 251.35px;
	height: 251.35px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	transform: rotate(45deg);
	border-radius: 23.3968px;
	opacity: 0.15;
	z-index: -1;

	@media (min-width: 768px) {
		left: -200px;
		top: -149px;
	}

	@media (min-width: 1024px) {
		left: -240px;
		top: -280px;
	}
`;

const LeftBotSquare = styled.div`
	position: absolute;
	left: -240px;
	top: 100px;
	width: 460.84px;
	height: 460.84px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	transform: rotate(45deg);
	border-radius: 42.8967px;
	opacity: 0.15;
	z-index: -2;

	@media (min-width: 768px) {
		left: -336px;
		top: 42px;
	}

	@media (min-width: 1024px) {
		top: -25px;
	}
`;

const LeftBotSquare2 = styled.div`
	@media (min-width: 768px) {
		position: absolute;
		width: 399.51px;
		height: 399.51px;
		background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
		opacity: 0.15;
		border-radius: 37.1876px;
		transform: rotate(-45deg);
		z-index: -1;
		left: -200px;
		top: 550px;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

export default Greetings;
