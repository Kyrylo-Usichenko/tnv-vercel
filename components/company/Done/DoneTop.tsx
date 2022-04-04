import React, { FC } from 'react';
import styled from 'styled-components';

const DoneTop: FC = () => {
	return (
		<Wrapper>
			<Title>What we’ve done</Title>
			<TopWrapper>
				<GreyTopBlock>
					<GreySquare />
					<GreySquareBottom />
					<Dots />
					<Content>
						<Year>2021</Year>
						<List>
							<Item>
								Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more
							</Item>
							<Item>
								Series A funding to build embedded supply chain financing products for our users
							</Item>
							<Item>
								Expand into new verticals and markets. Close the year with 200 team members and 4000+
								active businesses across the region
							</Item>
						</List>
					</Content>
				</GreyTopBlock>
				<RedSide>
					<RedSideSquare />
					<RedSideSquareRight />
					<LeftDots />
					<RightDots />
					<img width='513px' height='359px' src='images/company/Done/ipad.png' alt='' />
				</RedSide>
			</TopWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 141.42px;
`;
const Title = styled.h2`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	color: #212121;
	margin: 0 0 48px 0;
	padding: 0;
	text-align: center;
`;

const GreyTopBlock = styled.div`
	border-radius: 0 48px 48px 0;
	height: 391px;
	background: #f7f7f7;
	width: 948px;
	display: flex;
	justify-content: flex-end;
	padding: 66px 40px 66px 0;
	overflow: hidden;
	position: relative;
`;

const RedSide = styled.div`
	background: #fb242b;
	width: 714px;
	height: 391px;
	margin-left: 24px;
	border-radius: 48px;
	padding: 16px 100px;
	position: relative;
	z-index: 1;
	overflow: hidden;
`;
const TopWrapper = styled.div`
	display: flex;
`;

const Content = styled.div`
	max-width: 604px;
`;
const Year = styled.div`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	color: #212121;
	margin: 0 0 29px 0;
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Item = styled.li`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #5c5c5c;
	padding: 0 0 21px 15px;
	position: relative;
	z-index: 0;
	&:last-child {
		padding: 0 0 0 15px;
	}
	&:before {
		content: '';
		position: absolute;
		left: 5px;
		top: 0;
		width: 21.38px;
		height: 21.38px;
		border-radius: 2px;
		transform: rotate(45deg);
		background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #ffffff 100%);
		z-index: -1;
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
