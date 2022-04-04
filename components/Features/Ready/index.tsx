import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Ready: FC = () => {
	return (
		<StyledReady>
			<FlexCon>
				<FullCon>
					<FullConDec></FullConDec>
				</FullCon>
				<FlexConInfo>
					<FeaturesCon className='h-100'>
						<ReadyCon>
							<ReadyText>Are you ready?</ReadyText>
							<ReadyTitle>Supercharge your business, the Tinvio way</ReadyTitle>
							<ReadyButton>Get Started</ReadyButton>
						</ReadyCon>
					</FeaturesCon>
				</FlexConInfo>
			</FlexCon>
		</StyledReady>
	);
};

const StyledReady = styled.section`
	margin-bottom: 120px;
`;

const FlexCon = styled.div`
	position: relative;
`;

const FullCon = styled.div`
	position: relative;
	height: 253px;
	max-width: 1686px;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background: #f7f7f7;
	z-index: 1;
	overflow: hidden;

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
		height: 274px;

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
		height: 277px;

		&::before {
			left: -50px;
			top: -90px;
		}
	}

	@media (min-width: 1280px) {
		height: 299px;
		margin-right: 54px;

		&::after {
			right: -130px;
			bottom: -220px;
		}
	}

	@media (min-width: 1920px) {
		height: 333px;

		&::before {
			left: 200px;
		}

		&::after {
			right: -60px;
		}
	}
`;

const FullConDec = styled.div`
	width: 100%;
	height: 100%;

	&::before {
		content: url('images/features/ready/ready-dots-l.svg');
		position: absolute;
		bottom: -80px;
		left: -160px;
	}

	&::after {
		content: url('images/features/ready/ready-dots-r.svg');
		position: absolute;
		top: -10px;
		right: -210px;
	}

	@media (min-width: 768px) {
		&::before {
			left: 0;
			bottom: -70px;
		}

		&::after {
			top: -40px;
			right: -90px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			left: 100px;
			bottom: -50px;
		}

		&::after {
			top: 0;
			right: 0px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: 150px;
		}

		&::after {
			right: 50px;
		}
	}
`;

const FlexConInfo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
`;

const ReadyCon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const ReadyTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	text-align: center;
	color: #212121;
	margin: 0 0 24px 0;

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

const ReadyButton = styled.button`
	width: 188px;
	height: 48px;
	padding: 14px;
	background: #ff474d;
	border: none;
	border-radius: 18px;
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--text-primary-hover);
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-primary);
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
	}

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		padding: 16px 0;
		width: 219px;
		height: 56px;
	}
`;

export default Ready;
