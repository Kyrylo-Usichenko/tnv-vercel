import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Greetings: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Title>
					Hi, we’re <TitleSpan>Tinvio</TitleSpan>!
				</Title>
				<SubTitle>We’re reimaging how merchants and suppliers transact.</SubTitle>
				<Main>
					<div>
						<Text>
							<p>
								[For Ajay to draft] Quisque dictum, leo in tincidunt ornare, elit ante facilisis dui,
								porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat. Vestibulum
								neque mauris, rhoncus non bibendum a, posuere sed metus. Vestibulum ligula urna,
								fermentum non diam molestie, bibendum vestibulum nulla. Nulla facilisi. Fusce commodo
								odio at libero vulputate porta vitae quis nulla. Curabitur feugiat vitae diam in
								eleifend. In diam eros, dapibus sit amet mi a, sodales fringilla purus.
							</p>

							<p>
								Vivamus a risus vulputate, tempus ligula a, ornare nibh. Sed ac leo quis erat ultricies
								tincidunt. Aenean sit amet dolor fringilla ex lobortis pulvinar quis ac purus. Cras
								sodales, quam at lacinia auctor, felis nisl volutpat diam, et varius lorem lorem ut
								massa. Ut non iaculis diam. Vivamus malesuada in nisi ut rutrum. Aliquam ac posuere
								nibh. Pellentesque tristique tristique lectus, vel eleifend magna egestas condimentum.
							</p>
						</Text>
						<Contact>Contact Us</Contact>
					</div>
					<PhoneWrapper>
						<Phone src='images/company/Greetings/phone.svg' alt='' />
						<Stars src='images/company/Greetings/stars.svg' alt='' />
						<PhoneTopDots src='images/company/Greetings/phoneTopDots.svg' alt='' />
						<PhoneBotDots src='images/company/Greetings/phoneBotDots.svg' alt='' />
						<PhoneLeftDots src='images/company/Greetings/leftDots.svg' alt='asd' />
						<LeftTopSquare />
						<LeftBotSquare />
						<Square />
					</PhoneWrapper>
				</Main>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 152px 0 0 0;
	padding: 0;
`;

const Title = styled.h1`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 60px;
	line-height: 74px;
	color: #212121;
	text-align: center;
`;

const TitleSpan = styled.span`
	color: #ff474d;
`;
const SubTitle = styled.h2`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 26px;
	color: #5c5c5c;
	text-align: center;
	margin: 16px 0 0;
	padding: 0;
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Text = styled.p`
	padding: 0;
	margin: 181px 0 0;
	max-width: 769px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #5c5c5c;
	& p {
		padding: 0;
		margin: 0;
		&:first-child {
			margin-bottom: 50px;
		}
	}
`;

const Contact = styled.button`
	margin: 56.33px 0 0;
	border: 1.16667px solid #d2d2d2;
	border-radius: 18px;
	text-decoration: none;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 18.6667px;
	line-height: 23px;
	color: #212121;
	padding: 16.33px 55.85px;
	background: #fff;
	cursor: pointer;
`;

const Phone = styled.img`
	margin: 40px 0 0 144px;
`;

const PhoneWrapper = styled.div`
	position: relative;
`;

const Stars = styled.img`
	position: absolute;
	right: -84px;
	top: 140px;
	z-index: -1;
`;

const Square = styled.div`
	width: 678.98px;
	height: 678.98px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	transform: rotate(45deg);
	border-radius: 63.2013px;
	opacity: 0.15;
	position: absolute;
	right: -478px;
	top: -115px;
	z-index: -1;
`;

const LeftTopSquare = styled.div`
	width: 251.35px;
	height: 251.35px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	transform: rotate(45deg);
	border-radius: 23.3968px;
	opacity: 0.15;
	position: absolute;
	left: -1021px;
	bottom: 570px;
	z-index: -1;
`;

const LeftBotSquare = styled.div`
	width: 460.84px;
	height: 460.84px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	transform: rotate(45deg);
	border-radius: 42.8967px;
	opacity: 0.15;
	position: absolute;
	left: -1134px;
	bottom: 87px;
	z-index: -2;
`;

const PhoneTopDots = styled.img`
	position: absolute;
	right: 88px;
	top: 24px;
	z-index: -1;
`;

const PhoneBotDots = styled.img`
	position: absolute;
	right: -24px;
	bottom: -57px;
	z-index: -1;
`;

const PhoneLeftDots = styled.img`
	position: absolute;
	left: -978px;
	bottom: 132px;
	z-index: -1;
`;

export default Greetings;
