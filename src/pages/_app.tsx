import React from 'react';
import { AppProps } from 'next/app';

import Footer from '../components/Footer';

import { CartProvider } from '../context/cart';
import { FileProvider } from '../context/files';
import { PayerProvider } from '../context/payer';

import GlobalStyle from '../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PayerProvider>
      <CartProvider>
        <FileProvider>
          <GlobalStyle />
          <Component {...pageProps} />
          <Footer />
        </FileProvider>
      </CartProvider>
    </PayerProvider>
  );
};

export default MyApp;
