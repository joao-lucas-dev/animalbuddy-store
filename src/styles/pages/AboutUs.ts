import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 425px) {
    margin: 0;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    text-align: justify;
    color: #333;
    line-height: 1.85;

    a {
      color: #7239f2;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 425px) {
      padding: 0 20px;
    }
  }
`;

export const ImageArea = styled.div`
  background-image: url('/banner_quem_somos.png');
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
`;

export const Overflow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 42px;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
