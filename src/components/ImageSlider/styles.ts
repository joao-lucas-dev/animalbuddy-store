import styled from 'styled-components';

interface IButton {
  imgSelected: boolean;
  applyMarginLeft: boolean;
}

export const Button = styled.button<IButton>`
  border: ${(props) => (props.imgSelected ? '2px solid #9768FF' : 'none')};
  background: transparent;

  & + button {
    margin-left: ${(props) => (props.applyMarginLeft ? '60px' : '0')};
  }

  img {
    width: 100px;
    height: 100px;

    @media (max-width: 425px) {
      width: 70px;
      height: 70px;
    }
  }
`;
