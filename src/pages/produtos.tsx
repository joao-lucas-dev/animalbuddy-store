import React, { useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { IoIosArrowForward } from 'react-icons/io';

import Header from '../components/Header';
import Product from '../components/Product';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

import api from '../services';

import {
  Container,
  ProductsArea,
  TopProductsArea,
  OrderArea,
  TopOrderArea,
  BottomOrderArea,
  SelectArea,
  ProductsContent,
  SeeMoreArea,
  LoadingArea,
} from '../styles/pages/Products';

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
  reviewsCount: number;
  averageReviews: number;
}

interface IProducts {
  products: IProduct[];
}

const Products: React.FC<IProducts> = ({ products }) => {
  const [page, setPage] = useState(0);
  const [orderType, setOrderType] = useState('recentDate');
  const [newProducts, setNewProducts] = useState(products);
  const [hideSeeMore, setHideSeeMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeOrder = useCallback(async (e) => {
    try {
      setLoading(true);
      const { value } = e.target;

      const response = await api.get(
        `/store/products?page=0&limit=6&order=${value}`,
      );

      setNewProducts(response.data);
      setOrderType(value);
      setHideSeeMore(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const handleChangePage = useCallback(async () => {
    try {
      const newPage = page + 1;

      const response = await api.get(
        `/store/products?page=${newPage}&limit=6&order=${orderType}`,
      );

      if (response.data.length === 0) {
        setHideSeeMore(true);
      } else {
        setNewProducts((state) => state.concat(...response.data));
        setPage(newPage);
      }
    } catch (err) {
      console.log(err);
    }
  }, [page, orderType]);

  return (
    <>
      <SEO
        title="Produtos"
        image="logo_seo.png"
        description="Todos os produtos para seu PET em um só lugar. Venha conferir!"
      />

      <Header closeMenu />

      <Container>
        <ProductsArea>
          <TopProductsArea>
            <h2>PRODUTOS</h2>

            <OrderArea>
              <TopOrderArea>
                <span>Ordernar por:</span>
              </TopOrderArea>
              <BottomOrderArea>
                <SelectArea>
                  <select onClick={handleChangeOrder}>
                    <option value="recentDate">Mais recentes</option>
                    <option value="oldestDate">Mais antigos</option>
                    <option value="biggestPrice">Maior preço</option>
                    <option value="lowestPrice">Menor preço</option>
                  </select>
                  <IoIosArrowForward />
                </SelectArea>
              </BottomOrderArea>
            </OrderArea>
          </TopProductsArea>

          {loading ? (
            <LoadingArea>
              <h1>Carregando...</h1>
            </LoadingArea>
          ) : (
            <>
              <ProductsContent>
                {newProducts.map((item: IProduct) => {
                  return <Product key={item._id} item={item} />;
                })}
              </ProductsContent>

              {!hideSeeMore && (
                <SeeMoreArea>
                  <button type="button" onClick={handleChangePage}>
                    Ver mais
                  </button>
                </SeeMoreArea>
              )}
            </>
          )}
        </ProductsArea>
      </Container>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<IProducts> = async () => {
  const response = await api.get(
    '/store/products?page=0&limit=6&order=recentDate',
  );

  return {
    props: {
      products: response.data,
    },
    revalidate: 120,
  };
};

export default Products;
