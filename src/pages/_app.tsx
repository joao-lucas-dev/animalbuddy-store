import React from 'react';
import { AppProps } from 'next/app';

import Header from '../components/Header';
import Footer from '../components/Footer';

import GlobalStyle from '../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
