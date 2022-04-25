import React, { FC } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';
import Panel from './Panel';
import { useTranslation } from 'next-i18next';

const Faq: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledFaq>
			<StyledFaqDec1></StyledFaqDec1>
			<StyledFaqDec2></StyledFaqDec2>
			<FeaturesCon>
				<FaqTitle>FAQ</FaqTitle>
				<Panel name={t('features:question1')}>{t('features:answer1')}</Panel>
				<Panel name={t('features:question2')}>{t('features:answer2')}</Panel>
				<Panel name={t('features:question3')}>{t('features:answer3')}</Panel>
				<Panel name={t('features:question4')}>{t('features:answer4')}</Panel>
				<Panel name={t('features:question5')}>{t('features:answer5')}</Panel>
			</FeaturesCon>
		</StyledFaq>
	);
};

const StyledFaq = styled.section`
	padding-bottom: 80px;
	position: relative;

	&::before {
		content: url('/images/features/faq/faq-dots-l-min.webp');
		position: absolute;
		top: 90px;
		left: 0;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('/images/features/faq/faq-dots-l.webp');
			top: 220px;
			left: -150px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 200px;
			left: -320px;
		}
	}

	@media (min-width: 1280px) {
		&::after {
			content: url('/images/features/faq/faq-dots-r.webp');
			position: absolute;
			right: -100px;
			top: 486px;
		}

		&::before {
			top: 200px;
			left: -250px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: -180px;
		}

		&::after {
			right: 0;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			left: 60px;
		}

		&::after {
			right: 150px;
		}
	}
`;

const StyledFaqDec1 = styled.div`
	&::before {
		content: '';
		position: absolute;
		top: 425px;
		left: -380px;
		width: 586.83px;
		height: 586.83px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 67.463px;
		transform: rotate(-45deg);
	}

	&::after {
		content: '';
		position: absolute;
		top: 74px;
		right: -380px;
		width: 586.83px;
		height: 586.83px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 67.463px;
		transform: rotate(-45deg);
	}

	@media (min-width: 768px) {
		&::before {
			width: 724.76px;
			height: 724.76px;
			top: 290px;
			left: -450px;
		}

		&::after {
			width: 724.76px;
			height: 724.76px;
			top: 0;
			right: -520px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 210px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			left: -350px;
		}

		&::after {
			right: -400px;
		}
	}

	@media (min-width: 1440px) {
		&::after {
			right: -300px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			left: -80px;
		}

		&::after {
			top: 20px;
			right: -100px;
		}
	}
`;

const StyledFaqDec2 = styled.div`
	&::before {
		content: '';
		position: absolute;
		top: 426px;
		right: -220px;
		width: 381.1px;
		height: 381.1px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 43.8115px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			width: 470.67px;
			height: 470.67px;
			top: 337px;
			right: -260px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 400px;
			right: -300px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			top: 420px;
			right: -200px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			top: 460px;
			right: -100px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			right: 135px;
		}
	}
`;

const FaqTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	text-align: center;
	margin: 0 0 40px 0;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 42px;
	}

	@media (min-width: 1280px) {
		font-size: 40px;
		line-height: 49px;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
	}
`;

export default Faq;
