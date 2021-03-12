import styled from 'styled-components';

interface IContainer {
  productPage: boolean;
}

export const Container = styled.div<IContainer>`
  img {
    width: ${(props) => (props.productPage ? '18px' : '10px')} !important;
    height: ${(props) => (props.productPage ? '18px' : '10px')} !important;

    & + img {
      margin-left: ${(props) => (props.productPage ? '5px' : '2px')};
    }
  }
`;
