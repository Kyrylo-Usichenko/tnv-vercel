import React, { FC } from 'react';
import styled from 'styled-components';

const DoneBottom: FC = () => {
	return (
		<Wrapper>
			<RedWrapper>
				<RedWrapperDots />
				<Red>
					<RedLeftSquare />
					<RedRightSquare />
					<RedDots />
					<RedTitle>Dark mode too!</RedTitle>
					<Phone src='images/company/Done/phone.png' />
				</Red>
			</RedWrapper>

			<Black>
				<BlackLeftSquare />
				<BlackRightSquare />
				<BlackDots />
				<BlackTitle>2020</BlackTitle>
				<BlackList>
					<BlackItem>Seed funding led by Sequoia, GFC</BlackItem>
					<BlackItem>Launch multi-country localization, digital invoicing and more</BlackItem>
					<BlackItem>Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new businesses</BlackItem>
				</BlackList>
			</Black>
			<Grey>
				<GreyLeftSquare />
				<GreyRightSquare />
				<GreyDots />
				<GreyTitle>Q3 2019</GreyTitle>
				<GreyList>
					<GreyItem>
						Our founder Ajay raises pre-seed in Europe. Moves back home to Singapore to start Tinvio
					</GreyItem>
					<GreyItem>Zero to one in team, product, processes. Launch merchant mobile app</GreyItem>
					<GreyItem>Ajay meets our COO Tedo. Expand into Indonesia and more markets </GreyItem>
				</GreyList>
			</Grey>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 24px;
	display: flex;
	justify-content: flex-end;
`;

const Red = styled.div`
	background: #fb242b;
	border-radius: 48px;
	width: 492px;
	height: 310px;
	margin-right: 24px;
	position: relative;
	overflow: hidden;
`;

const Black = styled.div`
	background: #363636;
	border-radius: 48px;
	width: 421px;
	height: 310px;
	margin-right: 24px;
	padding: 40px;
	position: relative;
	overflow: hidden;
`;

const Grey = styled.div`
	background: #f7f7f7;
	border-radius: 48px 0 0 48px;
	width: 726px;
	height: 310px;
	padding: 40px;
	position: relative;
	overflow: hidden;
`;

const RedTitle = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	text-align: center;
	color: #ffffff;
	padding: 0;
	margin: 32px 0 0 0;
`;

const BlackTitle = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #ffffff;
	padding: 0;
	margin: 0;
`;

const GreyTitle = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #212121;
	padding: 0;
	margin: 0;
`;

const BlackList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 29px 0 0;
`;

const GreyList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	margin: 29px 0 0;
`;

const BlackItem = styled.li`
	max-width: 324px;
	margin: 0 0 19px 0;
	padding: 0 0 0 17px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	color: #ffffff;
	position: relative;
	z-index: 0;
	&:last-child {
		margin: 0;
	}
	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: -6px;
		width: 31px;
		height: 31px;
		background: url('images/company/Done/blackSquare.svg');
		border-radius: 2px;
		z-index: -1;
	}
`;

const GreyItem = styled.li`
	max-width: 383px;
	margin: 0 0 19px 0;
	padding: 0 0 0 17px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 23px;
	color: #5c5c5c;
	position: relative;
	z-index: 0;
	&:last-child {
		margin: 0;
	}
	&:before {
		content: '';
		position: absolute;
		left: 6px;
		top: -1px;
		width: 22px;
		height: 22px;
		background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #ffffff 100%);
		border-radius: 2px;
		transform: rotate(45deg);
		z-index: -1;
	}
`;

const Phone = styled.img`
	text-align: center;
	position: absolute;
	bottom: 0;
	left: 143px;
`;

const RedLeftSquare = styled.div`
	position: absolute;
	bottom: 47px;
	left: -70px;
	width: 300px;
	height: 300px;
	border-radius: 23.5541px;
	transform: rotate(45deg);
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
`;

const RedRightSquare = styled.div`
	position: absolute;
	top: 12px;
	right: -174px;
	width: 205.99px;
	height: 205.99px;
	border-radius: 27.9415px;
	transform: rotate(45deg);
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
`;

const RedDots = styled.div`
	position: absolute;
	bottom: -50px;
	right: -80px;
	width: 209.06px;
	height: 158.2px;
	background: url('images/company/Done/redDots.svg') no-repeat;
`;

const BlackLeftSquare = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 229.4px;
	height: 229.4px;
	background: url('images/company/Done/blackSquareLeft.svg') no-repeat;
`;

const BlackRightSquare = styled.div`
	position: absolute;
	bottom: -116px;
	right: -10px;
	width: 235.91px;
	height: 235.91px;
	background: url('images/company/Done/blackSquareRight.svg') no-repeat;
`;

const BlackDots = styled.div`
	position: absolute;
	bottom: -6px;
	right: -80px;
	width: 209.06px;
	height: 158.2px;
	background: url('images/company/Done/blackDots.svg') no-repeat;
`;

const GreyLeftSquare = styled.div`
	position: absolute;
	bottom: -141px;
	left: 0px;
	width: 280.2px;
	height: 280.2px;
	background: url('images/company/Done/greySquareLeft.svg') no-repeat;
`;

const GreyRightSquare = styled.div`
	position: absolute;
	left: 189px;
	top: 0px;
	width: 426px;
	height: 254px;
	background: url('images/company/Done/greySquareRight.svg') no-repeat;
`;

const GreyDots = styled.div`
	position: absolute;
	bottom: -4px;
	left: 368px;
	width: 325px;
	height: 245.94px;
	background: url('images/company/Done/greyDots.svg') no-repeat;
`;

const RedWrapper = styled.div`
	position: relative;
`;

const RedWrapperDots = styled.div`
	position: absolute;
	left: -95px;
	bottom: -155px;
	width: 293.36px;
	height: 222px;
	background: url('images/company/Done/redWrapperDots.svg') no-repeat;
`;

export default DoneBottom;
