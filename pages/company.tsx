import React, { RefObject, useRef, useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CustomHead from '@/components/common/Head';
import FeaturesHeader from '@/components/common/Header/FeaturesHeader';
import Footer from '@/components/common/Footer';
import Greetings from '@/components/company/Greetings/Greetings';
import Done from '@/components/company/Done/Done';
import Counts from '@/components/company/Counts/Counts';
import Teamvio from '@/components/company/Teamvio/Teamvio';
import Commitments from '@/components/company/Commitments/Commitments';
import Role from '@/components/company/Role/Role';
import Contact from '@/components/company/Contact/Contact';
import Modal from '@/components/Features/Modal';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['header', 'features', 'main', 'company'])),
    },
  };
}

const Company: NextPage<any> = (props) => {
  const locale: any = props.locale;

  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const contactSection = useRef() as RefObject<HTMLDivElement>;

  const executeScroll = () => {
    if (contactSection.current) {
      scrollTo({
        top: contactSection.current.offsetTop - 100,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Main>
        <CustomHead titleName='Company' />
        <Modal modalActive={modalActive} setModalActive={setModalActive} />
        <FeaturesHeader locale={locale} tab='Company' openModal={openModal} />
        <Greetings locale={locale} scrollDown={executeScroll} />
        <Done />
        <Counts />
        <Teamvio />
        <Commitments />
        <Role />
        <Contact contactSectionRef={contactSection} />
        <Footer background='#ffffff' />
      </Main>
    </>
  );
};

export const Main = styled.main`
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

export default Company;
