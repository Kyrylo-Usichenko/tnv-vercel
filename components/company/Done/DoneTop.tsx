import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const DoneTop: FC = () => {
	return (
		<>
			<FeaturesCon>
				<Title>What we've done</Title>
			</FeaturesCon>
			<Wrapper>
				<TopWrapper>
					<GreyTopBlock>
						{/* <GreySquare />
						<GreySquareBottom />
						<Dots /> */}
						<Content1>
							<Year>2021</Year>
							<List>
								<Item>
									Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more
								</Item>
								<Item>
									Series A funding to build embedded supply chain financing products for our users
								</Item>
								<Item>
									Expand into new verticals and markets. Close the year with 200 team members and
									4000+ active businesses across the region
								</Item>
							</List>
						</Content1>
					</GreyTopBlock>
					<RedSide>
						{/* <RedSideSquare />
						<RedSideSquareRight />
						<LeftDots />
						<RightDots /> */}
						<img
							src='images/company/Done/ipad.png'
							srcSet='images/company/Done/ipad@2x.png 2x'
							alt='ipad'
						/>
					</RedSide>
				</TopWrapper>
				<FlexConInfo>
					<FeaturesCon>
						<Content2>
							<Year>2021</Year>
							<List>
								<Item>
									Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more
								</Item>
								<Item>
									Series A funding to build embedded supply chain financing products for our users
								</Item>
								<Item>
									Expand into new verticals and markets. Close the year with 200 team members and
									4000+ active businesses across the region
								</Item>
							</List>
						</Content2>
					</FeaturesCon>
				</FlexConInfo>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.section`
	margin-bottom: 16px;
	position: relative;

	@media (min-width: 1024px) {
		margin-bottom: 48px;
	}

	@media (min-width: 1280px) {
		margin-bottom: 24px;
	}
`;

const FlexConInfo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;
	display: none;

	@media (min-width: 1280px) {
		display: block;
	}
`;

const Title = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
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

const TopWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 24px;
	}

	@media (min-width: 1280px) {
		margin-right: 54px;
	}

	@media (min-width: 1920px) {
		max-width: 1688px;
		width: 100%;
	}
`;

const GreyTopBlock = styled.div`
	border-radius: 0 48px 48px 0;
	background: #f7f7f7;
	display: flex;
	overflow: hidden;
	position: relative;
	z-index: 1;

	@media (min-width: 1024px) {
		flex: 0 1 50%;
		justify-content: flex-end;
	}

	@media (min-width: 1280px) {
		flex: 1;
		justify-content: flex-start;
	}
`;

const RedSide = styled.div`
	background: #fb242b;
	border-radius: 48px;
	padding: 16px 0 16px 16px;
	position: relative;
	z-index: 1;
	overflow: hidden;
	text-align: center;

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px 22px;
		flex: 0 1 50%;

		& > img {
			width: 456px;
			height: auto;
		}
	}

	@media (min-width: 1280px) {
		flex: 0 1 574px;

		& > img {
			width: 530px;
		}
	}

	@media (min-width: 1440px) {
		flex: 0 1 654px;

		& > img {
			width: 497px;
		}
	}

	@media (min-width: 1920px) {
		flex: 0 1 714px;

		& > img {
			width: 513px;
		}
	}
`;

const Content1 = styled.div`
	padding: 42px 16px 40px 31px;
	max-width: 375px;
	margin: 0 auto;

	@media (min-width: 768px) {
		padding: 40px;
		max-width: 768px;
	}

	@media (min-width: 1024px) {
		max-width: 500px;
		margin: 0;
	}

	@media (min-width: 1280px) {
		display: none;
	}
`;

const Content2 = styled.div`
	padding: 40px 40px 66px 0;
	max-width: 500px;

	@media (min-width: 1440px) {
		max-width: 580px;
	}
`;

const Year = styled.div`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	color: #212121;
	margin: 0 0 20px -15px;

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		margin: 0 0 29px 0;
	}

	@media (min-width: 1920px) {
		font-size: 36px;
		line-height: 44px;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	@media (min-width: 768px) {
		padding-left: 12px;
	}
`;

const Item = styled.li`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 16px;
	line-height: 23px;
	color: #5c5c5c;
	position: relative;
	z-index: 0;
	margin-bottom: 20px;

	&:last-child {
		margin-bottom: 0;
	}

	&:before {
		content: '';
		position: absolute;
		left: -9px;
		top: 0;
		width: 21.38px;
		height: 21.38px;
		border-radius: 2px;
		transform: rotate(45deg);
		background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #ffffff 100%);
		z-index: -1;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

const GreySquare = styled.div`
	position: absolute;
	top: -230px;
	right: 472px;
	width: 496.06px;
	height: 496.06px;
	transform: rotate(45deg);
	border-radius: 32px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(210, 210, 210, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	z-index: -1;
`;

const GreySquareBottom = styled.div`
	position: absolute;
	top: 397px;
	right: 202px;
	width: 384.3px;
	height: 384.3px;
	transform: rotate(45deg);
	border-radius: 32px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(210, 210, 210, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
`;

const Dots = styled.div`
	position: absolute;
	bottom: 9.22px;
	right: -47px;
	width: 325px;
	height: 31.81px;
	background: url('images/company/Done/greyBlockStars.svg') no-repeat;
`;

const LeftDots = styled.div`
	position: absolute;
	bottom: -72px;
	left: 0px;
	width: 286.6px;
	height: 203.26px;
	background: url('images/company/Done/leftDots.svg') no-repeat;
	z-index: -1;
`;

const RightDots = styled.div`
	position: absolute;
	top: 1px;
	right: -205px;
	width: 297.33px;
	height: 225px;
	background: url('images/company/Done/rightDots.svg') no-repeat;
	z-index: -1;
`;

const RedSideSquare = styled.div`
	position: absolute;
	top: -76px;
	left: -104px;
	width: 319.62px;
	height: 319.62px;
	transform: rotate(45deg);
	border-radius: 32.8178px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	z-index: -1;
`;

const RedSideSquareRight = styled.div`
	position: absolute;
	bottom: -219px;
	right: -136px;
	width: 354.31px;
	height: 354.31px;
	transform: rotate(45deg);
	border-radius: 35.3757px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	z-index: -1;
`;

export default DoneTop;
