import React from 'react';
import { AppProps } from 'next/app';

import Footer from '../components/Footer';

import AppProvider from '../context';

import GlobalStyle from '../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
};

export default MyApp;
