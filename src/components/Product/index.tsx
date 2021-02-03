import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  PromoArea,
  PriceArea,
  OldPrice,
  NewPrice,
  EconomyArea,
} from './styles';

const Product: React.FC = () => {
  const router = useRouter();

  const handleSendToProductPage = useCallback(() => {
    router.push(
      '/products/caminha-cachorro-gato',
      '/produtos/caminha-cachorro-gato',
    );
  }, [router]);

  return (
    <Container onClick={handleSendToProductPage}>
      <PromoArea>
        <span>PROMOÇÃO</span>
      </PromoArea>

      <img
        src="https://images-all-products.s3.amazonaws.com/_34d28218379e9214bb80-cama.jpg"
        alt="Produto"
      />

      <h3>Cama muito bonita cheia de coisas hahaha massa dms</h3>

      <PriceArea>
        <OldPrice>
          De <s>89,00</s>
        </OldPrice>

        <NewPrice>Por: 59,99</NewPrice>

        <EconomyArea>
          <span>economia R$ 30,00</span>
        </EconomyArea>
      </PriceArea>

      <div className="details">
        <button type="button">Ver detalhes</button>
      </div>
    </Container>
  );
};

export default Product;
