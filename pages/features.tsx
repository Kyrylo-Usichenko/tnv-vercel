import React, { useState } from 'react';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Main } from '../components/main/Styles';
import Header from '../components/common/Header/Header';
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
			<Header locale={locale} Tab='Features' />
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

export default Features;
