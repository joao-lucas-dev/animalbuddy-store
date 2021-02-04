import styled from 'styled-components';
import { shade } from 'polished';

interface IItem {
  showInPhoneMode: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
`;

export const CarouselDesk = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const CarouselPhone = styled.div`
  @media (min-width: 426px) {
    display: none;
  }
`;

export const InfoArea = styled.section`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 625px) {
    justify-content: space-around;
  }
`;

export const Item = styled.div<IItem>`
  display: flex;
  align-items: center;

  @media (max-width: 625px) {
    display: ${(props) => (props.showInPhoneMode ? 'flex' : 'none')};
  }
`;

export const LeftSide = styled.div`
  margin-right: 10px;
`;

export const ImageInfoDesk = styled.div`
  display: block;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ImageInfoPhone = styled.div`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    color: #7239f2;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 625px) {
      font-size: 14px;
    }
  }

  span:nth-child(2) {
    font-size: 12px;
    font-weight: 600;

    @media (max-width: 625px) {
      font-size: 10px;
      font-weight: 500;
    }
  }
`;

export const OfferArea = styled.section`
  margin-top: 40px;
`;

export const TopOfferArea = styled.div`
  border-bottom: 1px solid #dddee2;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const ProductsArea = styled.div`
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

  a {
    width: 100%;
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
