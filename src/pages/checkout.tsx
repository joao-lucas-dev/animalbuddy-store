import React, { useState, useRef, useCallback, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import cep from 'cep-promise';
import Image from 'next/image';

import { useCart } from '../context/cart';
import { usePayer } from '../context/payer';
import { useToast } from '../context/toast';

import getValidationErrors from '../utils/getValidationErros';

import api from '../services';

import SEO from '../components/SEO';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import Input from '../components/Input';
import InputMask from '../components/InputMask';
import Footer from '../components/Footer';
import FAB from '../components/FAB';

import {
  Container,
  Breadcrumb,
  BreadcrumbLi,
  ResumeCartArea,
  ButtonCart,
  LeftSide,
  RightSide,
  OpenCartArea,
  CartArea,
  FreteArea,
  FretePrice,
  DiscountArea,
  DiscountPrice,
  TotalArea,
  RightSideCart,
  InstallmentCart,
  TotalPrice,
  FormArea,
  InfoArea,
  InputArea,
  OneArea,
  DoubleArea,
  AddressArea,
  ButtonsArea,
  ButtonBack,
  NextButton,
  InfoResumoArea,
  PersonalArea,
  LeftSpan,
  MidSpan,
  RightButton,
  AddressInfoArea,
  FreteInfoArea,
  PaymentArea,
  Installment,
  MercadoPagoLogoArea,
} from '../styles/pages/Checkout';

interface CheckoutFormData {
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
}

const Checkout: React.FC = () => {
  const formRef = useRef<FormHandles>();

  const router = useRouter();

  const {
    cart,
    totalPriceString,
    clearCart,
    installmentPrice,
    coupon,
  } = useCart();
  const { createPayer, payerData, clearPayer } = usePayer();
  const { addToast } = useToast();

  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [breadcrumbActive, setBreadcrumbActive] = useState(2);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    router.prefetch('/carrinho');
    const cartStorage = JSON.parse(localStorage.getItem('@AnimalBuddy:cart'));
    const payerStorage = JSON.parse(localStorage.getItem('@AnimalBuddy:payer'));

    if (cartStorage && payerStorage) {
      setShowCheckout(true);
      setBreadcrumbActive(3);
    } else if (cartStorage) {
      setShowCheckout(true);
      setBreadcrumbActive(2);
    } else {
      router.push('/carrinho');
    }
  }, [router, clearCart, clearPayer]);

  const getCep = useCallback(async (value: string) => {
    try {
      formRef.current.setFieldValue('street', 'Carregando...');
      formRef.current.setFieldValue('city', 'Carregando...');
      formRef.current.setFieldValue('state', 'Carregando...');

      const newCep = await cep(value);

      formRef.current.setFieldValue('street', newCep.street);
      formRef.current.setFieldValue('city', newCep.city);
      formRef.current.setFieldValue('state', newCep.state);

      formRef.current.setFieldError('zipCode', undefined);
    } catch (err) {
      formRef.current.setFieldError('zipCode', undefined);
      formRef.current.setFieldError('zipCode', 'CEP Inválido');

      formRef.current.setFieldValue('street', '');
      formRef.current.setFieldValue('city', '');
      formRef.current.setFieldValue('state', '');
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [breadcrumbActive]);

  const handleSubmit = useCallback(
    async (data: CheckoutFormData) => {
      try {
        formRef.current?.setErrors({});

        setLoading(true);

        const schema = Yup.object().shape({
          name: Yup.string()
            .test('name-teste', 'Nome Inválido', () => {
              const re = new RegExp(/[A-Za-z]/);

              const nameValid = re.test(data.name);

              return nameValid;
            })
            .required('Nome é obrigatório'),
          surname: Yup.string()
            .test('surname-teste', 'Sobrenome Inválido', () => {
              const re = new RegExp(/[A-Za-z]/);

              const surnameValid = re.test(data.surname);

              return surnameValid;
            })
            .required('Sobrenome é obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          phone: Yup.string()
            .test('phone-teste', 'Telefone Inválido', () => {
              const re = new RegExp(/\(\d{2,}\) \d{4,}-\d{4}/);

              const phoneValid = re.test(data.phone);

              return phoneValid;
            })
            .required('Telefone é obrigatório'),
          cpf: Yup.string()
            .test('cpf-teste', 'CPF Inválido', () => {
              const re = new RegExp(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/);

              const cpfValid = re.test(data.cpf);

              return cpfValid;
            })
            .required('CPF é obrigatório'),
          zipCode: Yup.string().test(
            'zipCode-teste',
            'CEP Inválido',
            async () => {
              try {
                await cep(data.zipCode);

                return true;
              } catch (err) {
                return false;
              }
            },
          ),
          number: Yup.number().typeError('Número é obrigatório').required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const payer = {
          name: data.name,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          cpf: data.cpf,
          zipCode: data.zipCode,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          country: data.country,
        };

        const payerStorage = JSON.parse(
          localStorage.getItem('@AnimalBuddy:payer'),
        );

        let orderId = '';

        if (payerStorage) {
          orderId = payerStorage.orderIdString;
        }

        const response = await api.post('/checkout/create', {
          items: cart,
          payer,
          orderId,
        });

        createPayer({ ...payer, orderIdString: response.data.orderIdString });

        setLoading(false);
        setBreadcrumbActive(3);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro inesperado!',
            description:
              'Um erro inesperado aconteceu, tente novamente mais tarde.',
          });
        }

        console.log(err);
        setLoading(false);
      }
    },
    [cart, createPayer, addToast],
  );

  const handleGoToPayment = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.post('/checkout', {
        items: cart.map((item) => {
          return {
            id: item._id,
            title: item.title,
            description: item.description,
            picture_url: item.imageUrl,
            quantity: item.qtd,
            unit_price: item.price,
          };
        }),
        payer: {
          name: payerData.name,
          surname: payerData.surname,
          email: payerData.email,
          phone: payerData.phone,
          cpf: payerData.cpf,
          zipCode: payerData.zipCode,
          street: payerData.street,
          number: payerData.number,
          complement: payerData.complement,
          city: payerData.city,
          state: payerData.state,
          country: payerData.country,
        },
        orderId: payerData.orderIdString,
      });

      window.location.href = response.data.sandbox_init_point;
      setLoading(false);
      clearCart();
      clearPayer();
    } catch (err) {
      setLoading(false);

      addToast({
        type: 'error',
        title: 'Erro inesperado!',
        description:
          'Um erro inesperado aconteceu, tente novamente mais tarde.',
      });
      console.log(err);
    }
  }, [cart, payerData, clearCart, clearPayer, addToast]);

  if (!showCheckout) {
    return <></>;
  }

  return (
    <>
      <SEO title="Checkout" description="" image="/logo_seo.png" />

      <Header closeMenu />

      <Container>
        <Breadcrumb>
          <ul>
            <BreadcrumbLi active={breadcrumbActive === 1}>
              <Link href="/carrinho">
                <a>Carrinho</a>
              </Link>
              <IoIosArrowForward color="#333" />
            </BreadcrumbLi>
            <BreadcrumbLi
              active={breadcrumbActive === 2}
              onClick={() => setBreadcrumbActive(2)}
            >
              Informações <IoIosArrowForward color="#333" />
            </BreadcrumbLi>
            <BreadcrumbLi
              active={breadcrumbActive === 3}
              onClick={() => formRef.current.submitForm()}
            >
              Resumo
            </BreadcrumbLi>
          </ul>
        </Breadcrumb>

        <ResumeCartArea>
          <ButtonCart type="button" onClick={() => setOpenCart(!openCart)}>
            <LeftSide openCart={openCart}>
              <MdShoppingCart size={20} color="#7239f2" />

              <span>
                {openCart ? 'Ocultar' : 'Exibir'} carrinho de compras{' '}
                <IoIosArrowDown color="#333" />
              </span>
            </LeftSide>
            <RightSide>
              <span>{totalPriceString}</span>
              <Installment>Ou apenas por 12x de {installmentPrice}</Installment>
            </RightSide>
          </ButtonCart>

          {openCart && (
            <OpenCartArea>
              <CartArea>
                {cart.map((item) => {
                  return <CartItem checkout key={item._id} item={item} />;
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

                <RightSideCart>
                  <TotalPrice>{totalPriceString}</TotalPrice>
                  <InstallmentCart>
                    Ou por apenas 12x de {installmentPrice}
                  </InstallmentCart>
                </RightSideCart>
              </TotalArea>
            </OpenCartArea>
          )}
        </ResumeCartArea>

        {breadcrumbActive === 2 && (
          <FormArea>
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={{
                name: payerData.name,
                surname: payerData.surname,
                email: payerData.email,
                phone: payerData.phone,
                cpf: payerData.cpf,
                zipCode: payerData.zipCode,
                street: payerData.street,
                number: payerData.number,
                complement: payerData.complement,
                city: payerData.city,
                state: payerData.state,
                country: 'Brasil',
              }}
            >
              <InfoArea>
                <h2>Informações pessoais</h2>

                <DoubleArea>
                  <InputArea>
                    <span>Nome</span>
                    <Input
                      name="name"
                      autoComplete="shipping given-name"
                      placeholder="Seu nome"
                    />
                  </InputArea>

                  <InputArea>
                    <span>Sobrenome</span>
                    <Input name="surname" placeholder="Seu sobrenome" />
                  </InputArea>
                </DoubleArea>

                <OneArea>
                  <span>E-mail</span>
                  <Input name="email" type="email" placeholder="Seu e-mail" />
                </OneArea>

                <DoubleArea>
                  <InputArea>
                    <span>Telefone (WhatsApp)</span>
                    <InputMask
                      name="phone"
                      type="tel"
                      mask="(99) 99999-9999"
                      placeholder="Seu telefone (com DDD)"
                    />
                  </InputArea>

                  <InputArea>
                    <span>CPF</span>
                    <InputMask
                      name="cpf"
                      type="tel"
                      mask="999.999.999-99"
                      placeholder="Seu CPF"
                    />
                  </InputArea>
                </DoubleArea>
              </InfoArea>

              <AddressArea>
                <h2>Endereço de entrega</h2>

                <DoubleArea>
                  <InputArea>
                    <span>CEP</span>
                    <InputMask
                      name="zipCode"
                      type="tel"
                      mask="99999-999"
                      placeholder="Seu CEP"
                      getCep={getCep}
                    />
                  </InputArea>

                  <InputArea>
                    <span>Rua/Avenida</span>
                    <Input name="street" disabled placeholder="Rua/Avenida" />
                  </InputArea>
                </DoubleArea>

                <DoubleArea>
                  <InputArea>
                    <span>Número</span>
                    <Input
                      name="number"
                      type="number"
                      placeholder="Número da casa"
                    />
                  </InputArea>

                  <InputArea>
                    <span>Complemento</span>
                    <Input
                      name="complement"
                      placeholder="Apartamento, bloco etc (Opcional)"
                    />
                  </InputArea>
                </DoubleArea>

                <DoubleArea>
                  <InputArea>
                    <span>Cidade</span>
                    <Input name="city" disabled placeholder="Cidade" />
                  </InputArea>

                  <InputArea>
                    <span>Estado</span>
                    <Input name="state" disabled placeholder="Estado" />
                  </InputArea>
                </DoubleArea>

                <OneArea>
                  <InputArea>
                    <InputArea>
                      <span>País</span>
                      <Input name="country" disabled placeholder="Ex: Brasil" />
                    </InputArea>
                  </InputArea>
                </OneArea>
              </AddressArea>

              <ButtonsArea>
                <ButtonBack
                  type="button"
                  onClick={() => router.push('/carrinho')}
                >
                  <IoIosArrowForward color="#333" />
                  Voltar ao carrinho
                </ButtonBack>

                <NextButton type="submit" loading={loading}>
                  CONTINUAR
                </NextButton>
              </ButtonsArea>
            </Form>
          </FormArea>
        )}

        {breadcrumbActive === 3 && (
          <>
            <InfoResumoArea>
              <PersonalArea>
                <LeftSpan>Contato</LeftSpan>
                <MidSpan>
                  {payerData.name} {payerData.surname}, {payerData.email},{' '}
                  {payerData.phone}
                </MidSpan>
                <RightButton onClick={() => setBreadcrumbActive(2)}>
                  Alterar
                </RightButton>
              </PersonalArea>

              <AddressInfoArea>
                <LeftSpan>Enviar para</LeftSpan>
                <MidSpan>
                  {payerData.street}, {payerData.number}
                  {payerData.complement && `, ${payerData.complement}`},{' '}
                  {payerData.city}, {payerData.country} - {payerData.zipCode}
                </MidSpan>
                <RightButton onClick={() => setBreadcrumbActive(2)}>
                  Alterar
                </RightButton>
              </AddressInfoArea>

              <FreteInfoArea>
                <LeftSpan>Método</LeftSpan>
                <MidSpan frete>Frete Grátis</MidSpan>
              </FreteInfoArea>
            </InfoResumoArea>

            <PaymentArea>
              <h2>Pagamento</h2>

              <p>
                Todas as transações são seguras e criptografadas. Ao clicar em{' '}
                <strong>FINALIZAR COMPRA</strong> você será redirecionado para o
                serviço do <strong>MercadoPago</strong> para que possa concluir
                o pedido.
              </p>

              <MercadoPagoLogoArea>
                <Image
                  src="/selo_mercadopago.png "
                  alt="Logo Mercago Pago"
                  width={480}
                  height={195}
                />
              </MercadoPagoLogoArea>
            </PaymentArea>

            <ButtonsArea>
              <ButtonBack type="button" onClick={() => setBreadcrumbActive(2)}>
                <IoIosArrowForward color="#333" />
                Voltar
              </ButtonBack>

              <NextButton
                type="button"
                finally
                onClick={handleGoToPayment}
                loading={loading}
              >
                FINALIZAR COMPRA
              </NextButton>
            </ButtonsArea>
          </>
        )}
      </Container>

      <FAB />
      <Footer />
    </>
  );
};

export default Checkout;
