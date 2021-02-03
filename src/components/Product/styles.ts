import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
  width: 250px;
  cursor: pointer;

  img {
    width: 250px;
    height: 250px;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    text-align: justify;
    margin-top: 13px;
  }

  div.details {
    display: none;
    margin-top: 15px;

    button {
      width: 100%;
      height: 40px;
      border: none;
      background: #52e596;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border-radius: 5px;
      transition: all 0.2s linear;

      &:hover {
        background: ${shade(0.2, '#52e596')};
      }
    }
  }

  &:hover div.details {
    display: block;
  }
`;

export const PromoArea = styled.div`
  background: #ffb900;
  width: 100px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  span {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`;

export const OldPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const NewPrice = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #7239f2;
`;

export const EconomyArea = styled.div`
  border: 2px solid #ff1818;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 10px;

  span {
    color: #ff1818;
    font-size: 16px;
    font-weight: 500;
  }
`;
