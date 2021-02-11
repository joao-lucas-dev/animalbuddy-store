import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  removeError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #e1e3e5;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    !props.removeError &&
    css`
      border-color: #ff0000;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #7239f2;
      border-color: #7239f2;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #7239f2;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    font-weight: 500;

    &::placeholder {
      font-weight: normal;
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0 !important;
  }

  span {
    background: #ff0000;
    color: #fff;

    &::before {
      border-color: #ff0000 transparent;
    }
  }
`;
