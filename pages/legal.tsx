import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../components/common/Header/Header';
import { Main } from '../components/Main/Styles/Styles';
import Footer from '../components/common/Footer';
import Privacy from '../components/Legal/Privacy';
import { CurrentTabCon, CurrentTabName, TabContainer, TabTitle } from '../components/Legal/styles';
import Terms from '../components/Legal/Terms';
import { Tabs } from '../constants';

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

const Legal: NextPage<Props> = ({ locale }) => {
	const router = useRouter();
	const [currentTab, setCurrentTab] = useState<string>(router.asPath.slice(1));

	return (
		<Main>
			<Header locale={locale} Tab='Legal' />
			<section className='legal'>
				<TabContainer>
					<TabTitle>Tinvio Legal Info</TabTitle>
					<CurrentTabCon>
						<CurrentTabName
							isActive={currentTab === Tabs.privacy}
							onClick={() => setCurrentTab(Tabs.privacy)}
						>
							Privacy Policy
						</CurrentTabName>
						<CurrentTabName isActive={currentTab === Tabs.terms} onClick={() => setCurrentTab(Tabs.terms)}>
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
