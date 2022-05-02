import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';
import LightButton from '../../common/Buttons/LightButton';

type SoundsProps = {
	openModal: () => void;
};

const Sounds: FC<SoundsProps> = ({ openModal }) => {
	const { t } = useTranslation();

	return (
		<StyledSounds>
			<FlexConInfo>
				<FullConDec>
					<FullConDecDots>
						<Image src={'/images/features/sounds/sounds-dots.png'} width={257} height={105} />
					</FullConDecDots>
				</FullConDec>
				<FeaturesCon>
					<SoundsCon>
						<SoundsTitle>{t('features:separatorText')}</SoundsTitle>
						<SoundsButton type='button' onClick={openModal}>
							{t('features:separatorButton')}
						</SoundsButton>
					</SoundsCon>
				</FeaturesCon>
			</FlexConInfo>
		</StyledSounds>
	);
};

const StyledSounds = styled.section`
	margin-bottom: 120px;

	@media (min-width: 768px) {
		margin-bottom: 140px;
	}
`;

const FullConDec = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;

	&::before {
		content: '';
		background-color: #444444;
		width: 278px;
		height: 278px;
		border-radius: 32px;
		transform: rotate(-45deg);
		position: absolute;
		top: -87px;
		left: -128px;
	}

	@media (min-width: 1024px) {
		&::before {
			left: -167px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			left: -130px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: -4px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			left: 240px;
		}
	}
`;

const FullConDecDots = styled.div`
	position: absolute;
	right: -148px;
	bottom: -15px;

	@media (min-width: 768px) {
		right: -90px;
		bottom: 0;
	}

	@media (min-width: 1024px) {
		right: 150px;
		bottom: -15px;
	}

	@media (min-width: 1280px) {
		right: 300px;
		bottom: -25px;
	}

	@media (min-width: 1440px) {
		right: 350px;
	}

	@media (min-width: 1920px) {
		right: 430px;
	}
`;

const FlexConInfo = styled.div`
	position: relative;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: var(--bg-black);
	padding: 48px 0;

	&::before {
		content: url('/images/features/sounds/dec-375.svg');
		position: absolute;
		bottom: -40px;
		right: 0;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('/images/features/sounds/dec-768.svg');
			position: absolute;
			bottom: -60px;
			right: 0;
		}
	}

	@media (min-width: 1024px) {
		padding: 54px 0;

		&::before {
			content: url('/images/features/sounds/dec-1024.svg');
			position: absolute;
			bottom: -60px;
			right: 0;
		}
	}

	@media (min-width: 1280px) {
		margin-right: 54px;

		&::before {
			content: url('/images/features/sounds/dec-1280.svg');
			position: absolute;
			bottom: -50px;
			right: -50px;
		}
	}

	@media (min-width: 1920px) {
		margin-right: 234px;
	}
`;

const SoundsCon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: left;
	}

	@media (min-width: 1280px) {
		margin-left: 27px;
		margin-right: -27px;
	}

	@media (min-width: 1920px) {
		margin-left: 117px;
		margin-right: -117px;
	}
`;

const SoundsTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	text-align: center;
	color: #ffffff;
	margin: 0 0 24px 0;
	max-width: 343px;

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		max-width: 584px;
		margin: 0 auto 24px auto;
	}

	@media (min-width: 1024px) {
		font-size: 36px;
		line-height: 44px;
		margin: 0;
		max-width: 100%;
		text-align: left;
	}

	@media (min-width: 1024px) {
		max-width: 700px;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 850px;
	}
`;

const SoundsButton = styled(LightButton)`
	@media (min-width: 1024px) {
		flex: 0 0 188px;
	}

	@media (min-width: 1920px) {
		flex: 0 0 219px;
	}
`;

export default Sounds;
