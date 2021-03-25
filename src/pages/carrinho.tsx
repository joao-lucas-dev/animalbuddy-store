import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import * as fbq from '../lib/fpixel';

import { useCart } from '../context/cart';
import { usePayer } from '../context/payer';
import { useToast } from '../context/toast';

import SEO from '../components/SEO';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import FAB from '../components/FAB';
import Input from '../components/Input';

import getValidationErrors from '../utils/getValidationErros';

import {
  EmptyCartArea,
  ButtonEmpty,
  Container,
  TopCart,
  CartArea,
  FreteArea,
  FretePrice,
  DiscountArea,
  DiscountPrice,
  TotalArea,
  TotalPrice,
  FinallyArea,
  ButtonFinally,
  RightSide,
  Installment,
  CouponArea,
  InputArea,
  ButtonCoupon,
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
  const formRef = useRef<FormHandles>();

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const {
    cart,
    totalPriceString,
    clearCart,
    addProductToCart,
    installmentPrice,
    addDiscount,
    coupon,
  } = useCart();
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

  const handleSubmit = useCallback(
    async (data: { coupon: string }, { reset }) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          coupon: Yup.string().required('Cupom é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get(`/store/coupons/${data.coupon}`);

        addDiscount(response.data);
        reset();
        addToast({
          type: 'success',
          title: 'Cupom Adicionado!',
          description: `O cupom ${data.coupon} foi adicionado com sucesso!`,
        });
        setLoading(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          console.log(errors);

          formRef.current?.setErrors(errors);
        } else {
          formRef.current?.setErrors({ coupon: 'Cupom inválido' });
        }

        console.log(err);
        setLoading(false);
      }
    },
    [addDiscount, addToast],
  );

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

          {coupon.discountValueString && (
            <DiscountArea>
              <span>Desconto - {coupon.name}</span>

              <DiscountPrice>- {coupon.discountValueString}</DiscountPrice>
            </DiscountArea>
          )}

          <TotalArea>
            <span>Total</span>

            <RightSide>
              <TotalPrice>{totalPriceString}</TotalPrice>
              <Installment>Ou por apenas 12x de {installmentPrice}</Installment>
            </RightSide>
          </TotalArea>

          <FinallyArea>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <CouponArea>
                <InputArea>
                  <Input name="coupon" placeholder="Código de desconto" />
                </InputArea>

                <ButtonCoupon type="submit" loading={loading}>
                  {loading ? <FaSpinner color="#FFF" size={18} /> : 'Aplicar'}
                </ButtonCoupon>
              </CouponArea>
            </Form>

            <ButtonFinally
              miniWidth
              onClick={() => {
                fbq.event('InitiateCheckout');
                router.push('/checkout');
              }}
            >
              FINALIZAR PEDIDO
            </ButtonFinally>
          </FinallyArea>
        </Container>
      )}

      <FAB />

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
