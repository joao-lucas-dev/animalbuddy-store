import React from 'react';
import { AppProps } from 'next/app';

import FacebookPixel from '../components/FacebookPixel';
import AppProvider from '../context';

import GlobalStyle from '../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
