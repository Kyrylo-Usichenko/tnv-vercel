import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Preview: FC = () => {
	const { t } = useTranslation();

	return (
		<PreviewInfo>
			<PreviewTitle>
				Collecting payments <span className='accent'>is easy</span>, right?
			</PreviewTitle>
			<PreviewText>{t('home:ManageAll')}</PreviewText>
			<PreviewAction>
				<Button>Get Started Now</Button>
				<PreviewFootnote>
					It's free to try!
					<PreviewSmile />
				</PreviewFootnote>
			</PreviewAction>
		</PreviewInfo>
	);
};

const PreviewInfo = styled.div`
	padding: 260px 0 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media (max-width: 1440px) {
		padding: 252px 0 0;
	}
	@media (max-width: 1280px) {
		padding: 252px 0 0;
		margin-left: 40px;
	}
	@media (max-width: 1024px) {
		padding: 257px 0 0;
	}
	@media (max-width: 768px) {
		padding: 126px 0 0;
		align-items: center;
		margin-left: 0;
	}
	@media (max-width: 370px) {
		padding: 140px 0 0;
	}
`;

const PreviewTitle = styled.h2`
	max-width: 478px;
	margin: 0 0 16px 0;
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	position: relative;

	&:before {
		content: '';
		width: 87px;
		height: 80px;
		background: url('images/main/preview/decorations.svg');
		position: absolute;
		z-index: 1;
		left: -42px;
		top: -44px;
		background-size: contain;
		@media (max-width: 1024px) {
			transform: rotate(27deg);
		}
		@media (max-width: 768px) {
			left: -31px;
			top: -55px;
		}
		@media (max-width: 425px) {
			left: -18px;
			top: -43px;
		}
		@media (max-width: 375px) {
			width: 75px;
			left: -15px;
			top: -45px;
		}
	}
	&:after {
		content: '';
		width: 59px;
		height: 56px;
		background: url('images/main/preview/decorations768.svg');
		position: absolute;
		z-index: 1;
		right: -44px;
		top: 25px;
		@media (max-width: 425px) {
			right: 0;
		}
		@media (min-width: 1024px) {
			display: none;
		}
	}
	@media (max-width: 1440px) {
		font-size: 44px;
		line-height: 54px;
		margin: 0 0 11px 0;
		max-width: 427px;
	}
	@media (max-width: 1280px) {
		font-size: 44px;
		line-height: 54px;
		margin: 0 0 11px 0;
		max-width: 427px;
	}
	@media (max-width: 1024px) {
		font-size: 36px;
		line-height: 49px;
		margin: 0 0 15px 0;
		max-width: 373px;
	}
	@media (max-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		margin: 0 0 16px 0;
		max-width: 333px;
		text-align: center;
	}
	@media (max-width: 767px) {
		font-size: 28px;
		line-height: 34px;
		margin: 0 0 16px 0;
		max-width: 333px;
	}
`;

const PreviewText = styled.p`
	max-width: 415px;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 20px;
	line-height: 26px;
	color: var(--text-second);
	margin: 0 0 32px 0;
	@media (max-width: 1440px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 369px;
	}
	@media (max-width: 1440px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 369px;
	}
	@media (max-width: 1280px) {
		font-size: 18px;
		line-height: 24px;
	}
	@media (max-width: 1024px) {
		font-size: 16px;
		line-height: 24px;
		max-width: 334px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
		line-height: 24px;
		max-width: 477px;
		text-align: center;
	}
	@media (max-width: 767px) {
		font-size: 14px;
		line-height: 22px;
		max-width: 333px;
	}
`;
const PreviewAction = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	row-gap: 12px;
`;
const Button = styled.button`
	font-size: 20px;
	line-height: 25px;
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	width: 220px;
	height: 56px;
	color: var(--text-white);
	text-align: center;
	padding: 14px 0;
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
	}
`;
const PreviewFootnote = styled.span`
	display: flex;
	align-items: center;
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: var(--text-second);
	@media (max-width: 1440px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const PreviewSmile = styled.div`
	margin-left: 8px;
	background: url('/images/main/preview/smile.svg') no-repeat;
	width: 16px;
	height: 16px;
`;

export default Preview;
