import React, { FC } from 'react';
import styled from 'styled-components';

const DoneBottom: FC = () => {
	return (
		<Wrapper>
			<WrapperCon>
				<Black>
					<BlackLeftSquare />
					<BlackRightSquare />
					<BlackDots />
					<Content>
						<Title>2020</Title>
						<List>
							<Item>Seed funding led by Sequoia, GFC</Item>
							<Item>Launch multi-country localization, digital invoicing and more</Item>
							<Item>Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new businesses</Item>
						</List>
					</Content>
				</Black>
				<RedSide>
					<RedSideSquare />
					<RedSideSquareRight />
					<LeftDots />
					<RightDots />
					<img src='images/company/Done/ipad.png' srcSet='images/company/Done/ipad@2x.png 2x' alt='ipad' />
				</RedSide>
				<RedWrapper>
					<RedWrapperDots />
					<Red>
						<RedLeftSquare />
						<RedRightSquare />
						<RedDots />
						<RedTitle>Dark mode too!</RedTitle>
						<picture>
							<source
								srcSet='images/company/Done/phone-375.png 1x, images/company/Done/phone-375@2x.png 2x'
								media='(min-width: 1440px)'
							/>
							<source
								srcSet='images/company/Done/phone-1024.png 1x, images/company/Done/phone-1024@2x.png 2x'
								media='(min-width: 1024px)'
							/>
							<Phone
								src='images/company/Done/phone-375.png'
								srcSet='images/company/Done/phone-375@2x.png 2x'
								alt='app in phone'
							/>
						</picture>
					</Red>
				</RedWrapper>
				<Grey>
					<GreyLeftSquare />
					<GreyRightSquare />
					<GreyDots />
					<Content>
						<DarkTitle>Q3 2019</DarkTitle>
						<List>
							<DarkItem>
								Our founder Ajay raises pre-seed in Europe. Moves back home to Singapore to start Tinvio
							</DarkItem>
							<DarkItem>Zero to one in team, product, processes. Launch merchant mobile app</DarkItem>
							<DarkItem>Ajay meets our COO Tedo. Expand into Indonesia and more markets </DarkItem>
						</List>
					</Content>
				</Grey>
			</WrapperCon>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-bottom: 180px;

	@media (min-width: 768px) {
		margin-bottom: 140px;
	}

	@media (min-width: 1024px) {
		margin-bottom: 180px;
	}

	@media (min-width: 1920px) {
		display: flex;
		justify-content: flex-end;
	}
`;

const WrapperCon = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
	}

	@media (min-width: 1280px) {
		margin-left: 54px;
	}

	@media (min-width: 1920px) {
		max-width: 1688px;
		width: 100%;
	}
`;

const Black = styled.div`
	background: #363636;
	border-radius: 48px;
	padding: 40px 40px 79px 40px;
	position: relative;
	overflow: hidden;
	z-index: 1;

	@media (min-width: 768px) {
		padding: 40px 40px 77px 40px;
	}

	@media (min-width: 1024px) {
		flex: 0 0 296px;
		padding: 40px 40px 50px 40px;
	}

	@media (min-width: 1280px) {
		flex: 0 0 328px;
		padding: 40px 40px 77px 40px;
	}

	@media (min-width: 1280px) {
		flex: 0 0 382px;
		padding: 40px 40px 56px 40px;
	}

	@media (min-width: 1920px) {
		flex: 0 0 421px;
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
	display: none;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		padding: 16px 0 16px 26px;

		& > img {
			height: 279px;
			width: auto;
		}
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

const RedWrapper = styled.div`
	position: relative;
	z-index: 1;

	@media (min-width: 1024px) {
		flex: 0 0 340px;
		order: -1;
	}

	@media (min-width: 1280px) {
		flex: 0 0 404px;
	}

	@media (min-width: 1920px) {
		flex: 0 0 492px;
	}
`;

const Red = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	text-align: center;
	background: #fb242b;
	border-radius: 48px;
	position: relative;
	overflow: hidden;
	padding-top: 32px;
	z-index: 1;
`;

const Grey = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f7f7f7;
	border-radius: 48px 0 0 48px;
	padding: 40px;
	position: relative;
	overflow: hidden;
	z-index: 1;

	@media (min-width: 768px) {
		align-items: flex-start;
	}

	@media (min-width: 1024px) {
		flex: 1;
		padding: 40px 40px 50px 40px;
	}
`;

const Content = styled.div`
	max-width: 290px;
	margin: 0 auto;

	@media (min-width: 768px) {
		margin: 0;
	}

	@media (min-width: 1440px) {
		max-width: 349px;
	}

	@media (min-width: 1920px) {
		max-width: 381px;
	}
`;

const RedTitle = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	text-align: center;
	color: #ffffff;
	margin: 0 0 16px 0;
`;

const Phone = styled.img`
	margin-left: 25px;
	height: 100%;
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
	color: #ffffff;
	margin: 0 0 20px 0;
	align-self: flex-start;

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: 29px;
	}
`;

const DarkTitle = styled(Title)`
	color: #212121;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const Item = styled.li`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #ffffff;
	position: relative;
	z-index: 0;
	margin: 0 0 22px 0;
	padding-left: 13px;

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

	@media (min-width: 768px) {
		margin: 0 0 17px 0;
	}

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

const DarkItem = styled(Item)`
	color: #5c5c5c;

	&::before {
		left: 0;
		top: 0;
		width: 21.38px;
		height: 21.38px;
		border-radius: 2px;
		transform: rotate(45deg);
		background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #ffffff 100%);
	}
`;

const RedWrapperDots = styled.div`
	position: absolute;
	left: -95px;
	bottom: -155px;
	width: 293.36px;
	height: 222px;
	background: url('images/company/Done/redWrapperDots.svg') no-repeat;
	z-index: -1;
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
	z-index: -1;
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
	z-index: -1;
`;

const RedDots = styled.div`
	position: absolute;
	bottom: -50px;
	right: -80px;
	width: 209.06px;
	height: 158.2px;
	background: url('images/company/Done/redDots.svg') no-repeat;
	z-index: -1;
`;

const BlackLeftSquare = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 229.4px;
	height: 229.4px;
	background: url('images/company/Done/blackSquareLeft.svg') no-repeat;
	z-index: -1;
`;

const BlackRightSquare = styled.div`
	position: absolute;
	bottom: -116px;
	right: -10px;
	width: 235.91px;
	height: 235.91px;
	background: url('images/company/Done/blackSquareRight.svg') no-repeat;
	z-index: -1;
`;

const BlackDots = styled.div`
	position: absolute;
	bottom: -6px;
	right: -80px;
	width: 209.06px;
	height: 158.2px;
	background: url('images/company/Done/blackDots.svg') no-repeat;
	z-index: -1;
`;

const GreyLeftSquare = styled.div`
	position: absolute;
	bottom: -141px;
	left: 0px;
	width: 280.2px;
	height: 280.2px;
	background: url('images/company/Done/greySquareLeft.svg') no-repeat;
	z-index: -1;
`;

const GreyRightSquare = styled.div`
	position: absolute;
	left: 189px;
	top: 0px;
	width: 426px;
	height: 254px;
	background: url('images/company/Done/greySquareRight.svg') no-repeat;
	z-index: -1;
`;

const GreyDots = styled.div`
	position: absolute;
	bottom: -4px;
	left: 368px;
	width: 325px;
	height: 245.94px;
	background: url('images/company/Done/greyDots.svg') no-repeat;
	z-index: -1;
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

export default DoneBottom;
