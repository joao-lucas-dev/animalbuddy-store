import React from 'react';
import Link from 'next/link';

import {
  Container,
  PromoArea,
  PriceArea,
  OldPrice,
  NewPrice,
  EconomyArea,
} from './styles';

interface IProduct {
  _id: string;
  title: string;
  price: number;
  oldPrice: number;
  priceString: string;
  oldPriceString: string;
  discount: number;
  discountString: string;
  images_url: string[];
  slug: string;
  imageName: string;
}

interface IProductData {
  item: IProduct;
}

const Product: React.FC<IProductData> = ({ item }) => {
  return (
    <Container>
      <Link href={`/products/${item.slug}`} as={`/produtos/${item.slug}`}>
        <a>
          {item.discount > 0 && (
            <PromoArea>
              <span>PROMOÇÃO</span>
            </PromoArea>
          )}

          <img src={item.images_url[0]} alt={item.imageName} />

          <h3>{item.title}</h3>

          <PriceArea>
            {item.discount > 0 && (
              <OldPrice>
                De <s>{item.oldPriceString}</s>
              </OldPrice>
            )}

            <NewPrice>Por: {item.priceString}</NewPrice>

            {item.discount > 0 && (
              <EconomyArea>
                <span>economia {item.discountString}</span>
              </EconomyArea>
            )}
          </PriceArea>

          <div className="details">
            <button type="button">Ver detalhes</button>
          </div>
        </a>
      </Link>
    </Container>
  );
};

export default Product;
