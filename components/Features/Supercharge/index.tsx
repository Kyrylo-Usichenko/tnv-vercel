import React, { FC } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';

const Supercharge: FC = () => {
	return (
		<StyledSupercharge>
			<FeaturesCon>
				<SuperchargeTitle>Supercharge your business with Tinvio</SuperchargeTitle>
			</FeaturesCon>
			<FlexCon>
				<FullCon>
					<FullConDec1>
						<FullConApp
							src='images/features/supercharge/app.jpg'
							srcSet='images/features/supercharge/app@2x.jpg 2x'
							alt='app'
						/>
					</FullConDec1>
				</FullCon>
				<FlexConInfo>
					<FeaturesCon className='h-100'>
						<FlexConGrid>
							<Elem>
								<Title>Chats</Title>
								<Text>
									Send messages, invoices, and payment links directly to customers (even if they're
									not on Tinvio)
								</Text>
							</Elem>
							<Elem>
								<Title>Orders</Title>
								<Text>
									Receive, manage, and track all your orders in a format designed to prevent mistakes
								</Text>
							</Elem>
							<Elem>
								<Title>Payments</Title>
								<Text>
									Collect payments and reconcile against invoices, without even checking bank
									statements
								</Text>
							</Elem>
							<Elem>
								<Title>
									And more in one <br /> dashboard...
								</Title>
							</Elem>
						</FlexConGrid>
					</FeaturesCon>
				</FlexConInfo>
			</FlexCon>
		</StyledSupercharge>
	);
};

const StyledSupercharge = styled.section`
	margin-bottom: 24px;
`;

const SuperchargeTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: var(--text-main);
	margin: 0 0 24px 0;
	text-align: center;

	@media (min-width: 768px) {
		text-align: left;
		font-size: 36px;
		line-height: 42px;
		margin-bottom: 32px;
	}

	@media (min-width: 1024px) {
		font-size: 44px;
		line-height: 54px;
	}

	@media (min-width: 1920px) {
		font-size: 48px;
		line-height: 59px;
	}
`;

const FlexCon = styled.div`
	position: relative;
`;

const FullCon = styled.div`
	position: relative;
	height: 889px;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: var(--bg-black);

	&::before {
		content: url('images/features/supercharge/dots.svg');
		position: absolute;
		right: -100px;
		bottom: 280px;
		transform: rotate(90deg);
	}

	&::after {
		content: url('images/features/supercharge/dec-375.svg');
		position: absolute;
		right: 2px;
		bottom: -60px;
	}

	@media (min-width: 768px) {
		height: 653px;

		&::before {
			display: none;
		}

		&::after {
			content: url('images/features/supercharge/dec-768.svg');
			position: absolute;
			right: 0;
			bottom: -85px;
		}
	}

	@media (min-width: 1024px) {
		height: 484px;

		&::before {
			display: block;
			transform: rotate(0);
			right: 360px;
			bottom: -6px;
		}

		&::after {
			content: url('images/features/supercharge/dec-1024.svg');
			position: absolute;
			right: 0;
			bottom: -91px;
		}
	}

	@media (min-width: 1280px) {
		margin-right: 54px;

		&::before {
			right: 480px;
		}

		&::after {
			content: url('images/features/supercharge/dec-1280.svg');
			position: absolute;
			right: -50px;
			bottom: -53px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			right: 550px;
		}
	}

	@media (min-width: 1920px) {
		margin-right: 234px;

		&::before {
			right: 660px;
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

const FlexConGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	row-gap: 53px;
	padding-top: 48px;
	margin-bottom: 36px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 236px);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 131px;
		grid-row-gap: 101px;
		margin-bottom: 0;
		padding-top: 80px;
		padding-left: 27px;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(2, 191px);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 75px;
		grid-row-gap: 56px;
		padding-left: 0;
		padding-top: 96px;
	}

	@media (min-width: 1920px) {
		grid-template-columns: repeat(2, 237px);
		padding-top: 87px;
	}
`;

const Elem = styled.div`
	text-align: center;

	@media (min-width: 768px) {
		&:nth-child(1) {
			grid-area: 1 / 1 / 2 / 2;
		}
		&:nth-child(2) {
			grid-area: 1 / 2 / 2 / 3;
		}
		&:nth-child(3) {
			grid-area: 2 / 1 / 3 / 2;
		}
		&:nth-child(4) {
			grid-area: 3 / 1 / 4 / 2;
		}
	}

	@media (min-width: 1024px) {
		&:nth-child(n) {
			grid-area: initial;
		}
	}
`;

const Title = styled.h3`
	display: inline-block;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 24px;
	line-height: 36px;
	color: #ffffff;
	margin: 0 0 8px 0;
	position: relative;
	z-index: 1;
	text-align: center;

	&::before {
		content: url('images/features/supercharge/title-rec.svg');
		position: absolute;
		top: -10px;
		left: -27px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		display: block;
		text-align: left;
	}

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 42px;
	}
`;

const Text = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #fafafa;
	margin: 0;
	text-align: left;

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

const FullConApp = styled.img`
	width: 461.48px;
	height: 304px;
	margin-right: -95px;
	margin-bottom: -1px;

	@media (min-width: 768px) {
		width: 608.73px;
		height: 401px;
		margin-left: 0;
		margin-right: -130px;
	}

	@media (min-width: 1024px) {
		width: auto;
		height: auto;
		margin-right: -182px;
	}

	@media (min-width: 1280px) {
		margin-right: -80px;
	}

	@media (min-width: 1440px) {
		margin-right: -10px;
	}
`;

const FullConDec1 = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	position: relative;
	height: 100%;
	width: 100%;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	overflow: hidden;
	z-index: 1;

	&::before {
		content: url('images/features/supercharge/big-rec.svg');
		position: absolute;
		top: 0;
		left: -400px;
	}

	&::after {
		content: url('images/features/supercharge/min-rec.svg');
		position: absolute;
		right: 0px;
		bottom: 60px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::after {
			left: -30px;
			bottom: -130px;
		}
	}

	@media (min-width: 1024px) {
		align-items: center;

		&::after {
			left: 13px;
			bottom: -330px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			left: -340px;
		}

		&::after {
			left: 97px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: -260px;
		}

		&::after {
			left: 166px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			left: -10px;
		}

		&::after {
			left: 380px;
		}
	}
`;

export default Supercharge;
