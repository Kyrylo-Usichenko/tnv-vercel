import React from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';

const Get = () => {
	return (
		<SyledGet>
			<FeaturesCon>
				<GetCon>
					<GetTitle>Get smarter about all the little details </GetTitle>
					<GetText>
						Monitor your transaction activity on one dashboard. Generate customized order, invoice, and
						payments reports. Prevent fraud, improve operations, and grow grow grow!
					</GetText>
					<GetImg
						src='images/features/get/get-img-1920.png'
						srcSet='images/features/get/get-img-1920@2x.png 2x'
						alt='app'
					/>
				</GetCon>
			</FeaturesCon>
		</SyledGet>
	);
};

const SyledGet = styled.section`
	padding: 0;
	margin-bottom: 120px;
	position: relative;

	@media (min-width: 1024px) {
		padding: 288px 0;
		margin-bottom: 80px;
	}

	@media (min-width: 1280px) {
		margin-bottom: 140px;
	}
`;

const GetCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		align-items: flex-start;
	}
`;

const GetTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	margin: 0 0 12px 0;
	position: relative;
	text-align: center;

	&::before {
		content: '';
		width: 383.28px;
		height: 383.28px;
		position: absolute;
		top: -160px;
		left: -300px;
		background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
		opacity: 0.15;
		border-radius: 52.9944px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 382px;

		&::before {
			width: 569.32px;
			height: 569.32px;
			top: -250px;
			left: -520px;
		}
	}

	@media (min-width: 1024px) {
		text-align: left;
		margin: 0 0 25px 0;
		max-width: 350px;
	}

	@media (min-width: 1280px) {
		font-size: 40px;
		line-height: 49px;
		margin: 0 0 17px 0;
		max-width: 405px;
	}

	@media (min-width: 1440px) {
		&::before {
			left: -420px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 440px;

		&::before {
			top: -290px;
			left: -400px;
		}
	}
`;

const GetText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: #5c5c5c;
	margin: 0 0 24px 0;
	position: relative;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 23px;
	}

	@media (min-width: 1024px) {
		max-width: 336px;
	}

	@media (min-width: 1280px) {
		max-width: 400px;
	}

	@media (min-width: 1440px) {
		max-width: 480px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

const GetImg = styled.img`
	position: static;
	width: 573.5px;
	height: 573.5px;

	@media (min-width: 768px) {
		width: 792px;
		height: 792px;
	}

	@media (min-width: 1024px) {
		position: absolute;
		top: -290px;
		right: -187px;
	}

	@media (min-width: 1280px) {
		right: -247px;
	}

	@media (min-width: 1440px) {
		right: -212px;
	}

	@media (min-width: 1920px) {
		right: -112px;
	}
`;

export default Get;
