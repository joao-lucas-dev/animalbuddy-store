import styled from 'styled-components';

import Button from '../../components/Button';

export const EmptyCartArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;

  @media (max-width: 425px) {
    padding: 0;
    padding-top: 40px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: #333;
    margin-bottom: 22px;

    @media (max-width: 425px) {
      font-size: 22px;
    }
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    margin-bottom: 30px;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const ButtonEmpty = styled(Button)`
  width: 25% !important;

  @media (max-width: 425px) {
    width: 60% !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
  padding: 120px 0;

  @media (max-width: 425px) {
    padding: 0 20px;
    padding-top: 40px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: #333;

    @media (max-width: 425px) {
      font-size: 24px;
    }
  }
`;

export const TopCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 26px;

    @media (max-width: 425px) {
      font-size: 16px;
    }
  }

  button {
    border: 0;
    background: transparent;
    color: #7239f2;
    transition: all 0.2s linear;
    font-size: 16px;

    @media (max-width: 425px) {
      font-size: 14px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const CartArea = styled.div`
  margin-top: 20px;
  border: 1px solid #eee;
`;

export const FreteArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;

  margin-top: 20px;

  span {
    font-size: 18px;
    color: #333;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const FretePrice = styled.div`
  font-size: 20px;
  color: #333;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const TotalArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  span {
    font-size: 22px;
    color: #333;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 18px;
    }
  }
`;

export const TotalPrice = styled.div`
  font-size: 26px;
  color: #000;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 22px;
  }
`;

export const FinallyArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonFinally = styled(Button)`
  @media (max-width: 425px) {
    width: 100% !important;
  }
`;
