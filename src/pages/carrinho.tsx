import React from 'react';
import { useRouter } from 'next/router';

import { useCart } from '../context/cart';

import SEO from '../components/SEO';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

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

const Cart: React.FC = () => {
  const { cart, totalPriceString, clearCart } = useCart();
  const router = useRouter();

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

            <button type="button" onClick={() => clearCart()}>
              Limpar Carrinho
            </button>
          </TopCart>

          <CartArea>
            {cart.map((item) => {
              return <CartItem key={item._id} item={item} />;
            })}
          </CartArea>

          <FreteArea>
            <span>Total</span>

            <FretePrice>R$ 0,00</FretePrice>
          </FreteArea>

          <TotalArea>
            <span>Total</span>

            <TotalPrice>{totalPriceString}</TotalPrice>
          </TotalArea>

          <FinallyArea>
            <ButtonFinally miniWidth>FINALIZAR COMPRA</ButtonFinally>
          </FinallyArea>
        </Container>
      )}
    </>
  );
};

export default Cart;
