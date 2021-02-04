import React, { useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { MdArrowDropDown } from 'react-icons/md';

import Header from '../components/Header';
import Product from '../components/Product';

import api from '../services';

import {
  Container,
  ProductsArea,
  TopProductsArea,
  OrderArea,
  TopOrderArea,
  BottomOrderArea,
  MenuDropDown,
  ProductsContent,
  SeeMoreArea,
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
}

interface IProducts {
  products: IProduct[];
}

const Products: React.FC<IProducts> = ({ products }) => {
  const [openOrderMenu, setOpenOrderMenu] = useState(false);
  const [page, setPage] = useState(0);
  const [nameOrder, setNameOrder] = useState('Mais recentes');
  const [orderType, setOrderType] = useState('recentDate');
  const [newProducts, setNewProducts] = useState(products);
  const [hideSeeMore, setHideSeeMore] = useState(false);

  const handleChangeOrder = useCallback(async (order: string, name: string) => {
    try {
      const response = await api.get(
        `/store/products?page=0&limit=6&order=${order}`,
      );

      setNewProducts(response.data);
      setNameOrder(name);
      setOpenOrderMenu(false);
      setOrderType(order);
      setHideSeeMore(false);
    } catch (err) {
      console.log(err);
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
      <Header closeMenu />
      <Container>
        <ProductsArea>
          <TopProductsArea>
            <h2>PRODUTOS</h2>

            <OrderArea>
              <TopOrderArea>
                <span>Ordernar por:</span>
              </TopOrderArea>
              <BottomOrderArea onClick={() => setOpenOrderMenu(!openOrderMenu)}>
                <span>
                  {nameOrder} <MdArrowDropDown size={20} color="#333" />
                </span>
              </BottomOrderArea>

              <MenuDropDown openOrderMenu={openOrderMenu}>
                <ul>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleChangeOrder('recentDate', 'Mais recentes');
                      }}
                    >
                      Mais recentes
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleChangeOrder('oldestDate', 'Mais antigos');
                      }}
                    >
                      Mais antigos
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleChangeOrder('biggestPrice', ' Maior preço');
                      }}
                    >
                      Maior preço
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleChangeOrder('lowestPrice', 'Menor preço');
                      }}
                    >
                      Menor preço
                    </button>
                  </li>
                </ul>
              </MenuDropDown>
            </OrderArea>
          </TopProductsArea>

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
        </ProductsArea>
      </Container>
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
    revalidate: 600,
  };
};

export default Products;
