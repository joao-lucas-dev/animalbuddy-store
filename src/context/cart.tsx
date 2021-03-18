import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

interface IProduct {
  _id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  qtd: number;
  price: number;
  priceString: string;
  color: string;
  size: string;
  model: string;
}

interface CartContextData {
  cart: IProduct[];
  totalPriceString: string;
  installmentPrice: string;
  addProductToCart(product: IProduct): void;
  removeProductFromCart(product: IProduct): void;
  updateQtdProduct(product: IProduct, qtd: number): void;
  clearCart(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [totalPriceString, setTotalPriceString] = useState('');
  const [installmentPrice, setInstallmentPrice] = useState('');

  useEffect(() => {
    const cartStorage = localStorage.getItem('@AnimalBuddy:cart');

    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.price * item.qtd;
    }, 0);

    const installmentValue = ((totalPrice * 19.79) / 100 + totalPrice) / 12;

    setTotalPriceString(
      totalPrice.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    setInstallmentPrice(
      installmentValue.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
  }, [cart]);

  const addProductToCart = useCallback(
    (product: IProduct) => {
      const findIndex = cart.findIndex((item) => item._id === product._id);

      if (findIndex !== -1) {
        cart[findIndex].price = product.price;
        cart[findIndex].priceString = product.priceString;
        cart[findIndex].color = product.color;
        cart[findIndex].size = product.size;
        cart[findIndex].model = product.model;
        cart[findIndex].qtd += product.qtd;

        setCart(cart);
        localStorage.setItem('@AnimalBuddy:cart', JSON.stringify(cart));

        const totalPrice = cart.reduce((acc, item) => {
          return acc + item.price * item.qtd;
        }, 0);

        const installmentValue = ((totalPrice * 19.79) / 100 + totalPrice) / 12;

        setTotalPriceString(
          totalPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }),
        );
        setInstallmentPrice(
          installmentValue.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }),
        );
      } else {
        setCart((state) => {
          localStorage.setItem(
            '@AnimalBuddy:cart',
            JSON.stringify(state.concat(product)),
          );

          return state.concat(product);
        });
      }
    },
    [cart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem('@AnimalBuddy:cart');
  }, []);

  const removeProductFromCart = useCallback(
    (product: IProduct) => {
      const newCart = cart.filter((item) => item._id !== product._id);

      if (newCart.length > 0) {
        setCart(newCart);
        localStorage.setItem('@AnimalBuddy:cart', JSON.stringify(newCart));
      } else {
        clearCart();
      }
    },
    [cart, clearCart],
  );

  const updateQtdProduct = useCallback(
    (product: IProduct, qtd: number) => {
      const findIndex = cart.findIndex((item) => item._id === product._id);

      if (findIndex !== -1) {
        cart[findIndex].qtd = qtd;

        setCart(cart);
        localStorage.setItem('@AnimalBuddy:cart', JSON.stringify(cart));

        const totalPrice = cart.reduce((acc, item) => {
          return acc + item.price * item.qtd;
        }, 0);

        const installmentValue = ((totalPrice * 19.79) / 100 + totalPrice) / 12;

        setTotalPriceString(
          totalPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }),
        );
        setInstallmentPrice(
          installmentValue.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }),
        );
      }
    },
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPriceString,
        addProductToCart,
        removeProductFromCart,
        updateQtdProduct,
        clearCart,
        installmentPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
