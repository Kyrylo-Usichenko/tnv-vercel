import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Main } from '../components/Main/Styles/Styles';
import Footer from '../components/common/Footer';
import Privacy from '../components/Legal/Privacy';
import { CurrentTabCon, CurrentTabName, TabContainer, TabTitle } from '../components/Legal/styles';
import Terms from '../components/Legal/Terms';
import { Tabs } from '../constants';
import FeaturesHeader from '../components/common/Header/FeaturesHeader';

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['home', 'header', 'main'])),
		},
	};
}

type Props = {
	locale: string;
};

const Legal: NextPage<Props> = ({ locale }) => {
	const router = useRouter();
	const [currentTab, setCurrentTab] = useState<string>(router.asPath.slice(1));
	useEffect(() => {
		const hello = async () => {
			if (router.asPath.slice(1) === 'legal') {
				await router.push('/legal', '/privacy');
				setCurrentTab('privacy');
			}
		};
		hello().catch(() => console.log('error'));
	});

	const onPrivacyClick = async () => {
		setCurrentTab(Tabs.privacy);
		await router.push('/legal', '/privacy');
	};
	const onTermsClick = async () => {
		setCurrentTab(Tabs.terms);
		await router.push('/legal', '/terms');
	};
	//
	// console.log(router.asPath.slice(1));
	return (
		<Main>
			<FeaturesHeader locale={locale} Tab='Legal' />
			<section className='legal'>
				<TabContainer>
					<TabTitle>Tinvio Legal Info</TabTitle>
					<CurrentTabCon>
						{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
						<CurrentTabName isActive={currentTab === Tabs.privacy} onClick={onPrivacyClick}>
							Privacy Policy
						</CurrentTabName>
						{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
						<CurrentTabName isActive={currentTab === Tabs.terms} onClick={onTermsClick}>
							Terms of Service
						</CurrentTabName>
					</CurrentTabCon>
					<Privacy isActive={currentTab === Tabs.privacy} />
					<Terms isActive={currentTab === Tabs.terms} />
				</TabContainer>
			</section>
			<Footer />
		</Main>
	);
};

export default Legal;
