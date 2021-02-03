import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header';

import GlobalStyle from '../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
