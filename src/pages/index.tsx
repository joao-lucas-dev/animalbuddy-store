import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import { Container, CarouselDesk, CarouselPhone } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>AnimalBuddy - O Seu Petshop Preferido</title>
      </Head>

      <CarouselDesk>
        <CarouselProvider
          isPlaying
          interval={5000}
          naturalSlideWidth={100}
          naturalSlideHeight={30}
          totalSlides={2}
        >
          <Slider>
            <Slide index={0}>
              <Image layout="fill" src="/banner_40.png" />
            </Slide>
            <Slide index={1}>
              <Image layout="fill" src="/banner_safe.png" />
            </Slide>
          </Slider>
        </CarouselProvider>
      </CarouselDesk>

      <CarouselPhone>
        <CarouselProvider
          isPlaying
          interval={5000}
          naturalSlideWidth={100}
          naturalSlideHeight={69}
          totalSlides={2}
        >
          <Slider>
            <Slide index={0}>
              <Image layout="fill" src="/banner_40_phone.png" />
            </Slide>
            <Slide index={1}>
              <Image layout="fill" src="/banner_safe_phone.png" />
            </Slide>
          </Slider>
        </CarouselProvider>
      </CarouselPhone>
      {/*
      <Container>
        <div>fhdsufhsd</div>
      </Container> */}
    </>
  );
};

export default Home;
