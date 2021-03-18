import React from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';
import FAB from '../components/FAB';
import Footer from '../components/Footer';

import { Container, ImageArea, Overflow } from '../styles/pages/AboutUs';

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="Quem somos"
        description="Somos um petshop online que trabalha com amor para que você e seus pets tenham a melhor experiência em segurança e bem-estar. Por isso, mantemos nossas orelhas sempre em pé para captar o lançamento de produtos e levá-los até você."
        image="/logo_seo.png"
      />

      <Header closeMenu />
      <Container>
        <ImageArea>
          <Overflow>
            <h1>Quem somos</h1>
          </Overflow>
        </ImageArea>

        <p>
          Somos um petshop online que trabalha com amor para que você e seus
          pets tenham a melhor experiência em segurança e bem-estar. Por isso,
          mantemos nossas orelhas sempre em pé para captar o lançamento de
          produtos e levá-los até você.
        </p>

        <p>
          Estamos engajados na missão de oferecer o que há de mais estiloso,
          ergonômico e seguro em todas as categorias de produtos, sem nunca
          abrir mão da altíssima qualidade e durabilidade, visando sempre a
          excelência no atendimento que você e seu melhor amigo merecem.
        </p>

        <p>
          Convidamos você a dar um passeio em nosso perfil do Instagram{' '}
          <a
            href="https://www.instagram.com/animalbuddyoficial"
            target="_blank"
            rel="noreferrer"
          >
            (@animalbuddyoficial)
          </a>{' '}
          e, assim, visualizar os depoimentos dos nossos PetClientes mega
          satisfeitos e suas experiências incríveis, além de todo o nosso
          conteúdo.
        </p>
      </Container>

      <FAB />
      <Footer />
    </>
  );
};

export default AboutUs;
