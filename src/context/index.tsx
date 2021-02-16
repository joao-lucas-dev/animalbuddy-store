import React from 'react';

import { CartProvider } from './cart';
import { FileProvider } from './files';
import { PayerProvider } from './payer';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <PayerProvider>
        <CartProvider>
          <FileProvider>{children}</FileProvider>
        </CartProvider>
      </PayerProvider>
    </ToastProvider>
  );
};

export default AppProvider;
