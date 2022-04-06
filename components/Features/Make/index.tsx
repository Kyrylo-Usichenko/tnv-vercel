import React from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';

const Make = () => {
	return (
		<SyledMake>
			<FeaturesCon>
				<MakeCon>
					<MakeInfo>
						<MakeTitle>Make collections fast, flexible, fun</MakeTitle>
						<MakeText>
							Give customers a modern B2B payments experience, with more ways to pay (including credit
							terms). Zero setup or risk for you. They'll stay with you longer, purchase more from you,
							and you'll get cash in your bank so much faster!
						</MakeText>
					</MakeInfo>
					<MakeImg
						src='images/features/make/make-app-1920.png'
						srcSet='images/features/make/make-app-1920@2x.png 2x'
						alt='app'
					/>
				</MakeCon>
			</FeaturesCon>
		</SyledMake>
	);
};

const SyledMake = styled.section`
	position: relative;
	margin-bottom: 120px;

	@media (min-width: 1024px) {
		padding: 288px 0;
		margin-bottom: 80px;
	}
`;

const MakeCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		align-items: flex-end;
	}
`;

const MakeInfo = styled.div``;

const MakeTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	margin: 0 0 12px 0;
	text-align: center;
	position: relative;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 380px;
		margin: 0 auto 12px auto;

		&::before {
			content: '';
			width: 569.32px;
			height: 569.32px;
			position: absolute;
			top: -240px;
			right: -500px;
			background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
			opacity: 0.15;
			border-radius: 52.9944px;
			transform: rotate(-45deg);
			z-index: -1;
		}
	}

	@media (min-width: 1024px) {
		font-size: 40px;
		line-height: 49px;
		margin: 0 0 16px 0;
		text-align: left;

		&::before {
			right: -350px;
			top: -330px;
		}
	}

	@media (min-width: 1280px) {
		max-width: 402px;

		&::before {
			top: -440px;
			right: -540px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 460px;

		&::before {
			top: -440px;
			right: -380px;
		}
	}
`;

const MakeText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: #5c5c5c;
	margin: 0;
	position: relative;
	margin-bottom: 24px;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 23px;
		margin-bottom: 40px;
	}

	@media (min-width: 1024px) {
		max-width: 344px;
	}

	@media (min-width: 1280px) {
		max-width: 440px;
	}

	@media (min-width: 1440px) {
		max-width: 480px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 27px;
	}
`;

const MakeImg = styled.img`
	position: static;
	width: 573.5px;
	height: 573.5px;

	@media (min-width: 768px) {
		width: 792px;
		height: 792px;
	}

	@media (min-width: 1024px) {
		position: absolute;
		top: -270px;
		left: -200px;
	}

	@media (min-width: 1280px) {
		left: -248px;
	}

	@media (min-width: 1440px) {
		left: -190px;
	}

	@media (min-width: 1920px) {
		left: -100px;
	}
`;

export default Make;
