import React, { useState, useCallback } from 'react';
import { MdShoppingCart, MdMenu, MdClose } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Container,
  HeaderTop,
  Menu,
  Toggle,
  LeftSide,
  RightSide,
  Cart,
  MenuDropDown,
} from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

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
          <Toggle onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <MdClose size={30} color="#999" />
            ) : (
              <MdMenu size={30} color="#999" />
            )}
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
                <Link href="/faq" as="/perguntas-frequentes">
                  <a>Perguntas frequentes</a>
                </Link>
              </li>
              <li>
                <Link href="/policies-terms" as="/politicas-e-termos">
                  <a>Políticas e termos</a>
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

      <MenuDropDown openMenu={openMenu}>
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
              <a>Políticas e termos</a>
            </Link>
          </li>
        </ul>
      </MenuDropDown>
    </>
  );
};

export default Header;
