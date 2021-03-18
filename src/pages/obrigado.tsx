import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import * as fbq from '../lib/fpixel';

import api from '../services';

import Header from '../components/Header';
import FAB from '../components/FAB';
import Footer from '../components/Footer';

import { Container, ImageArea, Overflow } from '../styles/pages/ThanksPage';

interface IThanksPage {
  showPage: boolean;
  orderId: string | string[];
}

const ThanksPage: NextPage<IThanksPage> = ({ showPage, orderId }) => {
  const router = useRouter();

  const loadTotalPrice = useCallback(async () => {
    try {
      const response = await api.get(`/checkout/order/${orderId}/totalprice`);

      fbq.event('Purchase', {
        value: response.data.totalPrice,
        currency: 'BRL',
      });
    } catch (err) {
      console.log(err);
    }
  }, [orderId]);

  useEffect(() => {
    router.prefetch('/');

    if (!showPage) {
      router.push('/');
    } else {
      loadTotalPrice();
    }
  }, [router, showPage, loadTotalPrice]);

  if (!showPage) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Obrigado pela compra | AnimalBuddy</title>
      </Head>

      <Header closeMenu />
      <Container>
        <ImageArea>
          <Overflow>
            <h1>Obrigado pela compra!</h1>
          </Overflow>
        </ImageArea>

        <p>
          Nós da AnimalBuddy agradecemos a confiança. Em seguida você irá
          receber um e-mail com mais informações do seu pedido.
        </p>

        <p>
          Caso tenha dúvidas, entre em contato conosco via WhatsApp{' '}
          <a
            href="https://wa.me/5581971112339?text=Olá,%20gostaria%20de%20tirar%20dúvidas%20sobre%20meu%20pedido."
            target="_blank"
            rel="noreferrer"
          >
            (81) 97111-2339
          </a>{' '}
          ou pelo e-mail:{' '}
          <a href="mailto:contato@animalbuddy.com.br">
            contato@animalbuddy.com.br.
          </a>
        </p>
      </Container>

      <FAB />
      <Footer />
    </>
  );
};

ThanksPage.getInitialProps = async ({ query }) => {
  const { collection_status, external_reference } = query;

  return {
    showPage:
      collection_status === 'approved' || collection_status === 'pending',
    orderId: external_reference,
  };
};

export default ThanksPage;
