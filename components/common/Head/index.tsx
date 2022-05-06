import React, { FC } from 'react';
import Head from 'next/head';

import { Meta } from '@/constants';

type CustomHeadProps = {
  titleName: string;
};

const CustomHead: FC<CustomHeadProps> = ({ titleName }) => {
  return (
    <Head>
      <title>{titleName}</title>

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='X-UA-Compatible' content='ie=edge' />

      <meta name='description' content={Meta.description} />
      <meta name='keywords' content={Meta.keywords} />

      <meta property='og:type' content={Meta.ogType} />
      <meta property='og:url' content={Meta.ogUrl} />
      <meta property='og:title' content={Meta.ogTitle} />
      <meta property='og:description' content={Meta.ogDescription} />
      <meta property='og:image' content={Meta.ogImage} />

      <meta property='twitter:card' content={Meta.twitterCard} />
      <meta property='twitter:url' content={Meta.twitterUrl} />
      <meta property='twitter:title' content={Meta.twitterTitle} />
      <meta property='twitter:description' content={Meta.twitterDescription} />
      <meta property='twitter:image' content={Meta.twitterImage} />

      <link rel='icon' type='image/png' sizes='16x16' href='/icons/common/favicon/favicon16.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/icons/common/favicon/favicon32.png' />
      <link rel='apple-touch-icon' sizes='228x228' href='/icons/common/favicon/favicon228.png' />
    </Head>
  );
};

export default CustomHead;
