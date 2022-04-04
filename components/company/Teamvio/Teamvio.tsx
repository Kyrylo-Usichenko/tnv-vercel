import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Teamvio: FC = () => {
	return (
		<Container>
			<Inner>
				<SquareLeft />
				<SquareRightTop />
				<SquareRightBot />
				<RightDots />
				<LeftDots />
				<Title>
					Powered by <Span>Teamvio</Span>
				</Title>
				<Content>
					<Line>
						<LeftTop src='images/company/Teamvio/leftTop.png' alt='' />
						<div>
							<RightTop src='images/company/Teamvio/rightTop.png' alt='' />
							<Join>
								<JoinSquareLeft />
								<JoinSquareRight />
								<JoinDots />
								<div>
									<p>Up for a challenge?</p>
									<p>We're always looking for the best.</p>
								</div>
								<Button>Join Us</Button>
							</Join>
						</div>
					</Line>
					<Line>
						<LeftBot src='images/company/Teamvio/leftBot.png' alt='' />
						<RightBot src='images/company/Teamvio/rightBot.png' alt='' />
					</Line>
				</Content>
			</Inner>
		</Container>
	);
};

const Inner = styled.div`
	margin-top: 178px;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
	z-index: 1;
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	color: #212121;
	padding: 0;
	position: relative;
	margin: 0;
	&:before {
		content: '';
		position: absolute;
		left: -39px;
		top: -25px;
		width: 64px;
		height: 64px;
		background: url('images/company/Teamvio/stars.svg');
	}
`;

const Span = styled.span`
	color: #ff474d;
	margin: 0;
	padding: 0;
`;

const LeftTop = styled.img`
	width: 580px;
	height: 493px;
	background-repeat: no-repeat;
	margin: 0 24px 0 0;
	border-radius: 32px;
`;

const RightTop = styled.img`
	width: 709px;
	height: 347px;
	background-repeat: no-repeat;
	object-fit: cover;
	border-radius: 32px;
`;
const LeftBot = styled.img`
	width: 644px;
	height: 469px;
	background-repeat: no-repeat;
	object-fit: cover;
	border-radius: 32px;
`;
const RightBot = styled.img`
	width: 644px;
	height: 469px;
	background-repeat: no-repeat;

	border-radius: 32px;
`;

const Line = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	&:first-child {
		margin: 0 0 24px;
	}
`;

const Join = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 24px 0 0;
	padding: 32px;
	background: #363636;
	border-radius: 32px;
	height: 122px;
	position: relative;
	z-index: 0;
	p {
		padding: 0;
		margin: 0;
		font-family: 'Gilroy';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 29px;
		color: #ffffff;
	}
`;

const Content = styled.div`
	margin-top: 48px;
	z-index: 0;
`;

const Button = styled.a`
	width: 210px;
	height: 56px;
	border-radius: 18px;
	background-color: #ffffff;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #212121;
	cursor: pointer;
`;

const SquareLeft = styled.div`
	position: absolute;
	left: -450px;
	top: -220px;
	z-index: 0;
	width: 724.91px;
	height: 724.91px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);

	opacity: 0.15;
	border-radius: 67.4765px;
	transform: rotate(-45deg);
`;

const SquareRightTop = styled.div`
	position: absolute;
	right: -26px;
	top: 50px;
	z-index: -1;
	width: 412.76px;
	height: 412.76px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	opacity: 0.15;
	border-radius: 38.4214px;
	transform: rotate(-45deg);
`;

const SquareRightBot = styled.div`
	position: absolute;
	right: -300px;
	bottom: -193px;
	z-index: -1;
	width: 724.91px;
	height: 724.91px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	opacity: 0.15;
	border-radius: 67.4765px;
	transform: rotate(-45deg);
`;

const RightDots = styled.div`
	position: absolute;
	right: -105px;
	bottom: 413px;
	z-index: -1;
	width: 389.43px;
	height: 294.7px;
	background: url('images/company/Teamvio/rightDots.svg');
`;

const LeftDots = styled.div`
	position: absolute;
	left: -221px;
	top: 294px;
	z-index: 0;
	width: 389.43px;
	height: 294.7px;
	background: url('images/company/Teamvio/leftDots.svg');
`;

const JoinSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 267px;
	height: 102px;
	background: url('images/company/Teamvio/joinSquareLeft.svg') no-repeat;
	z-index: -1;
`;

const JoinSquareRight = styled.div`
	position: absolute;
	right: 0px;
	top: 0px;
	width: 258px;
	height: 122px;
	background: url('images/company/Teamvio/joinSquareRight.svg') no-repeat;
	z-index: -1;
`;

const JoinDots = styled.div`
	position: absolute;
	right: 227px;
	bottom: 0px;
	width: 208px;
	height: 35px;
	background: url('images/company/Teamvio/joinDots.svg') no-repeat;
	z-index: -1;
`;
export default Teamvio;
