import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';
import RedButton from '../../common/Buttons/Button';

type ReadyProps = {
	openModal: () => void;
};

const Ready: FC<ReadyProps> = ({ openModal }) => {
	const { t } = useTranslation();

	return (
		<StyledReady>
			<FlexConInfo>
				<FullConDec>
					<DotsL>
						<Image src={'/images/features/ready/ready-dots-l.webp'} alt='Dots' width={374} height={143} />
					</DotsL>
					<DotsR>
						<Image src={'/images/features/ready/ready-dots-r.webp'} alt='Dots' width={298} height={192} />
					</DotsR>
				</FullConDec>
				<FeaturesCon>
					<ReadyCon>
						<ReadyText>{t('features:ctaReady')}</ReadyText>
						<ReadyTitle>{t('features:ctaTitle')}</ReadyTitle>
						<RedButton type='button' onClick={openModal}>
							{t('features:ctaButton')}
						</RedButton>
					</ReadyCon>
				</FeaturesCon>
			</FlexConInfo>
		</StyledReady>
	);
};

const StyledReady = styled.section`
	margin-bottom: 120px;
`;

const FullConDec = styled.div`
	width: 100%;
	height: 100%;
`;

const DotsL = styled.div`
	position: absolute;
	bottom: -80px;
	left: -160px;

	@media (min-width: 768px) {
		left: 0;
		bottom: -70px;
	}

	@media (min-width: 1280px) {
		left: 100px;
		bottom: -50px;
	}

	@media (min-width: 1440px) {
		left: 150px;
	}
`;

const DotsR = styled.div`
	position: absolute;
	top: -10px;
	right: -210px;

	@media (min-width: 768px) {
		top: -40px;
		right: -90px;
	}

	@media (min-width: 1280px) {
		top: 0;
		right: 0px;
	}

	@media (min-width: 1440px) {
		right: 50px;
	}
`;

const FlexConInfo = styled.div`
	position: relative;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: #f7f7f7;
	z-index: 1;
	overflow: hidden;
	padding: 48px 0;

	&::before {
		content: '';
		position: absolute;
		top: -34px;
		left: -190px;
		width: 354.73px;
		height: 354.73px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(255, 255, 255, 0.6) 0%,
			rgba(250, 250, 250, 0.6) 100%
		);
		border-radius: 36.7977px;
		transform: rotate(-45deg);
	}

	&::after {
		content: '';
		position: absolute;
		right: -450px;
		bottom: -270px;
		width: 506.68px;
		height: 506.68px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(255, 255, 255, 0.6) 0%,
			rgba(250, 250, 250, 0.6) 100%
		);
		border-radius: 42.989px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			width: 479.89px;
			height: 479.89px;
			left: -200px;
			top: -70px;
		}

		&::after {
			right: -290px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			left: -50px;
			top: -90px;
		}
	}

	@media (min-width: 1280px) {
		margin-right: 54px;

		&::after {
			right: -130px;
			bottom: -220px;
		}
	}

	@media (min-width: 1920px) {
		margin-right: 234px;

		&::before {
			left: 200px;
		}

		&::after {
			right: -60px;
		}
	}
`;

const ReadyCon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 1280px) {
		margin-left: 27px;
		margin-right: -27px;
	}

	@media (min-width: 1920px) {
		margin-left: 117px;
		margin-right: -117px;
	}
`;

const ReadyTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	text-align: center;
	color: #212121;
	margin: 0 0 24px 0;
	max-width: 343px;

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 38px;
		max-width: 450px;
	}

	@media (min-width: 1280px) {
		font-size: 36px;
		line-height: 42px;
		margin-bottom: 32px;
		max-width: 500px;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 580px;
	}
`;

const ReadyText = styled.p`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	text-align: center;
	text-transform: uppercase;
	color: #5c5c5c;
	margin: 0 0 8px 0;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 22px;
	}

	@media (min-width: 1024px) {
		font-size: 18px;
		line-height: 25px;
	}

	@media (min-width: 1280px) {
		font-size: 20px;
		line-height: 27px;
	}

	@media (min-width: 1920px) {
		font-size: 24px;
		line-height: 33px;
	}
`;

export default Ready;
