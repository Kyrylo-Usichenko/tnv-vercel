import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

type PreviewProps = {
	scrollDown: () => void;
};

const Preview: FC<PreviewProps> = ({ scrollDown }) => {
	const { t } = useTranslation();

	return (
		<PreviewInfo>
			<PreviewTitle>
				Collecting payments <span className='accent'>is easy</span>, right?
			</PreviewTitle>
			<PreviewText>{t('main:previewText')}</PreviewText>
			<PreviewAction>
				<Button onClick={scrollDown}>{t('main:previewButton')}</Button>
				<PreviewFootnote>
					{t('main:previewButtonText')}
					<PreviewSmile />
				</PreviewFootnote>
			</PreviewAction>
		</PreviewInfo>
	);
};

const PreviewInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 140px 0 0;
	@media (min-width: 768px) {
		padding: 126px 0 0;
		margin-left: 0;
	}
	@media (min-width: 1024px) {
		padding: 257px 0 0;
		align-items: flex-start;
	}
	@media (min-width: 1280px) {
		padding: 252px 0 0;
	}
	@media (min-width: 1440px) {
		padding: 252px 0 0;
	}
	@media (min-width: 1920px) {
		padding: 260px 0 0;
	}
`;

const PreviewTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;

	position: relative;

	font-size: 32px;
	line-height: 39px;
	margin: 0 0 16px 0;
	max-width: 333px;
	text-align: center;

	&:before {
		content: '';
		background: url('/images/main/preview/decorations.svg');
		position: absolute;
		z-index: 1;
		background-size: contain;
		transform: rotate(27deg);
		height: 80px;
		width: 75px;
		left: -15px;
		top: -45px;

		@media (min-width: 768px) {
			left: -20px;
			top: -44px;
		}
		@media (min-width: 1024px) {
			left: -26px;
			top: -38px;
		}
		@media (min-width: 1280px) {
			left: -35px;
			top: -27px;
			transform: rotate(0deg);
		}
		@media (min-width: 1920px) {
			left: -42px;
			top: -44px;
			width: 87px;
			height: 80px;
		}
	}

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		margin: 0 0 16px 0;
		max-width: 333px;
	}
	@media (min-width: 1024px) {
		text-align: left;
	}
	@media (min-width: 1280px) {
		font-size: 44px;
		line-height: 54px;
		margin: 0 0 11px 0;
		max-width: 427px;
	}
	@media (min-width: 1440px) {
		font-size: 44px;
		line-height: 54px;
		margin: 0 0 11px 0;
		max-width: 427px;
	}
	@media (min-width: 1920px) {
		max-width: 478px;
		margin: 0 0 16px 0;
		font-weight: 600;
		font-size: 48px;
		line-height: 59px;
	}
`;

const PreviewText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	color: var(--text-second);
	margin: 0 0 32px 0;
	text-align: center;
	font-size: 14px;
	line-height: 22px;
	max-width: 333px;
	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 24px;
		max-width: 477px;
	}
	@media (min-width: 1024px) {
		font-size: 16px;
		line-height: 24px;
		max-width: 334px;
		text-align: left;
	}
	@media (min-width: 1280px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 369px;
	}
	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 26px;
		max-width: 415px;
	}
`;
const PreviewAction = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	row-gap: 12px;
`;
const Button = styled.button`
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;

	color: var(--text-white);
	text-align: center;
	padding: 14px 0;
	border: none;
	border-radius: 16px;
	background-color: var(--text-primary);
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: 16px;
	line-height: 20px;
	width: 188px;
	height: 48px;

	&:hover {
		background-color: var(--text-primary-hover);
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-primary);
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
	}
	@media (min-width: 1440px) {
		line-height: 25px;
		font-size: 20px;
		width: 220px;
		height: 56px;
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
	font-size: 14px;
	line-height: 17px;
	@media (min-width: 1440px) {
		font-size: 16px;
		line-height: 19px;
	}
`;

const PreviewSmile = styled.div`
	margin-left: 8px;
	background: url('/images/main/preview/smile.svg') no-repeat;
	width: 16px;
	height: 16px;
`;

export default Preview;
