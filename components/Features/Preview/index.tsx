import React, { FC } from 'react';
import styled from 'styled-components';

const Preview: FC = () => {
	return (
		<PreviewInfo>
			<PreviewTitle>One dashboard, all your supply chain transactions</PreviewTitle>
			<PreviewText>From orders to real-time cash in your bank. Run your business like a rockstar.</PreviewText>
			<PreviewButton>Try it for free</PreviewButton>
			<PreviewImg>
				<PreviewImgDeco1 />
				<img src='/images/features/preview/man-1920.jpg' alt='Man holding smartphone' />
				<PreviewImgDeco2 />
				<PreviewImgDeco3 />
			</PreviewImg>
		</PreviewInfo>
	);
};

const PreviewInfo = styled.div`
	padding: 144px 0 180px 0;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		padding: 142px 0 180px 0;
	}
`;

const PreviewTitle = styled.h2`
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 56px;
	line-height: 69px;
	max-width: 664px;
	color: var(--text-main);
	margin: 0 0 5px 0;
	position: relative;

	&::before {
		content: url('/images/features/preview/decoration1-1920.svg');
		position: absolute;
		top: -33px;
		left: -24px;
	}

	&::after {
		content: url('/images/features/preview/decoration2-1920.svg');
		position: absolute;
		right: -33px;
		bottom: -8px;
		z-index: -1;
	}

	@media (max-width: 1440px) {
		font-size: 48px;
		line-height: 59px;
		margin: 0 0 16px 0;

		&::after {
			right: -85px;
			bottom: -17px;
		}
	}

	@media (max-width: 1024px) {
		font-size: 44px;
		line-height: 52px;
		max-width: 535px;
	}

	@media (max-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 430px;

		&::before {
			content: url('/images/features/preview/decoration1-768.svg');
			position: absolute;
			top: -30px;
			left: -7px;
		}

		&::after {
			content: url('/images/features/preview/decoration2-768.svg');
			position: absolute;
			right: -20px;
			bottom: -6px;
			z-index: 1;
		}
	}

	@media (max-width: 375px) {
		font-size: 28px;
		line-height: 34px;
	}
`;

const PreviewText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;
	text-align: center;
	color: var(--text-second);
	max-width: 420px;
	margin: 0 0 31px 0;

	@media (max-width: 1440px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 400px;
		margin: 0 0 32px 0;
	}

	@media (max-width: 1024px) {
		font-size: 16px;
		line-height: 23px;
		max-width: 350px;
	}

	@media (max-width: 375px) {
		font-size: 14px;
		line-height: 22px;
	}
`;

const PreviewButton = styled.button`
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	margin-bottom: 66px;
	padding: 15px 50.67px 16px 51.67px;
	color: var(--text-white);
	text-align: center;
	border: none;
	border-radius: 16px;
	background-color: var(--text-primary);
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--text-primary-hover);
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-primary);
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
	}

	@media (max-width: 1440px) {
		font-size: 16px;
		line-height: 20px;
		padding: 14px 47px;
	}

	@media (max-width: 375px) {
		margin-bottom: 48px;
	}
`;

const PreviewImg = styled.div`
	position: relative;
	width: 100%;

	& > img {
		border-radius: 48px;
		width: 100%;
	}

	&::before {
		content: '';
		position: absolute;
		width: 569.32px;
		height: 569.32px;
		top: -97px;
		left: -270px;
		z-index: -1;
		background: var(--bg-radial-15);
		border-radius: 53px;
		transform: rotate(-45deg);
	}

	&::after {
		content: url('/images/features/preview/top-dots.svg');
		position: absolute;
		top: -75px;
		right: -34px;
		z-index: -1;
	}

	@media (max-width: 768px) {
		&::after {
			content: '';
		}
	}
`;

const PreviewImgDeco1 = styled.div`
	height: inherit;
	width: inherit;

	&::before {
		content: url('/images/features/preview/bottom-dots.svg');
		position: absolute;
		left: 48px;
		bottom: -63px;
		z-index: -1;
	}

	&::after {
		content: url('/images/features/preview/app.png');
		position: absolute;
		right: -83px;
		bottom: -50px;
	}
`;

const PreviewImgDeco2 = styled.div`
	height: inherit;
	width: inherit;

	&::before {
		content: url('/images/features/preview/message.png');
		position: absolute;
		top: 233px;
		left: 705px;
	}

	&::after {
		content: url('/images/features/preview/left-dots.svg');
		position: absolute;
		top: 291px;
		left: 655px;
	}
`;

const PreviewImgDeco3 = styled.div`
	height: inherit;
	width: inherit;

	&::after {
		content: url('/images/features/preview/right-dots.svg');
		position: absolute;
		top: 307px;
		left: 923px;
	}
`;

export default Preview;
