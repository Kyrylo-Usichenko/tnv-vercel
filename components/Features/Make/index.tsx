import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '../../common/Container/Container';

const Make = () => {
	const { t } = useTranslation();

	return (
		<SyledMake>
			<FeaturesCon>
				<MakeCon>
					<MakeInfo>
						<MakeTitle>{t('features:paymentsTitle')}</MakeTitle>
						<MakeText>{t('features:paymentsText')}</MakeText>
					</MakeInfo>
					<First>
						<Second>
							<Stars>
								<div>
									<Image
										src={'/images/features/make/dec.svg'}
										alt='Stars'
										layout='fill'
										objectFit='contain'
									/>
								</div>
							</Stars>
							<LeftImgWrap>
								<LeftImg>
									<Image
										src='/images/features/make/left@2x.png'
										layout='fill'
										objectFit='contain'
										alt='app'
										priority={true}
									/>
								</LeftImg>
							</LeftImgWrap>
							<RightImgWrap>
								<RightImg>
									<Image
										src='/images/features/make/right@2x.png'
										layout='fill'
										objectFit='contain'
										alt='app'
										priority={true}
									/>
								</RightImg>
							</RightImgWrap>
							<Dots>
								<div>
									<Image
										src={'/images/features/make/dots.png'}
										alt='Dots'
										layout='fill'
										objectFit='contain'
									/>
								</div>
							</Dots>
						</Second>
					</First>
				</MakeCon>
			</FeaturesCon>
		</SyledMake>
	);
};

const SyledMake = styled.section`
	position: relative;
	margin-bottom: 200px;

	@media (min-width: 768px) {
		margin-bottom: 250px;
	}

	@media (min-width: 1024px) {
		padding: 288px 0;
		margin-bottom: 80px;
	}
`;

const MakeCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		align-items: flex-end;
	}
`;

const MakeInfo = styled.div``;

const MakeTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	margin: 0 auto 12px auto;
	text-align: center;
	position: relative;
	max-width: 343px;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 384px;
		margin: 0 auto 12px auto;

		&::before {
			content: '';
			width: 569.32px;
			height: 569.32px;
			position: absolute;
			top: -240px;
			right: -500px;
			background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
			opacity: 0.15;
			border-radius: 52.9944px;
			transform: rotate(-45deg);
			z-index: -1;
		}
	}

	@media (min-width: 1024px) {
		font-size: 40px;
		line-height: 49px;
		margin: 0 0 16px 0;
		text-align: left;
		max-width: 344px;

		&::before {
			right: -350px;
			top: -330px;
		}
	}

	@media (min-width: 1280px) {
		max-width: 402px;

		&::before {
			top: -440px;
			right: -540px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 460px;

		&::before {
			top: -440px;
			right: -380px;
		}
	}
`;

const MakeText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: #5c5c5c;
	margin: 0;
	position: relative;
	margin-bottom: 24px;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 23px;
		margin-bottom: 40px;
	}

	@media (min-width: 1024px) {
		max-width: 344px;
	}

	@media (min-width: 1280px) {
		max-width: 440px;
	}

	@media (min-width: 1440px) {
		max-width: 480px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 27px;
	}
`;

const First = styled.div`
	position: static;
	width: 405.53px;
	height: 405.53px;
	background: rgba(251, 36, 43, 0.6);
	border-radius: 52.1364px;
	transform: rotate(-45deg);
	padding: 25px;
	margin-top: 80px;

	@media (min-width: 768px) {
		width: 560.03px;
		height: 560.03px;
		padding: 35px;
		margin-top: 150px;
	}

	@media (min-width: 1024px) {
		position: absolute;
		top: -176px;
		left: -75px;
		margin: 0;
	}

	@media (min-width: 1280px) {
		left: -145px;
	}

	@media (min-width: 1440px) {
		left: -60px;
	}

	@media (min-width: 1920px) {
		left: 14px;
	}
`;

const Second = styled.div`
	width: 355.09px;
	height: 355.09px;
	background: #fb242b;
	border-radius: 52.1364px;
	position: relative;

	@media (min-width: 768px) {
		width: 490.37px;
		height: 490.37px;
	}
`;

const Stars = styled.div`
	position: absolute;
	top: -130px;
	left: 205px;
	transform: rotate(45deg);
	z-index: 1;
	width: 58px;
	height: 56.6px;

	& > div {
		position: relative;
		height: inherit;
		width: inherit;
	}

	@media (min-width: 768px) {
		width: 80px;
		height: 76.6px;
		top: -185px;
		left: 289px;
	}

	@media (min-width: 1024px) {
		top: -137px;
		left: 325px;
	}
`;

const Dots = styled.div`
	position: absolute;
	bottom: 33px;
	left: -20px;
	width: 238px;
	height: 238px;

	& > div {
		position: relative;
		height: inherit;
		width: inherit;
	}

	@media (min-width: 768px) {
		bottom: 33px;
		left: -20px;
		width: 326px;
		height: 326px;
	}

	@media (min-width: 1024px) {
		left: 30px;
		bottom: -36px;
		transform: rotate(45deg);
	}
`;

const LeftImgWrap = styled.div`
	position: absolute;
	transform: rotate(45deg);
	top: -109px;
	left: 12px;
	z-index: 2;

	@media (min-width: 768px) {
		top: -152px;
		left: 33px;
	}

	@media (min-width: 1024px) {
		top: -107px;
		left: 98px;
	}
`;

const LeftImg = styled.div`
	position: relative;
	width: 246px;
	height: 410px;

	@media (min-width: 768px) {
		width: 330px;
		height: 550px;
	}

	@media (min-width: 1024px) {
		width: 294px;
		height: 490px;
	}
`;

const RightImgWrap = styled.div`
	position: absolute;
	transform: rotate(45deg);
	top: 94px;
	right: 43px;
	z-index: 2;

	@media (min-width: 768px) {
		top: 149px;
		right: 64px;
	}

	@media (min-width: 1024px) {
		top: 157px;
		right: 53px;
	}
`;

const RightImg = styled.div`
	position: relative;
	width: 246px;
	height: 410px;

	@media (min-width: 768px) {
		width: 330px;
		height: 550px;
	}

	@media (min-width: 1024px) {
		width: 294px;
		height: 490px;
	}
`;

export default Make;
