import React from 'react';
import { AppProps } from 'next/app';

import Footer from '../components/Footer';

import GlobalStyle from '../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
