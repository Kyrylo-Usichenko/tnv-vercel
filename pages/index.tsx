import { NextPage } from 'next/types';
import React, { RefObject, useRef } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RedTopSquare from '../components/Main/RedTopSquare/RedTopSquare';
import Preview from '../components/Main/Preview/Preview';
import HowItWorks from '../components/Main/HowItWorks/HowItWorks';
import MoreMoney from '../components/Main/MoreMoney/MoreMoney';
import FeaturedOn from '../components/Main/FeaturedOn/FeaturedOn';
import WhyChoose from '../components/Main/WhyChoose/WhyChoose';
import FormFilling from '../components/Main/FormFilling/FormFilling';
import Footer from '../components/common/Footer';
import { FeaturesCon } from '../components/common/Container/Container';
import { Main } from '../components/Main/Styles/Styles';
import styled from 'styled-components';
import SmileRework from '../components/Main/SmileRework/SmileRework';
import FeaturesHeader from '../components/common/Header/FeaturesHeader';

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['header', 'main'])),
		},
	};
}

const Home: NextPage<any> = (props) => {
	const locale = props.locale;

	const formSection = useRef() as RefObject<HTMLDivElement>;

	const executeScroll = () => {
		if (formSection.current) {
			scrollTo({
				top: formSection.current.offsetTop,
				left: 0,
				behavior: 'smooth',
			});
		}
	};

	return (
		<Styled>
			<GreySquare2>
				<GreySquareDots src='/images/main/preview/dots-under-text.png' alt='grey dimonds' />
			</GreySquare2>
			<RedTopSquare />
			<GreySquare />

			<Main>
				<Head>
					<title>Home</title>
					<meta name='description' content='Generated by create next app' />
					<link rel='icon' href='/icons/common/favicon.svg' />
				</Head>

				{/*<Header locale={locale} Tab='Home' />*/}
				<FeaturesHeader locale={locale} Tab='Home' scrollDown={executeScroll} />

				<section>
					<FeaturesCon>
						<Preview locale={locale} scrollDown={executeScroll} />
					</FeaturesCon>
					<HowItWorks />
					<MoreMoney />
					<FeaturedOn />
					<WhyChoose />
					<SmileRework />
					<FormFilling locale={locale} formRef={formSection} />
					<Footer background='#ffffff' />
				</section>
			</Main>
		</Styled>
	);
};

export const GreySquare = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
	border-radius: 45.0024px;
	transform: rotate(-45deg);
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	overflow: hidden;
	width: 248.41px;
	height: 248.41px;
	left: 300px;
	top: -115px;
	@media (min-width: 768px) {
		width: 327.73px;
		height: 327.73px;
		left: 600px;
		top: -153px;
	}
	@media (min-width: 1024px) {
		left: 215px;
	}

	@media (min-width: 1280px) {
		left: 350px;
	}
	@media (min-width: 1440px) {
		left: 415px;
	}
	@media (min-width: 1920px) {
		top: -182px;
		left: 642px;
		width: 256.75px;
		height: 256.75px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 45.0024px;
		transform: rotate(-45deg);
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		overflow: hidden;
	}
`;
export const GreySquare2 = styled.div`
	left: -200px;
	top: 164px;
	width: 343.78px;
	height: 343.78px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
	border-radius: 45.0024px;
	transform: rotate(-45deg);
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
	overflow: hidden;

	@media (min-width: 768px) {
		left: -65px;
		top: 220px;
	}
	@media (min-width: 1440px) {
		left: -46px;
		top: 415px;
	}
	@media (min-width: 1920px) {
		top: 410px;
		left: 212px;
		width: 343.78px;
		height: 343.78px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 45.0024px;
		transform: rotate(-45deg);
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 0;
		overflow: hidden;
	}
`;

export const GreySquareDots = styled.img`
	display: none;
	@media (min-width: 1024px) {
		display: inherit;
		transform: rotate(45deg);
		position: absolute;
		left: 5px;
		bottom: 120px;
		z-index: 0;
	}
`;

export const Styled = styled.div`
	position: relative;
	overflow: hidden;
`;

export default Home;
