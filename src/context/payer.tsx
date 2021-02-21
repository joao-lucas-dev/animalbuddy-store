import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../services';

interface IPayer {
  name: string;
  surname: string;
  email: string;
  phone: string;
  cpf: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  orderIdString: string;
}

interface PayerContextData {
  payerData: IPayer;
  createPayer(payer: IPayer): void;
  clearPayer(): void;
}

const PayerContext = createContext<PayerContextData>({} as PayerContextData);

const PayerProvider: React.FC = ({ children }) => {
  const [payerData, setPayerData] = useState({} as IPayer);

  const getPayerInfo = useCallback(async (orderIdString) => {
    try {
      const response = await api.get(`/checkout/infos/${orderIdString}`);

      setPayerData(response.data.payer);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const payerStorage = localStorage.getItem('@AnimalBuddy:payer');

    if (payerStorage) {
      const payerStorageFomatted = JSON.parse(payerStorage);

      getPayerInfo(payerStorageFomatted.orderIdString);
    }
  }, [getPayerInfo]);

  const createPayer = useCallback((payer: IPayer) => {
    setPayerData(payer);

    localStorage.setItem(
      '@AnimalBuddy:payer',
      JSON.stringify({ orderIdString: payer.orderIdString }),
    );
  }, []);

  const clearPayer = useCallback(() => {
    setPayerData({} as IPayer);
    localStorage.removeItem('@AnimalBuddy:payer');
  }, []);

  return (
    <PayerContext.Provider value={{ createPayer, clearPayer, payerData }}>
      {children}
    </PayerContext.Provider>
  );
};

function usePayer(): PayerContextData {
  const context = useContext(PayerContext);

  if (!context) {
    throw new Error('usePayer must be used within an PayerContext');
  }

  return context;
}

export { PayerProvider, usePayer };
