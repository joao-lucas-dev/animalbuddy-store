import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
  border: 1px solid red;
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
