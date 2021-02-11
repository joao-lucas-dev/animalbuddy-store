import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & + div {
    border-top: 1px solid #eee;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  img {
    width: 120px;
    height: 120px;

    @media (max-width: 780px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Title = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  a {
    font-size: 22px;
    font-weight: 500px;
    color: #333;

    @media (max-width: 780px) {
      font-size: 16px;
    }

    @media (max-width: 780px) {
      text-align: center;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: 14px;
    color: #666;
  }

  button {
    margin-top: 20px;
    border: 0;
    background: transparent;
    width: 40px;
    color: #7239f2;
    transition: all 0.2s linear;

    @media (max-width: 780px) {
      width: 100%;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const VariantQtd = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    margin-bottom: 30px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    margin-bottom: 5px;
  }
`;

export const QtdArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 48px;
  background: #f4f4f4;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

export const LessButton = styled.button`
  color: #000;
  cursor: pointer;
  transition: all 0.2s linear;
  border: 0;
  background: transparent;

  &:hover {
    opacity: 0.6;
  }
`;

export const Mid = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const PlusButton = styled.button`
  color: #000;
  cursor: pointer;
  transition: all 0.2s linear;
  border: 0;
  background: transparent;

  &:hover {
    opacity: 0.6;
  }
`;

export const Price = styled.span`
  display: block;
  margin-left: 80px;
  font-size: 18px;
  font-weight: 500;
  color: #555;

  @media (max-width: 780px) {
    margin-left: 0;
  }
`;
