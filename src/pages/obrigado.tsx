import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import * as fbq from '../lib/fpixel';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, ImageArea, Overflow } from '../styles/pages/ThanksPage';

interface IThanksPage {
  showPage: boolean;
}

const ThanksPage: NextPage<IThanksPage> = ({ showPage }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');

    if (!showPage) {
      router.push('/');
    } else {
      fbq.event('Purchase', { value: 120.0, currency: 'BRL' });
    }
  }, [router, showPage]);

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

      <Footer />
    </>
  );
};

ThanksPage.getInitialProps = async ({ query }) => {
  const { collection_status } = query;

  return {
    showPage: collection_status === 'approved',
  };
};

export default ThanksPage;
