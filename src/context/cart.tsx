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
  addProductToCart(product: IProduct): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem('@AnimalBuddy:cart');

    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  }, []);

  const addProductToCart = useCallback(
    (product: IProduct) => {
      const findIndex = cart.findIndex((item) => item._id === product._id);

      if (findIndex !== -1) {
        cart[findIndex].price = product.price;
        cart[findIndex].priceString = product.priceString;
        cart[findIndex].color = product.color;
        cart[findIndex].size = product.size;
        cart[findIndex].model = product.model;
        cart[findIndex].qtd = product.qtd;

        setCart(cart);
        localStorage.setItem('@AnimalBuddy:cart', JSON.stringify(cart));
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

  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
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
