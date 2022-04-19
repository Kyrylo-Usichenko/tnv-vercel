import React, { useState } from 'react';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import FeaturesHeader from '../components/common/Header/FeaturesHeader';
import Preview from '../components/Features/Preview';
import Supercharge from '../components/Features/Supercharge';
import Footer from '../components/common/Footer';
import Tools from '../components/Features/Tools';
import Breeze from '../components/Features/Breeze';
import Sounds from '../components/Features/Sounds';
import Send from '../components/Features/Send';
import Make from '../components/Features/Make';
import Get from '../components/Features/Get';
import Ready from '../components/Features/Ready';
import Faq from '../components/Features/Faq';
import Gallery from '../components/Features/Gallery';
import Modal from '../components/Features/Modal';
import styled from 'styled-components';

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['home'])),
		},
	};
}

type Props = {
	locale: string;
};

const Features: NextPage<Props> = ({ locale }) => {
	const [modalActive, setModalActive] = useState(false);

	const openModal = () => {
		setModalActive(true);
	};

	return (
		<Main>
			<Modal modalActive={modalActive} setModalActive={setModalActive} />
			<FeaturesHeader locale={locale} Tab='Features' />
			<Preview openModal={openModal} />
			<Supercharge />
			<Tools />
			<Breeze />
			<Sounds />
			<Send />
			<Make />
			<Get />
			<Gallery />
			<Ready />
			<Faq />
			<Footer background='#ffffff' />
		</Main>
	);
};

export const Main = styled.main`
	position: relative;
	z-index: 2;
	overflow: hidden;
`;

export default Features;
