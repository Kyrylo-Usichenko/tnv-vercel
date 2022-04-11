import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Sounds: FC = () => {
	return (
		<StyledSounds>
			<FlexCon>
				<FullCon>
					<FullConDec></FullConDec>
				</FullCon>
				<FlexConInfo>
					<FeaturesCon className='h-100'>
						<SoundsCon>
							<SoundsTitle>
								Sounds easy? <Br /> Supply chain transactions don't have to be complicated.
							</SoundsTitle>
							<SoundsButton>Get Started</SoundsButton>
						</SoundsCon>
					</FeaturesCon>
				</FlexConInfo>
			</FlexCon>
		</StyledSounds>
	);
};

const StyledSounds = styled.section`
	margin-bottom: 120px;

	@media (min-width: 768px) {
		margin-bottom: 140px;
	}
`;

const FlexCon = styled.div`
	position: relative;
`;

const FullCon = styled.div`
	position: relative;
	height: 255px;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: var(--bg-black);

	&::before {
		content: url('images/features/sounds/dec-375.svg');
		position: absolute;
		bottom: -40px;
		right: 0;
	}

	@media (min-width: 768px) {
		height: 285px;

		&::before {
			content: url('images/features/sounds/dec-768.svg');
			position: absolute;
			bottom: -60px;
			right: 0;
		}
	}

	@media (min-width: 1024px) {
		height: 196px;

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
		height: 216px;
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
		content: url('images/features/sounds/sounds-rec.webp');
		position: absolute;
		top: 0;
		left: -220px;
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
			left: -60px;
		}

		&::after {
			right: 400px;
		}
	}
	@media (min-width: 1440px) {
		&::before {
			left: 140px;
		}
	}
`;

const FlexConInfo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const SoundsCon = styled.div`
	padding: 48px 0;
	text-align: center;

	@media (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
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
