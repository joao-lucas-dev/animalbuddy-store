import styled from 'styled-components';

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

export const InfoArea = styled.div`
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
