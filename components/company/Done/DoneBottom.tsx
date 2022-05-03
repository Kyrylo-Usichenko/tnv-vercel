import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const DoneBottom: FC = () => {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<WrapperCon>
				<Black>
					<BlackST />
					<Content>
						<Title>{t('company:doneYear2')}</Title>
						<List>
							<Item>{t('company:doneBlock2Line1')}</Item>
							<Item>{t('company:doneBlock2Line2')}</Item>
							<Item>{t('company:doneBlock2Line3')}</Item>
						</List>
					</Content>
					<BlackDots>
						<Image src='/images/company/Done/black-dots.png' alt='Dots' width={87} height={138} />
					</BlackDots>
					<BlackSB />
				</Black>
				<RedSide>
					<SquareRT />
					<DotsRT>
						<Image src='/images/company/Done/dotsRT.svg' alt='Dots' width={148} height={119} />
					</DotsRT>
					<img
						src='/images/company/Done/ipad.png'
						srcSet='/images/company/Done/ipad@2x.png 2x'
						alt='ipad'
						loading='lazy'
					/>
					<DotsRB>
						<Image src='/images/company/Done/dotsRB.svg' alt='Dots' width={167} height={83} />
					</DotsRB>
					<SquareRB />
				</RedSide>
				<RedWrapper>
					<Red>
						<RedST />
						<RedTitle>{t('company:doneDark')}</RedTitle>
						<picture>
							<source
								srcSet='/images/company/Done/phone-375.png 1x, /images/company/Done/phone-375@2x.png 2x'
								media='(min-width: 1440px)'
							/>
							<source
								srcSet='/images/company/Done/phone-1024.png 1x, /images/company/Done/phone-1024@2x.png 2x'
								media='(min-width: 1024px)'
							/>
							<Phone
								src='/images/company/Done/phone-375.png'
								srcSet='/images/company/Done/phone-375@2x.png 2x'
								alt='app in phone'
								loading='lazy'
							/>
						</picture>
						<RedSB />
						<RedDots>
							<Image src='/images/company/Done/dots-red.png' alt='Dots' width={116} height={78} />
						</RedDots>
					</Red>
				</RedWrapper>
				<Grey>
					<GreyST />
					<Content>
						<DarkTitle>{t('company:doneYear3')}</DarkTitle>
						<List>
							<DarkItem>{t('company:doneBlock3Line1')}</DarkItem>
							<DarkItem>{t('company:doneBlock3Line2')}</DarkItem>
							<DarkItem>{t('company:doneBlock3Line3')}</DarkItem>
						</List>
					</Content>
					<GreySB />
					<GreyDots>
						<Image src='/images/company/Done/dots-grey.png' alt='Dots' width={325} height={242} />
					</GreyDots>
				</Grey>
				<DotsB>
					<Image src='/images/company/Done/dots-b.png' alt='Dots' width={294} height={222} />
				</DotsB>
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
		gap: 24px;
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

	@media (min-width: 1440px) {
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
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #ffffff;
	position: relative;
	margin: 0 0 22px 0;
	padding-left: 13px;
	z-index: 1;

	&:last-child {
		margin: 0;
	}

	&::after {
		content: '';
		position: absolute;
		background: #4a4a4a;
		border-radius: 2px;
		transform: rotate(-45deg);
		left: 2px;
		top: 0px;
		width: 22px;
		height: 22px;
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

const BlackST = styled.div`
	position: absolute;
	width: 229px;
	height: 229px;
	border-radius: 26px;
	transform: rotate(-45deg);
	background-color: #404040;
	top: -65px;
	left: -100px;
	z-index: -1;
`;

const BlackSB = styled.div`
	position: absolute;
	width: 235px;
	height: 235px;
	border-radius: 26px;
	transform: rotate(-31deg);
	background-color: #404040;
	right: -100px;
	bottom: -152px;
	z-index: -2;
`;

const BlackDots = styled.div`
	position: absolute;
	right: -20px;
	bottom: 0;
	z-index: -1;

	@media (min-width: 1920px) {
		right: 0;
	}
`;

const DarkItem = styled(Item)`
	color: #5c5c5c;

	&::after {
		display: none;
	}

	&::before {
		content: '';
		position: absolute;
		left: 3px;
		top: 0;
		width: 21.38px;
		height: 21.38px;
		border-radius: 2px;
		transform: rotate(45deg);
		background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #ffffff 100%);
		z-index: -1;
	}
`;

const DotsB = styled.div`
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

const DotsRT = styled.div`
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

const DotsRB = styled.div`
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

const RedDots = styled.div`
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

const GreyDots = styled.div`
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
