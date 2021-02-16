import React from 'react';
import { useRouter } from 'next/router';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Button from '../components/Button';

import { Container } from '../styles/pages/404';

const Error404: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <SEO
        title="Erro 404 - Página não encontrada"
        description=""
        image="/logo_seo.png"
      />

      <Header closeMenu />
      <Container>
        <h1>Ops! O conteúdo procurado não foi encontrado :(</h1>

        <p>Volte para a navegação para achar o que precisa</p>

        <Button halfWidth onClick={() => router.push('/')}>
          Voltar para Home
        </Button>
      </Container>
    </>
  );
};

export default Error404;
