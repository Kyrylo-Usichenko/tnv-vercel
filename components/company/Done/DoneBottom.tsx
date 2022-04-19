import React, { FC } from 'react';
import styled from 'styled-components';

const DoneBottom: FC = () => {
	return (
		<Wrapper>
			<WrapperCon>
				<Black>
					<BlackST src='images/company/Done/blackST.svg' loading='lazy' />
					<Content>
						<Title>2020</Title>
						<List>
							<Item>Seed funding led by Sequoia, GFC</Item>
							<Item>Launch multi-country localization, digital invoicing and more</Item>
							<Item>Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new businesses</Item>
						</List>
					</Content>
					<BlackDots src='images/company/Done/black-dots.svg' loading='lazy' />
					<BlackSB src='images/company/Done/blackSB.svg' loading='lazy' />
				</Black>
				<RedSide>
					<SquareRT />
					<DotsRT src='images/company/Done/dotsRT.svg' loading='lazy' />
					<img
						src='images/company/Done/ipad.png'
						srcSet='images/company/Done/ipad@2x.png 2x'
						alt='ipad'
						loading='lazy'
					/>
					<DotsRB src='images/company/Done/dotsRB.svg' loading='lazy' />
					<SquareRB />
				</RedSide>
				<RedWrapper>
					<Red>
						<RedST />
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
								loading='lazy'
							/>
						</picture>
						<RedSB />
						<RedDots src='images/company/Done/dots-red.svg' loading='lazy' />
					</Red>
				</RedWrapper>
				<Grey>
					<GreyST />
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
					<GreySB />
					<GreyDots src='images/company/Done/dots-grey.svg' loading='lazy' />
				</Grey>
				<DotsB src='images/company/Done/dots-b.svg' loading='lazy' />
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
	position: relative;

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
	border-radius: 32px;
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
	border-radius: 32px;
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

		& > img:nth-child(3) {
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
	border-radius: 32px;
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
	border-radius: 32px 0 0 32px;
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
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #ffffff;
	margin: 0 0 16px 0;
`;

const Phone = styled.img`
	display: block;
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

const BlackST = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

const BlackSB = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: -1;
`;

const BlackDots = styled.img`
	position: absolute;
	right: -44px;
	bottom: 0;
	z-index: -1;

	@media (min-width: 1920px) {
		right: 0;
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

const DotsB = styled.img`
	position: absolute;
	bottom: -70px;
	left: -111px;
	z-index: -1;

	@media (min-width: 768px) {
		bottom: -132px;
		left: -21px;
	}

	@media (min-width: 1280px) {
		left: -82px;
	}

	@media (min-width: 1920px) {
		bottom: -148px;
		left: -92px;
	}
`;

const SquareRT = styled.div`
	@media (min-width: 768px) {
		position: absolute;
		width: 204.56px;
		height: 204.56px;
		top: -47px;
		left: -42px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(255, 255, 255, 0.2) 0%,
			rgba(250, 250, 250, 0.2) 100%
		);
		border-radius: 29.4908px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

const SquareRB = styled.div`
	@media (min-width: 768px) {
		position: absolute;
		width: 210.37px;
		height: 210.37px;
		right: -70px;
		bottom: -80px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(255, 255, 255, 0.2) 0%,
			rgba(250, 250, 250, 0.2) 100%
		);
		border-radius: 34.5844px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

const DotsRT = styled.img`
	display: none;

	@media (min-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		z-index: -1;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

const DotsRB = styled.img`
	display: none;

	@media (min-width: 768px) {
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

const RedST = styled.div`
	position: absolute;
	width: 300px;
	height: 300px;
	left: -220px;
	top: -27px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 23.4988px;
	transform: rotate(-45deg);
	z-index: -1;
`;

const RedSB = styled.div`
	position: absolute;
	width: 205.99px;
	height: 205.99px;
	right: -111px;
	top: 19px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 23.4988px;
	transform: rotate(-45deg);
	z-index: -1;

	@media (min-width: 1280px) {
		right: -160px;
	}

	@media (min-width: 1440px) {
		right: -180px;
	}
`;

const RedDots = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: -1;
`;

const GreyST = styled.div`
	position: absolute;
	width: 312.56px;
	height: 312.56px;
	top: -111px;
	right: -193px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(210, 210, 210, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 20.0414px;
	transform: rotate(-45deg);
	z-index: -1;

	@media (min-width: 1440px) {
		right: 0;
	}

	@media (min-width: 1920px) {
		right: 150px;
	}
`;

const GreySB = styled.div`
	position: absolute;
	width: 280.2px;
	height: 280.2px;
	left: -100px;
	bottom: -182px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(210, 210, 210, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 23.3322px;
	transform: rotate(-45deg);
	z-index: -1;
`;

const GreyDots = styled.img`
	display: none;

	@media (min-width: 1280px) {
		display: block;
		position: absolute;
		right: -240px;
		bottom: 0;
		z-index: -1;
	}

	@media (min-width: 1440px) {
		right: -140px;
	}

	@media (min-width: 1920px) {
		right: 20px;
	}
`;

export default DoneBottom;
