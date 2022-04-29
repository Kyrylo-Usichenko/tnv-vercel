import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';

const Commitments: FC = () => {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<FlexConInfo>
				<SquareRight />
				<SquareLeft />
				<DotsRight />
				<DotsLeft />
				<FeaturesCon>
					<Content>
						<Heading>{t('company:сommitmentsTitle')}</Heading>
						<List>
							<Item>
								<Img src='/images/company/Commitments/pen.svg' loading='lazy' alt='pen' />
								<Title>{t('company:сommitmentsHeading1')}</Title>
								<SubTitle>{t('company:сommitmentsText1')}</SubTitle>
							</Item>
							<Item>
								<Img src='/images/company/Commitments/message.svg' loading='lazy' alt='message' />
								<Title>{t('company:сommitmentsHeading2')}</Title>
								<SubTitle>{t('company:сommitmentsText2')}</SubTitle>
							</Item>
							<Item>
								<Img src='/images/company/Commitments/rocket.svg' loading='lazy' alt='rocket' />
								<Title>{t('company:сommitmentsHeading3')}</Title>
								<SubTitle>{t('company:сommitmentsText3')}</SubTitle>
							</Item>
						</List>
					</Content>
				</FeaturesCon>
			</FlexConInfo>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	z-index: 3;
	margin-bottom: 180px;
	overflow: hidden;
`;

const FlexConInfo = styled.div`
	position: relative;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: var(--bg-black);
	overflow: hidden;
	z-index: 0;
	padding: 48px 0;

	@media (min-width: 1280px) {
		margin-right: 54px;
	}

	@media (min-width: 1920px) {
		margin-right: 234px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 1280px) {
		margin-left: 27px;
		margin-right: -27px;
	}

	@media (min-width: 1920px) {
		margin-left: 117px;
		margin-right: -117px;
	}
`;

const Heading = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	color: #ffffff;
	margin: 0 0 40px 0;
	text-align: center;
	max-width: 200px;

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		margin: 0 0 32px 0;
		max-width: 350px;
	}

	@media (min-width: 1024px) {
		font-size: 36px;
		line-height: 44px;
		max-width: unset;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
	}
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	z-index: 2;

	@media (min-width: 768px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-around;
		align-items: baseline;
	}
`;

const Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 32px;

	&:last-child {
		margin-bottom: 0;
	}

	@media (min-width: 768px) {
		margin: 0;
	}
`;

const Img = styled.img`
	margin-bottom: 24px;
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
	text-align: center;
	color: #ffffff;
	text-align: center;
	margin: 0 0 4px 0;

	@media (min-width: 1024px) {
		font-size: 24px;
		line-height: 29px;
	}

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 34px;
	}
`;

const SubTitle = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #d2d2d2;
	text-align: center;
	margin: 0;
	max-width: 150px;

	@media (min-width: 1024px) {
		font-size: 16px;
		line-height: 23px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

const SquareRight = styled.div`
	position: absolute;
	right: 20px;
	top: 0;
	width: 770px;
	height: 356px;
	background: url('/images/company/Commitments/squareRight.png') no-repeat;
	z-index: 0;
	@media (min-width: 375px) {
		display: none;
	}
	@media (min-width: 1024px) {
		display: block;
		right: -637px;
	}
	@media (min-width: 1024px) {
		right: -403px;
	}
	@media (min-width: 1440px) {
		right: -299px;
	}
	@media (min-width: 1920px) {
		right: 20px;
		top: 0;
	}
`;

const SquareLeft = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 338px;
	height: 289px;
	background: url('/images/company/Commitments/squareLeft.png') no-repeat;
	z-index: 0;
	@media (min-width: 768px) {
		left: 0;
	}
	@media (min-width: 1024px) {
		left: -46px;
	}
	@media (min-width: 1440px) {
		left: 0px;
	}
`;

const DotsRight = styled.div`
	position: absolute;
	right: 340px;
	top: 0;
	width: 338px;
	height: 289px;
	background: url('/images/company/Commitments/dotsRight.png') no-repeat;
	z-index: 0;
	@media (min-width: 375px) {
		display: none;
	}
	@media (min-width: 1024px) {
		display: block;
		right: -140px;
	}
	@media (min-width: 1440px) {
		right: 217px;
	}
	@media (min-width: 1920px) {
		right: 38%;
	}
`;

const DotsLeft = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0;
	width: 215px;
	height: 162.7px;
	background: url('/images/company/Commitments/dotsLeft.png') no-repeat;
	z-index: 0;
	@media (min-width: 375px) {
		bottom: 170px;
		background: url('/images/company/Commitments/dotsLeft375.png') no-repeat;
		left: 0;
	}
	@media (min-width: 768px) {
		background: url('/images/company/Commitments/dotsLeft.png') no-repeat;
		bottom: -34px;
		left: 0;
	}
	@media (min-width: 1920px) {
		background: url('/images/company/Commitments/dotsLeft.png') no-repeat;
		bottom: 0px;
		left: 0;
	}
`;
export default Commitments;
