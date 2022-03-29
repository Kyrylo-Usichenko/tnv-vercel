import React from 'react';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Main } from '../components/Main/styles';
import Header from '../components/common/Header/Header';
import Preview from '../components/Features/Preview';
import Supercharge from '../components/Features/Supercharge';
import Footer from '../components/common/Footer';
import { Container } from '../components/common/Container/Container';

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
	return (
		<Main>
			<Header locale={locale} Tab='Features' />
			<section className='preview'>
				<Container>
					<Preview />
				</Container>
			</section>
			<section className='supercharge'>
				<Supercharge />
			</section>
			<Footer />
		</Main>
	);
};

export default Features;
