import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import Header from '../components/Header';
import Product from '../components/Product';

import api from '../services';

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
} from '../styles/pages/Home';

interface IProduct {
  _id: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  priceString: string;
  oldPriceString: string;
  discountString: string;
  images_url: string[];
  slug: string;
  imageName: string;
}

interface IHome {
  products: IProduct[];
}

const Home: React.FC<IHome> = ({ products }) => {
  return (
    <>
      <Head>
        <title>AnimalBuddy - O Seu Petshop Preferido</title>
      </Head>

      <Header closeMenu />

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
            {products.map((item: IProduct) => {
              return <Product key={item._id} item={item} />;
            })}
          </ProductsArea>

          <SeeMoreArea>
            <Link href="/produtos" scroll>
              <a>Ver tudo</a>
            </Link>
          </SeeMoreArea>
        </OfferArea>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<IHome> = async () => {
  const response = await api.get(
    '/store/products?page=0&limit=6&order=recentDate',
  );

  return {
    props: {
      products: response.data,
    },
    revalidate: 600,
  };
};

export default Home;
