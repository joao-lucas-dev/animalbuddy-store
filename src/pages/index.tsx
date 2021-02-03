import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  Container,
  CarouselDesk,
  CarouselPhone,
  InfoArea,
  Item,
  LeftSide,
  ImageInfoDesk,
  ImageInfoPhone,
  RightSide,
} from '../styles/pages/Home';

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

      <Container>
        <InfoArea>
          <Item showInPhoneMode>
            <LeftSide>
              <ImageInfoDesk>
                <Image src="/truck.svg" width={73} height={73} />
              </ImageInfoDesk>
              <ImageInfoPhone>
                <Image src="/truck.svg" width={41} height={41} />
              </ImageInfoPhone>
            </LeftSide>
            <RightSide>
              <span>Frete Grátis</span>
              <span>PARA TODO PAÍS</span>
            </RightSide>
          </Item>

          <Item showInPhoneMode>
            <LeftSide>
              <ImageInfoDesk>
                <Image src="/credit-card.svg" width={58} height={58} />
              </ImageInfoDesk>
              <ImageInfoPhone>
                <Image src="/credit-card.svg" width={31} height={31} />
              </ImageInfoPhone>
            </LeftSide>
            <RightSide>
              <span>Parcelamento</span>
              <span>EM ATÉ 12X</span>
            </RightSide>
          </Item>

          <Item showInPhoneMode={false}>
            <LeftSide>
              <Image src="/open-box.svg" width={57} height={57} />
            </LeftSide>
            <RightSide>
              <span>Entrega 100%</span>
              <span>SEGURA</span>
            </RightSide>
          </Item>
        </InfoArea>
      </Container>
    </>
  );
};

export default Home;
