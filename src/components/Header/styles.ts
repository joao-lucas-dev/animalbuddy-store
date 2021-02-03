import styled from 'styled-components';

export const HeaderTop = styled.div`
  background: #7239f2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 40px;

  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;

    @media (max-width: 925px) {
      font-size: 18px;
    }

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const Container = styled.header`
  padding: 33px 35px;
  border-bottom: 1px solid #dddee2;

  @media (max-width: 925px) {
    padding: 10px 20px;
  }

  @media (max-width: 320px) {
    padding: 10px 5px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    margin-left: 26px;

    @media (max-width: 925px) {
      display: none;
    }

    li {
      font-size: 18px;
      color: #999;
      font-weight: 500;
      margin-right: 45px;
      cursor: pointer;
      transition: all 0.2s linear;

      a {
        color: #999;
      }

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const Toggle = styled.div`
  display: none;

  @media (max-width: 925px) {
    display: block;
  }
`;

export const RightSide = styled.div`
  display: flex;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  div {
    display: flex;
    align-items: center;
    border: 2px solid #dddee2;
    border-radius: 10px;
    padding: 8px 12px;

    @media (max-width: 425px) {
      padding: 6px 8px;
    }

    span {
      display: block;
      font-size: 18px;
      margin-left: 8px;
      color: #999;

      @media (max-width: 425px) {
        font-size: 16px;
      }
    }
  }
`;
