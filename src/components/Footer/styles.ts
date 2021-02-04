import styled from 'styled-components';

export const Footer = styled.div`
  margin-top: 55px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  padding-top: 20px;

  @media (max-width: 770px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  height: 80px;
  background: #7239f2;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 770px) {
    grid-template-columns: auto;
    align-items: center;

    span {
      display: block;
      margin: 20px 0;
    }
  }
`;

export const Mid = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    display: block;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;

    & + span {
      margin-top: 10px;
    }
  }

  ul {
    margin-bottom: 20px;

    @media (max-width: 770px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    li {
      color: #7239f2;
      font-size: 15px;
      font-weight: 500;

      a {
        color: #7239f2;
        transition: all 0.2s linear;

        &:hover {
          opacity: 0.6;
        }
      }

      & + li {
        margin-top: 5px;
      }
    }
  }
`;

export const RedesSociais = styled.div`
  a {
    margin-right: 10px;
    transition: all 0.2s linear;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Right = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  span {
    display: block;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  ul {
    margin-bottom: 50px;

    @media (max-width: 770px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    li {
      a {
        display: block;
        font-size: 15px;
        color: #000;
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
  }
`;
