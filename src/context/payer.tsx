import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

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

  useEffect(() => {
    const payerStorage = localStorage.getItem('@AnimalBuddy:payer');

    if (payerStorage) {
      setPayerData(JSON.parse(payerStorage));
    }
  }, []);

  const createPayer = useCallback((payer: IPayer) => {
    setPayerData(payer);
    localStorage.setItem('@AnimalBuddy:payer', JSON.stringify(payer));
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
