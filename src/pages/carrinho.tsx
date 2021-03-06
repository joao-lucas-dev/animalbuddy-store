import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { useCart } from '../context/cart';
import { usePayer } from '../context/payer';

import SEO from '../components/SEO';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

import {
  EmptyCartArea,
  ButtonEmpty,
  Container,
  TopCart,
  CartArea,
  FreteArea,
  FretePrice,
  TotalArea,
  TotalPrice,
  FinallyArea,
  ButtonFinally,
} from '../styles/pages/Cart';
import api from '../services';

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

interface ICart {
  cartProps: IProduct[];
  payerProps: IPayer;
}

const Cart: NextPage<ICart> = ({ cartProps, payerProps }) => {
  const { cart, totalPriceString, clearCart, addProductToCart } = useCart();
  const { createPayer, clearPayer } = usePayer();

  const router = useRouter();

  useEffect(() => {
    if (cartProps) {
      clearCart();
      cartProps.forEach((product) => {
        addProductToCart(product);
      });
    }

    if (payerProps) {
      clearPayer();
      createPayer(payerProps);
    }
    // eslint-disable-next-line
  }, [cartProps, payerProps]);

  useEffect(() => {
    router.prefetch('/produtos');
    router.prefetch('/checkout');
  }, [router]);

  return (
    <>
      <SEO title="Carrinho" image="/logo_seo.png" description="" />

      <Header closeMenu />

      {cart.length === 0 ? (
        <EmptyCartArea>
          <h1>CARRINHO DE COMPRAS</h1>

          <span>Seu carrinho está vazio no momento.</span>

          <ButtonEmpty onClick={() => router.push('/produtos')}>
            Voltar para a navegação
          </ButtonEmpty>
        </EmptyCartArea>
      ) : (
        <Container>
          <TopCart>
            <h1>CARRINHO DE COMPRAS</h1>

            <button
              type="button"
              onClick={() => {
                clearCart();
                clearPayer();
              }}
            >
              Limpar Carrinho
            </button>
          </TopCart>

          <CartArea>
            {cart.map((item) => {
              return <CartItem key={item._id} item={item} />;
            })}
          </CartArea>

          <FreteArea>
            <span>Frete</span>

            <FretePrice>R$ 0,00</FretePrice>
          </FreteArea>

          <TotalArea>
            <span>Total</span>

            <TotalPrice>{totalPriceString}</TotalPrice>
          </TotalArea>

          <FinallyArea>
            <ButtonFinally miniWidth onClick={() => router.push('/checkout')}>
              FINALIZAR PEDIDO
            </ButtonFinally>
          </FinallyArea>
        </Container>
      )}

      <Footer />
    </>
  );
};

Cart.getInitialProps = async ({ query }) => {
  const { orderId } = query;

  if (orderId) {
    const response = await api.get(`/checkout/abandoned-cart/${orderId}`);

    return {
      cartProps: response.data.cart,
      payerProps: response.data.payer,
    };
  }

  return {
    cartProps: null,
    payerProps: null,
  };
};

export default Cart;
