import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Contact: FC = () => {
	return (
		<Wrapper className='contact'>
			<FeaturesCon>
				<SquareRight />
				<SquareLeft />
				<DotsLeft />
				<Title>Contact us</Title>
				<Inner>
					<Block>
						<LeftSquareLeft />
						<LeftSquareBottom />
						<LeftDots />
						<Heading>Product Support</Heading>
						<Content>Need help? Live chat with “Team Tinvio” in the app or dashboard</Content>
						<ContactUs>Contact Us</ContactUs>
					</Block>
					<DarkBlock>
						<MiddleSquareLeft />
						<MiddleSquareBottom />
						<MiddleDots />
						<LightHeading>Business & Partnerships</LightHeading>
						<LightContent>Interested in collaborating or partnering with Tinvio?</LightContent>
						<LightContactUs>Contact Us</LightContactUs>
					</DarkBlock>
					<Block>
						<RightSquareLeft />
						<RightSquareBottom />
						<RightDots />
						<Heading>Media Relations</Heading>
						<Content>Working on a story? We're happy to share more about Tinvio</Content>
						<ContactUs>Contact Us</ContactUs>
					</Block>
				</Inner>
			</FeaturesCon>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	z-index: -1;
	margin-bottom: 80px;
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	text-align: center;
	margin: 0 0 40px 0;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
	}

	@media (min-width: 1024px) {
		margin: 0 0 48px 0;
	}

	@media (min-width: 1920px) {
		font-size: 48px;
		line-height: 59px;
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 24px;
	}
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 48px;
	background-color: #f7f7f7;
	position: relative;
	z-index: 0;
	overflow: hidden;
	padding: 48px 0;

	@media (min-width: 1024px) {
		padding: 80px 0;
		flex: 1;
	}
`;

const DarkBlock = styled(Block)`
	background-color: #363636;
`;

const Heading = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	text-align: center;
	color: #212121;
	max-width: 270px;
	margin: 0 0 16px 0;

	@media (min-width: 768px) {
		max-width: 100%;
	}

	@media (min-width: 1024px) {
		max-width: 200px;
	}

	@media (min-width: 1920px) {
		font-size: 32px;
		line-height: 39px;
	}
`;

const LightHeading = styled(Heading)`
	color: #ffffff;
`;

const Content = styled.p`
	max-width: 326px;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #5c5c5c;
	text-align: center;
	max-width: 247px;
	margin: 0 0 32px 0;

	@media (min-width: 768px) {
		max-width: 100%;
	}

	@media (min-width: 1024px) {
		max-width: 230px;
	}

	@media (min-width: 1280px) {
		font-size: 16px;
		line-height: 23px;
		max-width: 260px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 285px;
	}
`;

const LightContent = styled(Content)`
	color: #ffffff;
`;

const ContactUs = styled.button`
	text-decoration: none;
	border: 1px solid #d2d2d2;
	background-color: transparent;
	border-radius: 16px;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: #212121;
	padding: 14px 50px;
	cursor: pointer;
	transition: all 0.3s ease;

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 23px;
		padding: 16px 55px;
	}
`;

const LightContactUs = styled(ContactUs)`
	background-color: #ffffff;
	color: #212121;

	&:hover {
		background-color: #ffffffcc;
		box-shadow: 14px 4px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-white);
		box-shadow: 12px 2px 20px 0 var(--shadow-color);
	}
`;

const SquareRight = styled.div`
	position: absolute;
	right: -187px;
	top: -92px;
	width: 646.76px;
	height: 646.76px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	opacity: 0.15;
	border-radius: 60.2025px;
	transform: rotate(-45deg);
	z-index: -2;
	@media (min-width: 375px) {
		right: 94%;
		top: -200px;
	}
	@media (min-width: 768px) {
		top: -133px;
	}
	@media (min-width: 1024px) {
		top: -115px;
		right: 83%;
	}
	@media (min-width: 1280px) {
		top: -100px;
		right: -36%;
	}
	@media (min-width: 1440px) {
		top: -100px;
		right: -27%;
	}
	@media (min-width: 1920px) {
		top: -115px;
		right: -20%;
	}
`;

const SquareLeft = styled.div`
	position: absolute;
	left: -265px;
	top: 15px;
	width: 377.64px;
	height: 377.64px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	opacity: 0.15;
	border-radius: 35.1517px;
	transform: rotate(-45deg);
	z-index: -1;
	@media (min-width: 375px) {
		top: -67px;
	}
`;

const DotsLeft = styled.div`
	position: absolute;
	left: -178px;
	bottom: -143px;
	width: 377.43px;
	height: 255.35px;
	background: url('images/company/Contact/dotsLeft.svg');
	z-index: -1;
	@media (min-width: 375px) {
		bottom: -169px;
	}
	@media (min-width: 768px) {
		bottom: -169px;
		left: -155px;
	}
	@media (min-width: 1024px) {
		bottom: -169px;
		left: -28px;
	}
	@media (min-width: 1440px) {
		bottom: -169px;
		left: -88px;
	}
	@media (min-width: 1920px) {
		bottom: -169px;
		left: -10%;
	}
`;

const LeftSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 195px;
	height: 280px;
	background: url('images/company/Contact/leftSquareLeft.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		display: none;
	}
	@media (min-width: 768px) {
		display: block;
	}
	@media (min-width: 1024px) {
		display: block;
	}
	@media (min-width: 1440px) {
		left: 0px;
		top: 0px;
	}
`;

const LeftSquareBottom = styled.div`
	position: absolute;
	right: 0px;
	bottom: 0px;
	width: 276px;
	height: 98px;
	background: url('images/company/Contact/leftSquareBot.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		right: -131px;
		transform: rotate(-90deg);
		bottom: 20px;
	}
	@media (min-width: 768px) {
		background: url('images/company/Contact/leftSquareBot768.svg') no-repeat;
		width: 219px;
		height: 221px;
		transform: rotate(0deg);
		right: 0;
		bottom: 0;
	}
	@media (min-width: 1024px) {
		bottom: -129px;
	}
	@media (min-width: 1440px) {
		background: url('images/company/Contact/leftSquareBot1440.svg') no-repeat;

		bottom: -145px;
		right: 44px;
	}
	@media (min-width: 1920px) {
		background: url('images/company/Contact/leftSquareBot1440.svg') no-repeat;

		bottom: -149px;
		right: 74px;
	}
`;

const LeftDots = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 218px;
	height: 164.97px;
	background: url('images/company/Contact/leftDots.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		left: -166px;
	}
	@media (min-width: 768px) {
		left: 31px;
	}
`;

const MiddleSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 181px;
	height: 220px;
	background: url('images/company/Contact/midSquareLeft.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		left: -138px;
		top: 19px;
	}
	@media (min-width: 768px) {
		left: 0;
		top: 0;
		width: 243px;
		height: 247px;
	}
`;

const MiddleSquareBottom = styled.div`
	position: absolute;
	right: -38px;
	bottom: 0px;
	width: 276px;
	height: 98px;
	background: url('images/company/Contact/midSquareRight.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		background: url('images/company/Contact/midSquareRight375.svg') no-repeat;
		right: 0;
		bottom: 0;
		width: 185px;
		height: 194px;
		@media (min-width: 768px) {
			right: -11px;
			bottom: 0px;
			width: 384px;
			height: 118px;
			background: url('images/company/Contact/midSquareRight768.svg') no-repeat;
		}
		@media (min-width: 1024px) {
			right: -124px;
			bottom: 0;
			width: 238px;
			height: 213px;
			background: url('images/company/Contact/midSquareRight1024.svg') no-repeat;
		}
		@media (min-width: 1440px) {
			right: 0;
			bottom: 0;
			background: url('images/company/Contact/midSquareRight1920.svg') no-repeat;
		}
`;

const MiddleDots = styled.div`
	position: absolute;
	right: 0px;
	top: 0px;
	width: 158px;
	height: 149px;
	background: url('images/company/Contact/midDots.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		display: none;
	}
	@media (min-width: 768px) {
		display: block;
		right: 5px;
		top: -54px;
	}
	@media (min-width: 1024px) {
		right: -127px;
		top: 0px;
	}
	@media (min-width: 1440px) {
		right: -33px;
		top: 0px;
	}
`;

const RightSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 151px;
	height: 196px;
	background: url('images/company/Contact/rightSquareLeft.svg') no-repeat;
	z-index: -1;
	@media (min-width: 768px) {
		background: url('images/company/Contact/rightSquareLeft768.svg') no-repeat;
		left: 0;
		bottom: 0;
		width: 289px;
		height: 151px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		left: 0px;
		bottom: 0px;
		width: 151px;
		height: 196px;
		background: url('images/company/Contact/rightSquareLeft.svg') no-repeat;
		z-index: -1;
	}
`;

const RightSquareBottom = styled.div`
	position: absolute;
	right: 0;
	top: 0px;
	width: 220px;
	height: 247px;
	background: url('images/company/Contact/rightSquareRight.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		display: block;
		right: 0px;
		bottom: 0;
	}
	@media (min-width: 768px) {
		background: url('images/company/Contact/rightSquareRight768.svg') no-repeat;

		display: block;
		right: 0px;
		bottom: 0;
	}
	@media (min-width: 1024px) {
		background: url('images/company/Contact/rightSquareRight.svg') no-repeat;
		right: -94px;
		bottom: 0;
	}
	@media (min-width: 1440px) {
		background: url('images/company/Contact/rightSquareRight.svg') no-repeat;
		right: -41px;
		bottom: 0;
	}
`;

const RightDots = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 218px;
	height: 164.97px;
	background: url('images/company/Contact/rightDots.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		display: none;
	}
	@media (min-width: 768px) {
		display: block;
	}
`;

export default Contact;
