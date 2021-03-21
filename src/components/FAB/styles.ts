import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

interface IContanier {
  isProduct?: boolean;
}

export const Container = styled.div<IContanier>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25d366;
  transition: all 0.2s linear;
  z-index: 9999;

  &:hover {
    background: #1d9048;
  }

  @media (max-width: 425px) {
    width: ${(props) => props.isProduct && '50px'};
    height: ${(props) => props.isProduct && '50px'};
    margin-bottom: ${(props) => props.isProduct && '130px'};

    svg {
      font-size: ${(props) => props.isProduct && '35px'};
    }
  }
`;

export const Icon = styled(FaWhatsapp)`
  color: #fff;
  font-size: 42px;
`;
