import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { MdRemove, MdAdd } from 'react-icons/md';

import { useCart } from '../../context/cart';

import {
  Container,
  LeftSide,
  Title,
  RightSide,
  VariantQtd,
  QtdArea,
  LessButton,
  Mid,
  PlusButton,
  Price,
} from './styles';

interface IProduct {
  _id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  qtd: number;
  price: number;
  priceString: string;
  color: string;
  size: string;
  model: string;
}

interface ICartItem {
  item: IProduct;
  checkout?: boolean;
}

const CartItem: React.FC<ICartItem> = ({ item, checkout }) => {
  const { removeProductFromCart, updateQtdProduct } = useCart();

  const [qtd, setQtd] = useState(1);

  useEffect(() => {
    if (item.qtd) {
      setQtd(item.qtd);
    }
  }, [item]);

  const handleChangeQtd = useCallback(
    (type: string) => {
      let newQtd = qtd;

      if (type === 'remove') {
        newQtd -= 1;

        if (newQtd < 1) {
          setQtd(1);
          updateQtdProduct(item, 1);
        } else {
          setQtd(newQtd);
          updateQtdProduct(item, newQtd);
        }
      } else {
        newQtd += 1;
        setQtd(newQtd);
        updateQtdProduct(item, newQtd);
      }
    },
    [qtd, updateQtdProduct, item],
  );

  return (
    <Container>
      <LeftSide>
        <img src={item.imageUrl} alt="Produto" />

        <Title>
          <Link href={`/produtos/${item.slug}`}>
            <a>
              {item.title} {checkout && `x ${qtd}`}
            </a>
          </Link>

          <span>
            {item.color} / {item.size !== '' ? item.size : item.model}
          </span>

          {!checkout && (
            <button type="button" onClick={() => removeProductFromCart(item)}>
              Remover
            </button>
          )}
        </Title>
      </LeftSide>

      <RightSide>
        {!checkout && (
          <VariantQtd>
            <QtdArea>
              <LessButton onClick={() => handleChangeQtd('remove')}>
                <MdRemove />
              </LessButton>
              <Mid>
                <span>{qtd}</span>
              </Mid>
              <PlusButton onClick={() => handleChangeQtd('add')}>
                <MdAdd />
              </PlusButton>
            </QtdArea>
          </VariantQtd>
        )}

        <Price>{item.priceString}</Price>
      </RightSide>
    </Container>
  );
};

export default CartItem;
