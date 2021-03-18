import React from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';
import FAB from '../components/FAB';
import Footer from '../components/Footer';

import { Container, ImageArea, Overflow } from '../styles/pages/TalkToUs';

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="Fale Conosco"
        description="Somos um petshop online que trabalha com amor para que você e seus pets tenham a melhor experiência em segurança e bem-estar. Por isso, mantemos nossas orelhas sempre em pé para captar o lançamento de produtos e levá-los até você."
        image="/logo_seo.png"
      />

      <Header closeMenu />
      <Container>
        <ImageArea>
          <Overflow>
            <h1>Fale Conosco</h1>
          </Overflow>
        </ImageArea>

        <p>
          Para poder entrar em contato conosco, basta escolher uma das opções
          abaixo:
        </p>

        <p>
          WhatsApp:{' '}
          <a
            href="https://wa.me/5581971112339"
            target="_blank"
            rel="noreferrer"
          >
            (81) 97111-2339
          </a>
        </p>
        <p>
          E-mail:{' '}
          <a href="mailto:contato@animalbuddy.com.br">
            contato@animalbuddy.com.br
          </a>
        </p>
      </Container>

      <FAB />
      <Footer />
    </>
  );
};

export default AboutUs;
