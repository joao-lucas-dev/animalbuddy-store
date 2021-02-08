import styled, { css } from 'styled-components';

interface IImageDiv {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    user-select: none;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const ImagesArea = styled.div`
  margin: 0 10px;
`;

export const ImageDiv = styled.div<IImageDiv>`
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition-duration: 1s ease;
  position: relative;

  ${(props) =>
    props.active &&
    css`
      transition-duration: 1s;
      transform: scale(1.08);
    `}

  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
`;
