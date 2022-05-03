import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';
import LightLink from '../../common/Links/LightLink';

const Teamvio: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledTeamvio>
			<FeaturesCon>
				<TitleDiv>
					<Title>
						<TitleDec>
							<Image src='/images/company/Teamvio/stars.svg' alt='Stars' width={67} height={75} />
						</TitleDec>
						{t('company:teamvioTitle')} <span className='accent'>Teamvio</span>
					</Title>
				</TitleDiv>
				<Inner>
					<Inner1>
						<SquareLeft />
						<SquareRightTop />
						<SquareRightBot />
						<RightDots>
							<Image src='/images/company/Teamvio/rightDots.png' alt='Dots' width={389} height={294} />
						</RightDots>
						<LeftDots>
							<Image src='/images/company/Teamvio/leftDots.png' alt='Dots' width={389} height={294} />
						</LeftDots>
						<Img1 src='/images/company/Teamvio/1@2x.jpg' alt='people' loading='lazy' />
						<MobileImg src='/images/company/Teamvio/2@2x.jpg' alt='people' loading='lazy' />
						<Img3 src='/images/company/Teamvio/3@2x.jpg' alt='people' loading='lazy' />
					</Inner1>
					<Inner2>
						<Img2 src='/images/company/Teamvio/2@2x.jpg' alt='people' loading='lazy' />
						<Join>
							<JoinSquareLeft />
							<JoinSquareRight />
							<JoinDots>
								<div>
									<Image
										src='/images/company/Teamvio/joinDots.png'
										alt='Dots'
										layout='fill'
										objectFit='contain'
									/>
								</div>
							</JoinDots>
							<Text>{t('company:teamvioText')}</Text>
							<LightLink
								width={210}
								fSize={18}
								lHeight={22}
								href='https://www.linkedin.com/company/tinvio/jobs/'
								target='_blank'
							>
								{t('company:teamvioButton')}
							</LightLink>
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

const TitleDec = styled.div`
	position: absolute;
	left: -30px;
	top: -27px;
`;

const Img = styled.img`
	display: block;
	width: 100%;
	height: auto;
	object-fit: cover;
	border-radius: 32px;
`;

const Img1 = styled(Img)`
	aspect-ratio: 3 / 3.32;

	@media (min-width: 768px) {
		height: 425px;
		aspect-ratio: auto;
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
	aspect-ratio: 3 / 3.32;

	@media (min-width: 768px) {
		height: 329px;
		aspect-ratio: auto;
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
	aspect-ratio: 3 / 2.74;

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
`;

const LeftDots = styled.div`
	position: absolute;
	left: -221px;
	top: 294px;
	z-index: -1;
`;

const JoinSquareLeft = styled.div`
	position: absolute;
	z-index: -1;
	width: 229px;
	height: 229px;
	border-radius: 26px;
	background-color: #404040;
	transform: rotate(-45deg);
	left: -34px;
	bottom: -91px;

	@media (min-width: 768px) {
		left: -16px;
		bottom: -107px;
	}

	@media (min-width: 1024px) {
		left: -130px;
	}
`;

const JoinSquareRight = styled.div`
	position: absolute;
	right: 0px;
	top: 0px;
	width: 235px;
	height: 235px;
	z-index: -1;
	display: none;
	border-radius: 26px;
	background-color: #404040;
	transform: rotate(-31deg);

	@media (min-width: 1024px) {
		display: block;
		right: -164px;
		top: -61px;
	}

	@media (min-width: 1280px) {
		right: -125px;
	}

	@media (min-width: 1440px) {
		right: -20px;
	}
`;

const JoinDots = styled.div`
	position: absolute;
	width: 76px;
	height: 109px;
	right: 0;
	bottom: 0;
	z-index: -1;

	& > div {
		position: relative;
		height: inherit;
		width: inherit;
	}

	@media (min-width: 1024px) {
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
