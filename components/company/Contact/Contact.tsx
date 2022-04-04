import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Contact: FC = () => {
	return (
		<Container>
			<Wrapper>
				<SquareRight />
				<SquareLeft />
				<DotsLeft />
				<Title>Contact us</Title>
				<Inner>
					<Left>
						<LeftSquareLeft />
						<LeftSquareBottom />
						<LeftDots />
						<Heading>Contact Support</Heading>
						<Content>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</Content>
						<ContactUs>Contact Us</ContactUs>
					</Left>
					<Middle>
						<MiddleSquareLeft />
						<MiddleSquareBottom />
						<MiddleDots />
						<MiddleHeading>Business & Partnerships</MiddleHeading>
						<MiddleContent>
							Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.
						</MiddleContent>
						<MiddleContactUs>Contact Us</MiddleContactUs>
					</Middle>
					<Right>
						<RightSquareLeft />
						<RightSquareBottom />
						<RightDots />
						<Heading>Media Relations</Heading>
						<Content>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</Content>
						<ContactUs>Contact Us</ContactUs>
					</Right>
				</Inner>
			</Wrapper>
		</Container>
	);
};

const Wrapper = styled.div`
	margin-top: 180px;
	position: relative;
	z-index: 1;
	margin-bottom: 80px;
`;

const Left = styled.div`
	border-radius: 48px;
	background: #f7f7f7;
	width: 100%;
	max-width: 422px;
	height: 390px;
	margin-right: 23px;
	padding: 80px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 0;
	overflow: hidden;
`;

const Middle = styled.div`
	border-radius: 48px;
	background: #363636;
	width: 100%;
	max-width: 422px;
	height: 390px;
	margin-right: 23px;
	padding: 80px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 0;
	overflow: hidden;
`;

const Right = styled.div`
	background: #f7f7f7;
	border-radius: 48px;
	width: 100%;
	max-width: 422px;
	height: 390px;
	padding: 80px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 0;
	overflow: hidden;
`;

const Title = styled.p`
	margin: 0 0 48px 0;
	padding: 0;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	color: #212121;
	text-align: center;
`;

const Inner = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

const Heading = styled.p`
	margin: 0;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	text-align: center;
	color: #212121;
	max-width: 184px;
`;

const Content = styled.p`
	margin: 16px 0 32px;
	font-style: normal;
	text-align: center;
	max-width: 326px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;

	color: #5c5c5c;
`;

const ContactUs = styled.a`
	text-decoration: none;
	width: 210px;
	height: 56px;
	border: 1.16667px solid #d2d2d2;
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 18.6667px;
	line-height: 23px;
	text-align: center;
	color: #212121;
	cursor: pointer;
`;

const MiddleContactUs = styled.a`
	text-decoration: none;
	width: 210px;
	height: 56px;
	border: 1.16667px solid #d2d2d2;
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 18.6667px;
	line-height: 23px;
	text-align: center;
	background: #ffffff;
	color: #212121;
	cursor: pointer;
`;

const MiddleHeading = styled.p`
	margin: 0;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	text-align: center;
	color: #ffffff;
	max-width: 184px;
`;

const MiddleContent = styled.p`
	margin: 16px 0 32px;
	font-style: normal;
	text-align: center;
	max-width: 326px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;

	color: #ffffff;
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
	z-index: -1;
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
`;

const DotsLeft = styled.div`
	position: absolute;
	left: -178px;
	bottom: -143px;
	width: 377.43px;
	height: 255.35px;
	background: url('images/company/Contact/dotsLeft.svg');
	z-index: -1;
`;

const LeftSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 195px;
	height: 280px;
	background: url('images/company/Contact/leftSquareLeft.svg') no-repeat;
	z-index: -1;
`;
const LeftSquareBottom = styled.div`
	position: absolute;
	left: 117px;
	bottom: 0px;
	width: 276px;
	height: 98px;
	background: url('images/company/Contact/leftSquareBot.svg') no-repeat;
	z-index: -1;
`;
const LeftDots = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 218px;
	height: 164.97px;
	background: url('images/company/Contact/leftDots.svg') no-repeat;
	z-index: -1;
`;

const MiddleSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 181px;
	height: 220px;
	background: url('images/company/Contact/midSquareLeft.svg') no-repeat;
	z-index: -1;
`;
const MiddleSquareBottom = styled.div`
	position: absolute;
	right: -38px;
	bottom: 0px;
	width: 276px;
	height: 98px;
	background: url('images/company/Contact/midSquareRight.svg') no-repeat;
	z-index: -1;
`;
const MiddleDots = styled.div`
	position: absolute;
	right: 0px;
	top: 0px;
	width: 158px;
	height: 149px;
	background: url('images/company/Contact/midDots.svg') no-repeat;
	z-index: -1;
`;

const RightSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 151px;
	height: 196px;
	background: url('images/company/Contact/rightSquareLeft.svg') no-repeat;
	z-index: -1;
`;

const RightSquareBottom = styled.div`
	position: absolute;
	right: 0;
	top: 0px;
	width: 220px;
	height: 247px;
	background: url('images/company/Contact/rightSquareRight.svg') no-repeat;
	z-index: -1;
`;
const RightDots = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 218px;
	height: 164.97px;
	background: url('images/company/Contact/rightDots.svg') no-repeat;
	z-index: -1;
`;
export default Contact;
