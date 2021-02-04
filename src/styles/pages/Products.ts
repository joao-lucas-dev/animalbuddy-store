import styled from 'styled-components';
import { shade } from 'polished';

interface IMenuDropDown {
  openOrderMenu: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
`;

export const ProductsArea = styled.section`
  margin-top: 40px;
`;

export const TopProductsArea = styled.div`
  border-bottom: 1px solid #dddee2;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1090px) {
    padding: 0 10px;
  }

  @media (max-width: 425px) {
    border: none;
  }

  h2 {
    color: #7239f2;
    font-size: 26px;
    font-weight: 600;

    @media (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

export const OrderArea = styled.div`
  position: relative;
`;

export const TopOrderArea = styled.div`
  span {
    color: #666;
    font-size: 12px;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 10px;
    }
  }
`;

export const BottomOrderArea = styled.div`
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const MenuDropDown = styled.div<IMenuDropDown>`
  position: absolute;
  background: #fff;
  z-index: 10;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  border-radius: 5px;
  display: ${(props) => (props.openOrderMenu ? 'block' : 'none')};

  ul {
    width: 130px;

    li {
      padding: 10px 16px;
      cursor: pointer;
      transition: all 0.2s linear;

      & + li {
        border-top: 1px solid #ccc;
      }

      &:hover {
        background: #f4f4f4;
      }

      button {
        border: 0;
        background: transparent;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;

export const ProductsContent = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  row-gap: 40px;

  @media (max-width: 860px) {
    grid-template-columns: auto auto;
    justify-content: space-around;
  }

  @media (max-width: 620px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const SeeMoreArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0 65px;

  button {
    width: 100%;
    border: 0;
    max-width: 720px;
    height: 40px;
    background: #7239f2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    border-radius: 5px;
    transition: all 0.2s linear;

    &:hover {
      background: ${shade(0.2, '#7239f2')};
    }
  }
`;
