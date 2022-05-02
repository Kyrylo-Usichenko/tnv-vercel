import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';

const DoneTop: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<FeaturesCon>
				<Title>{t('company:doneTitle')}</Title>
			</FeaturesCon>
			<Wrapper>
				<TopWrapper>
					<DotsT src='/images/company/Done/dots-t.svg' loading='lazy' />
					<SquareT />
					<GreyTopBlock>
						<SquareG1 />
						<Content1>
							<Year>{t('company:doneYear')}</Year>
							<List>
								<Item>{t('company:doneBlock1Line1')}</Item>
								<Item>{t('company:doneBlock1Line2')}</Item>
								<Item>{t('company:doneBlock1Line3')}</Item>
							</List>
						</Content1>
					</GreyTopBlock>
					<RedSide>
						<SquareRT />
						<DotsRT src='/images/company/Done/dotsRT.svg' loading='lazy' />
						<img
							src='/images/company/Done/ipad.png'
							srcSet='/images/company/Done/ipad@2x.png 2x'
							alt='ipad'
							loading='lazy'
						/>
						<SquareRB />
						<DotsRB src='/images/company/Done/dotsRB.svg' loading='lazy' />
					</RedSide>
				</TopWrapper>
				<FlexConInfo>
					<FeaturesCon className='h-100'>
						<SquareG2 />
						<SquareG3 />
						<Content2>
							<Year>{t('company:doneYear')}</Year>
							<List>
								<Item>{t('company:doneBlock1Line1')}</Item>
								<Item>{t('company:doneBlock1Line2')}</Item>
								<Item>{t('company:doneBlock1Line3')}</Item>
							</List>
							<DotsG src='/images/company/Done/dotsG.svg' loading='lazy' />
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
		overflow: hidden;
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
	position: relative;

	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 24px;
	}

	@media (min-width: 1280px) {
		margin-right: 54px;
	}

	@media (min-width: 1920px) {
		margin-right: 234px;
	}
`;

const GreyTopBlock = styled.div`
	border-radius: 0 32px 32px 0;
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
	border-radius: 32px;
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

		& > img:nth-child(3) {
			width: 456px;
			height: auto;
		}
	}

	@media (min-width: 1280px) {
		flex: 0 1 574px;

		& > img:nth-child(3) {
			width: 530px;
		}
	}

	@media (min-width: 1440px) {
		flex: 0 1 654px;

		& > img:nth-child(3) {
			width: 497px;
		}
	}

	@media (min-width: 1920px) {
		flex: 0 1 714px;

		& > img:nth-child(3) {
			width: 513px;
		}
	}
`;

const Content1 = styled.div`
	padding: 40px 16px 40px 40px;
	position: relative;
	z-index: 9;

	@media (min-width: 768px) {
		padding: 40px;
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
	position: relative;
	overflow: hidden;
	padding: 40px 40px 66px 0;
	max-width: 500px;

	@media (min-width: 1440px) {
		max-width: 580px;
	}
`;

const Year = styled.div`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 20px;
	line-height: 34px;
	color: #212121;
	margin: 0 0 20px 0;

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
	padding-left: 15px;

	@media (min-width: 768px) {
		padding-left: 12px;
	}
`;

const Item = styled.li`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: #5c5c5c;
	position: relative;
	z-index: 0;
	margin-bottom: 17px;

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

	@media (min-width: 768px) {
		font-size: 16px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

const DotsT = styled.img`
	position: absolute;
	top: -134px;
	left: -225px;
	z-index: -1;

	@media (min-width: 768px) {
		left: -180px;
	}

	@media (min-width: 1024px) {
		left: -30px;
	}

	@media (min-width: 1920px) {
		left: 130px;
	}
`;

const SquareT = styled.div`
	@media (min-width: 768px) {
		position: absolute;
		width: 495.26px;
		height: 495.26px;
		top: -100px;
		right: -300px;
		background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
		opacity: 0.15;
		border-radius: 46.0999px;
		transform: rotate(-45deg);
	}

	@media (min-width: 1024px) {
		right: -250px;
	}

	@media (min-width: 1440px) {
		right: -100px;
	}

	@media (min-width: 1920px) {
		right: 50px;
	}
`;

const SquareG1 = styled.div`
	position: absolute;
	width: 499.06px;
	height: 499.06px;
	top: -230px;
	left: -213px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(210, 210, 210, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 32px;
	transform: rotate(-45deg);

	@media (min-width: 1280px) {
		display: none;
	}
`;

const SquareG2 = styled.div`
	@media (min-width: 1280px) {
		position: absolute;
		width: 499.06px;
		height: 499.06px;
		top: -250px;
		left: -300px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(210, 210, 210, 0.3) 0%,
			rgba(250, 250, 250, 0.3) 100%
		);
		border-radius: 32px;
		transform: rotate(-45deg);
	}
`;

const SquareG3 = styled.div`
	@media (min-width: 1280px) {
		position: absolute;
		width: 384.3px;
		height: 384.3px;
		bottom: -380px;
		right: 600px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(210, 210, 210, 0.3) 0%,
			rgba(250, 250, 250, 0.3) 100%
		);
		border-radius: 32px;
		transform: rotate(-45deg);
	}

	@media (min-width: 1440px) {
		bottom: -350px;
		right: 750px;
	}

	@media (min-width: 1440px) {
		bottom: -350px;
		right: 890px;
	}
`;

const DotsG = styled.img`
	@media (min-width: 1280px) {
		position: absolute;
		bottom: -4px;
		right: -158px;
	}

	@media (min-width: 1440px) {
		right: -84px;
	}

	@media (min-width: 1920px) {
		right: -29px;
	}
`;

const SquareRT = styled.div`
	position: absolute;
	width: 256.72px;
	height: 256.72px;
	top: -47px;
	left: -42px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 29.4908px;
	transform: rotate(-45deg);
	z-index: -1;

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: block;
		width: 229.4px;
		height: 229.4px;
	}

	@media (min-width: 1280px) {
		width: 364.94px;
		height: 364.94px;
	}

	@media (min-width: 1440px) {
		width: 311.96px;
		height: 311.96px;
	}

	@media (min-width: 1920px) {
		width: 319.62px;
		height: 319.62px;
	}
`;

const SquareRB = styled.div`
	position: absolute;
	width: 309.61px;
	height: 309.61px;
	right: -70px;
	bottom: -80px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 34.5844px;
	transform: rotate(-45deg);
	z-index: -1;

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: block;
		width: 331px;
		height: 331px;
	}

	@media (min-width: 1280px) {
		width: 340.37px;
		height: 340.37px;
	}

	@media (min-width: 1440px) {
		width: 309.11px;
		height: 309.11px;
	}

	@media (min-width: 1440px) {
		width: 354.31px;
		height: 354.31px;
	}
`;

const DotsRT = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: block;
		right: 50px;
	}

	@media (min-width: 1440px) {
		right: 0;
	}
`;

const DotsRB = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: -1;

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: block;
		left: 47px;
	}

	@media (min-width: 1440px) {
		left: 0;
	}
`;

export default DoneTop;
