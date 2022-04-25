import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Teamvio: FC = () => {
	return (
		<StyledTeamvio>
			<FeaturesCon>
				<TitleDiv>
					<Title>
						Powered by <span className='accent'>Teamvio</span>
					</Title>
				</TitleDiv>
				<Inner1>
					<SquareLeft />
					<SquareRightTop />
					<SquareRightBot />
					<RightDots />
					<LeftDots />
					<Img1
						src='/images/company/Teamvio/1.jpg'
						srcSet='/images/company/Teamvio/1@2x.jpg 2x'
						alt='people'
						loading='lazy'
					/>
					<Img2
						src='/images/company/Teamvio/2.jpg'
						srcSet='/images/company/Teamvio/2@2x.jpg 2x'
						alt='people'
						loading='lazy'
					/>
					<Join>
						<JoinSquareLeft />
						<JoinSquareRight />
						<JoinDots />
						<Text>
							Up for a challenge? <Br /> We're always looking for the best
						</Text>
						<Button>Join Us</Button>
					</Join>
				</Inner1>
				<Inner2>
					<Img3
						src='/images/company/Teamvio/3.jpg'
						srcSet='/images/company/Teamvio/3@2x.jpg 2x'
						alt='people'
						loading='lazy'
					/>
					<Img4
						src='/images/company/Teamvio/4.jpg'
						srcSet='/images/company/Teamvio/4@2x.jpg 2x'
						alt='people'
						loading='lazy'
					/>
				</Inner2>
			</FeaturesCon>
		</StyledTeamvio>
	);
};

const StyledTeamvio = styled.section`
	margin-bottom: 180px;

	@media (min-width: 768px) {
		margin-bottom: 140px;
	}

	@media (min-width: 1024px) {
		margin-bottom: 180px;
	}
`;

const Inner1 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: relative;
	z-index: 1;
	margin-bottom: 16px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 396px 1fr;
		margin-bottom: 24px;
		gap: 24px;
	}

	@media (min-width: 1280px) {
		grid-template-columns: 451px 1fr;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 520px 1fr;
	}

	@media (min-width: 1920px) {
		grid-template-columns: 580px 1fr;
	}
`;

const Inner2 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: relative;
	z-index: 1;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1024px) {
		gap: 24px;
	}
`;

const TitleDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const Title = styled.h3`
	display: inline-block;
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	position: relative;
	margin: 0 0 40px 0;
	text-align: center;

	&:before {
		content: url('/images/company/Teamvio/stars.svg');
		position: absolute;
		left: -30px;
		top: -21px;
	}

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
	}

	@media (min-width: 1024px) {
		font-size: 44px;
		line-height: 54px;
		margin: 0 0 48px 0;
	}

	@media (min-width: 1920px) {
		font-size: 48px;
		line-height: 59px;
	}
`;

const Img = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
	border-radius: 32px;
`;

const Img1 = styled(Img)`
	@media (min-width: 768px) {
		grid-row: 1 / 3;
		height: 507px;
	}

	@media (min-width: 1024px) {
		height: 485px;
	}
`;

const Img2 = styled(Img)`
	@media (min-width: 768px) {
		grid-row: 1 / 2;
		height: 313px;
	}

	@media (min-width: 1024px) {
		height: 347px;
	}
`;

const Img3 = styled(Img)`
	@media (min-width: 768px) {
		height: 344px;
	}

	@media (min-width: 1024px) {
		height: 469px;
	}
`;

const Img4 = styled(Img)`
	@media (min-width: 768px) {
		height: 344px;
	}

	@media (min-width: 1024px) {
		height: 469px;
	}
`;

const Join = styled.div`
	padding: 40px 0;
	background-color: #363636;
	text-align: center;
	border-radius: 32px;
	position: relative;
	z-index: 0;
	overflow: hidden;
	@media (min-width: 768px) {
		grid-column: 2 / 3;
		padding: 32px 0;
	}

	@media (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 32px 24px;
	}
`;

const Text = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	text-align: center;
	margin: 0 0 24px 0;

	@media (min-width: 768px) {
		max-width: 250px;
		margin: 0 auto 16px auto;
		font-size: 20px;
		line-height: 25px;
		text-align: left;
	}

	@media (min-width: 1024px) {
		margin: 0;
	}

	@media (min-width: 1440px) {
		max-width: 310px;
	}

	@media (min-width: 1920px) {
		font-size: 24px;
		line-height: 29px;
		max-width: 390px;
	}
`;

const Br = styled.br`
	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1440px) {
		display: block;
	}
`;

const Button = styled.button`
	border-radius: 18px;
	background-color: #ffffff;
	border: none;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	padding: 14px 0;
	width: 188px;
	color: #212121;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: #ffffffcc;
		box-shadow: 14px 4px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-white);
		box-shadow: 12px 2px 20px 0 var(--shadow-color);
	}

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		padding: 16px 0;
		width: 210px;
	}
`;

const SquareLeft = styled.div`
	position: absolute;
	left: -450px;
	top: -220px;
	z-index: -2;
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
	bottom: -686px;
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
	right: -102px;
	bottom: -81px;
	z-index: -1;
	width: 389.43px;
	height: 294.7px;
	background: url('/images/company/Teamvio/rightDots.svg');
`;

const LeftDots = styled.div`
	position: absolute;
	left: -221px;
	top: 294px;
	width: 389.43px;
	height: 294.7px;
	background: url('/images/company/Teamvio/leftDots.svg');
	z-index: -1;
`;

const JoinSquareLeft = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 267px;
	height: 102px;
	background: url('/images/company/Teamvio/joinSquareLeft.svg') no-repeat;
	z-index: -1;

	@media (min-width: 375px) {
		background: url('/images/company/Teamvio/joinSquare375.svg') no-repeat;
		width: 260px;
		height: 175px;
		left: 0px;
		bottom: 0px;
	}
	@media (min-width: 768px) {
		left: -16px;
		bottom: -17px;
	}
	@media (min-width: 1024px) {
		background: url('/images/company/Teamvio/joinSquareLeft.svg') no-repeat;
		width: 267px;
		height: 102px;
		left: -47px;
		bottom: 0;
	}
`;

const JoinSquareRight = styled.div`
	position: absolute;
	right: 0px;
	top: 0px;
	width: 258px;
	height: 122px;
	background: url('/images/company/Teamvio/joinSquareRight.svg') no-repeat;
	z-index: -1;

	@media (min-width: 375px) {
		display: none;
	}
	@media (min-width: 1024px) {
		display: block;
		width: 258px;
		height: 122px;
		right: -141px;
		top: 0px;
	}
	@media (min-width: 1440px) {
		display: block;
		width: 258px;
		height: 122px;
		right: -14px;
		top: 0px;
	}
	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		padding: 16px 0;
		width: 210px;
	}
`;

const JoinDots = styled.div`
	position: absolute;
	right: 227px;
	bottom: 0px;
	width: 208px;
	height: 35px;
	background: url('/images/company/Teamvio/joinDots.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		background: url('/images/company/Teamvio/joinDots375.svg') no-repeat;
		width: 76px;
		height: 109px;
		right: 0;
		bottom: 0;
	}
	@media (min-width: 1024px) {
		background: url('/images/company/Teamvio/joinDots.svg') no-repeat;
		width: 208px;
		height: 35px;
		right: 88px;
		bottom: 0;
	}
	@media (min-width: 1440px) {
		right: 220px;
	}
	@media (min-width: 1920px) {
		right: 220px;
	}
`;
export default Teamvio;
