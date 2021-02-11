import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface IButton {
  loading?: boolean;
  miniWidth?: boolean;
  halfWidth?: boolean;
  phoneMode?: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonContainer = styled.button<IButton>`
  background: #7239f2;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  font-weight: 500;
  transition: background 0.2s;
  font-weight: 500;
  font-size: 16px;

  ${(props) =>
    props.miniWidth &&
    css`
      width: 18%;
      height: 46px;
    `}

  ${(props) =>
    props.halfWidth &&
    css`
      width: 50%;
      height: 46px;
    `}


    ${(props) =>
    props.phoneMode &&
    css`
      @media (max-width: 425px) {
        height: 48px;
        font-size: 14px;
      }
    `}

    ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  &:hover {
    background: ${shade(0.2, '#7239f2')};
  }
`;
