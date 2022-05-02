import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';

const Teamvio: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledTeamvio>
			<FeaturesCon>
				<TitleDiv>
					<Title>
						{t('company:teamvioTitle')} <span className='accent'>Teamvio</span>
					</Title>
				</TitleDiv>
				<Inner>
					<Inner1>
						<SquareLeft />
						<SquareRightTop />
						<SquareRightBot />
						<RightDots />
						<LeftDots />
						<Img1 src='/images/company/Teamvio/1@2x.jpg' alt='people' loading='lazy' />
						<MobileImg src='/images/company/Teamvio/2@2x.jpg' alt='people' loading='lazy' />
						<Img3 src='/images/company/Teamvio/3@2x.jpg' alt='people' loading='lazy' />
					</Inner1>
					<Inner2>
						<Img2 src='/images/company/Teamvio/2@2x.jpg' alt='people' loading='lazy' />
						<Join>
							<JoinSquareLeft />
							<JoinSquareRight />
							<JoinDots />
							<Text>{t('company:teamvioText')}</Text>
							<Button href='https://www.linkedin.com/company/tinvio/jobs/' target='_blank'>
								{t('company:teamvioButton')}
							</Button>
						</Join>
						<MobileImg src='/images/company/Teamvio/3@2x.jpg' alt='people' loading='lazy' />
						<Img4 src='/images/company/Teamvio/4@2x.jpg' alt='people' loading='lazy' />
					</Inner2>
				</Inner>
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

const Inner = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		gap: 16px;
	}

	@media (min-width: 1024px) {
		gap: 24px;
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
		flex: 1;
		margin-bottom: 0;
	}

	@media (min-width: 1024px) {
		gap: 24px;
	}
`;

const Inner2 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: relative;
	z-index: 1;

	@media (min-width: 768px) {
		flex: 1;
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
	height: auto;
	object-fit: cover;
	border-radius: 32px;
`;

const Img1 = styled(Img)`
	@media (min-width: 768px) {
		height: 425px;
	}

	@media (min-width: 1024px) {
		height: 477px;
	}

	@media (min-width: 1920px) {
		height: 481px;
	}
`;

const Img2 = styled(Img)`
	display: none;

	@media (min-width: 768px) {
		display: block;
		height: 329px;
	}

	@media (min-width: 1024px) {
		height: 376px;
	}

	@media (min-width: 1280px) {
		height: 395px;
	}

	@media (min-width: 1440px) {
		height: 408px;
	}
`;

const Img3 = styled(Img)`
	display: none;

	@media (min-width: 768px) {
		display: block;
		height: 425px;
	}

	@media (min-width: 1024px) {
		height: 477px;
	}

	@media (min-width: 1920px) {
		height: 481px;
	}
`;

const Img4 = styled(Img)`
	@media (min-width: 768px) {
		height: 329px;
	}

	@media (min-width: 1024px) {
		height: 376px;
	}

	@media (min-width: 1280px) {
		height: 395px;
	}

	@media (min-width: 1440px) {
		height: 408px;
	}
`;

const MobileImg = styled.img`
	display: block;
	width: 100%;
	height: auto;
	object-fit: cover;
	border-radius: 32px;

	@media (min-width: 768px) {
		display: none;
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
		padding: 32px 0;
	}

	@media (min-width: 1280px) {
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
	margin: 0 auto 24px auto;
	max-width: 330px;

	@media (min-width: 768px) {
		max-width: 250px;
		margin: 0 auto 16px auto;
		font-size: 20px;
		line-height: 25px;
		text-align: left;
	}

	@media (min-width: 1280px) {
		margin: 0;
		max-width: 205px;
	}

	@media (min-width: 1440px) {
		max-width: 250px;
	}

	@media (min-width: 1920px) {
		font-size: 24px;
		line-height: 29px;
		max-width: 310px;
	}
`;

const Button = styled.a`
	display: inline-block;
	border-radius: 18px;
	background-color: #ffffff;
	border: none;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	text-decoration: none;
	padding: 14px 50px;
	//width: 188px;
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
		padding: 14px 74px;
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
	background: url('/images/company/Teamvio/joinSquareLeft.png') no-repeat;
	z-index: -1;

	@media (min-width: 375px) {
		background: url('/images/company/Teamvio/joinSquare375.png') no-repeat;
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
		background: url('/images/company/Teamvio/joinSquareLeft.png') no-repeat;
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
	background: url('/images/company/Teamvio/joinSquareRight.png') no-repeat;
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
	background: url('/images/company/Teamvio/joinDots.png') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		background: url('/images/company/Teamvio/joinDots375.png') no-repeat;
		width: 76px;
		height: 109px;
		right: 0;
		bottom: 0;
	}
	@media (min-width: 1024px) {
		background: url('/images/company/Teamvio/joinDots.png') no-repeat;
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
