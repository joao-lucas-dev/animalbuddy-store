import React, { useCallback } from 'react';
import { MdShoppingCart, MdMenu } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Container,
  HeaderTop,
  Menu,
  LeftSide,
  Toggle,
  RightSide,
  Cart,
} from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  const handleGoToCart = useCallback(() => {
    router.push('/cart', '/carrinho');
  }, [router]);

  return (
    <>
      <HeaderTop>
        <h2>FRETE GRÁTIS PARA TODO BRASIL</h2>
      </HeaderTop>
      <Container>
        <Menu>
          <Toggle>
            <MdMenu size={30} color="#999" />
          </Toggle>

          <LeftSide>
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  alt="AnimalBuddy"
                  width={200}
                  height={30}
                />
              </a>
            </Link>

            <ul>
              <li>
                <Link href="/products" as="/produtos">
                  <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>Perguntas frequentes</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Política de Frete</a>
                </Link>
              </li>
            </ul>
          </LeftSide>

          <RightSide>
            <Cart onClick={handleGoToCart}>
              <div>
                <MdShoppingCart size={18} color="#7239f2" />
                <span>0</span>
              </div>
            </Cart>
          </RightSide>
        </Menu>
      </Container>
    </>
  );
};

export default Header;
