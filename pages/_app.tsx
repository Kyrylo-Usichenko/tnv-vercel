import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
