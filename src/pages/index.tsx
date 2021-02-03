import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import Product from '../components/Product';

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
  OfferArea,
  TopOfferArea,
  ProductsArea,
  SeeMoreArea,
  Footer,
  Divider,
  Content,
  Left,
  Mid,
  Right,
  RedesSociais,
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

        <OfferArea>
          <TopOfferArea>
            <h2>OFERTAS</h2>
          </TopOfferArea>

          <ProductsArea>
            <Product />
            <Product />
            <Product />
          </ProductsArea>

          <SeeMoreArea>
            <Link href="/products" as="/produtos">
              <a>Ver tudo</a>
            </Link>
          </SeeMoreArea>
        </OfferArea>
      </Container>

      <Footer>
        <Divider />
        <Container>
          <Content>
            <Left>
              <Image src="/logo.svg" alt="Logo" width={200} height={30} />

              <span>© 2021, AnimalBuddy</span>
            </Left>
            <Mid>
              <span>MENU PRINCIPAL</span>

              <ul>
                <li>
                  <Link href="/products" as="/produtos">
                    <a>Produtos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>Perguntas Frequentes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/policies-terms" as="/politicas-e-termos">
                    <a>Políticas e Termos</a>
                  </Link>
                </li>
              </ul>

              <span>SIGA-NOS</span>

              <RedesSociais>
                <a href="">
                  <AiOutlineFacebook size={30} color="#7239f2" />
                </a>
                <a href="">
                  <AiOutlineInstagram size={30} color="#7239f2" />
                </a>
              </RedesSociais>
            </Mid>
            <Right>
              <span>CONTATO</span>

              <ul>
                <li>
                  <a href="tel:81971112339">WhatsApp: (81) 97111-2339</a>
                </li>
                <li>
                  <a href="malito:contato@animalbuddy.com.br">
                    E-mail: contato@animalbuddy.com.br
                  </a>
                </li>
              </ul>

              <Image src="/mercadopago.png" width={300} height={70} />
            </Right>
          </Content>
        </Container>
      </Footer>
    </>
  );
};

export default Home;
