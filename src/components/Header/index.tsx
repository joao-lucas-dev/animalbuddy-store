import React, { useState, useEffect, useCallback, memo } from 'react';
import { MdShoppingCart, MdMenu, MdClose } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useCart } from '../../context/cart';

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

interface IHeader {
  closeMenu: boolean;
}

const Header: React.FC<IHeader> = ({ closeMenu }) => {
  const router = useRouter();
  const { cart } = useCart();

  const [openMenu, setOpenMenu] = useState(false);

  const handleGoToCart = useCallback(() => {
    router.push('/carrinho');
  }, [router]);

  useEffect(() => {
    router.prefetch('/carrinho');
  }, [router]);

  useEffect(() => {
    setOpenMenu(false);
  }, [closeMenu]);

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
            <Link href="/" scroll>
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
                <Link href="/produtos" scroll>
                  <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/perguntas-frequentes" scroll>
                  <a>Perguntas frequentes</a>
                </Link>
              </li>
              <li>
                <Link href="/politicas-e-termos" scroll>
                  <a>Políticas e termos</a>
                </Link>
              </li>
            </ul>
          </LeftSide>

          <RightSide>
            <Cart onClick={handleGoToCart}>
              <div>
                <MdShoppingCart size={18} color="#7239f2" />
                <span>{cart.length}</span>
              </div>
            </Cart>
          </RightSide>
        </Menu>
      </Container>

      <MenuDropDown openMenu={openMenu}>
        <ul>
          <li>
            <Link href="/produtos" scroll>
              <a>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/perguntas-frequentes" scroll>
              <a>Perguntas frequentes</a>
            </Link>
          </li>
          <li>
            <Link href="/politicas-e-termos" scroll>
              <a>Políticas e termos</a>
            </Link>
          </li>
        </ul>
      </MenuDropDown>
    </>
  );
};

export default memo(Header);
