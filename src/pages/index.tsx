import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>AnimalBuddy - O Seu Petshop Preferido</title>
      </Head>
    </Container>
  );
};

export default Home;
