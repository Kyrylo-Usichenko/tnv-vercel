import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Sounds: FC = () => {
	return (
		<StyledSounds>
			<FlexConInfo>
				<FullConDec></FullConDec>
				<FeaturesCon>
					<SoundsCon>
						<SoundsTitle>
							Sounds easy? <Br /> Supply chain transactions don't have to be complicated.
						</SoundsTitle>
						<SoundsButton>Get Started</SoundsButton>
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

	&::after {
		content: url('images/features/sounds/sounds-dots-375.svg');
		position: absolute;
		right: -55px;
		bottom: -83px;
	}

	@media (min-width: 768px) {
		&::after {
			right: 0;
			bottom: 0;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			left: -167px;
		}

		&::after {
			content: url('images/features/sounds/sounds-dots.svg');
			right: 150px;
			bottom: -15px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			left: -130px;
		}

		&::after {
			right: 300px;
			bottom: -25px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: -4px;
		}

		&::after {
			right: 400px;
		}
	}
	@media (min-width: 1920px) {
		&::before {
			left: 240px;
		}
	}
`;

const FlexConInfo = styled.div`
	position: relative;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: var(--bg-black);
	padding: 48px 0;

	&::before {
		content: url('images/features/sounds/dec-375.svg');
		position: absolute;
		bottom: -40px;
		right: 0;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/features/sounds/dec-768.svg');
			position: absolute;
			bottom: -60px;
			right: 0;
		}
	}

	@media (min-width: 1024px) {
		padding: 54px 0;

		&::before {
			content: url('images/features/sounds/dec-1024.svg');
			position: absolute;
			bottom: -60px;
			right: 0;
		}
	}

	@media (min-width: 1280px) {
		margin-right: 54px;

		&::before {
			content: url('images/features/sounds/dec-1280.svg');
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

const Br = styled.br`
	@media (min-width: 1024px) {
		display: none;
	}
`;

const SoundsButton = styled.button`
	width: 188px;
	height: 48px;
	padding: 14px;
	background: #ffffff;
	border: none;
	border-radius: 18px;
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
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

	@media (min-width: 1024px) {
		flex: 0 0 188px;
	}

	@media (min-width: 1920px) {
		font-size: 18.6512px;
		line-height: 23px;
		padding: 16px 0;
		width: 219px;
		height: 56px;
		flex: 0 0 219px;
	}
`;

export default Sounds;
