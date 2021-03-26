import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

import FacebookPixel from '../components/FacebookPixel';
import AppProvider from '../context';

import GlobalStyle from '../styles/GlobalStyles';

import * as gtag from '../lib/gtag';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <FacebookPixel>
      <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </FacebookPixel>
  );
};

export default MyApp;
