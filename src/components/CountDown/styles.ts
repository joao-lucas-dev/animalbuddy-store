import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #eae9e9;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
`;

export const StockArea = styled.div`
  @media (max-width: 425px) {
    display: none;
  }

  margin-top: 30px;
  margin-bottom: 30px;

  p {
    margin-bottom: 10px;
    font-size: 18px;

    span {
      color: #7239f2;
      font-weight: 500;
    }
  }
`;

export const ValueProgressBar = styled.div`
  width: 30%;
  height: 10px;
  background: #ffb900;
  border-radius: 10px;
  position: absolute;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.div`
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

export const MidSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #ff0000;
    font-size: 18px;

    @media (max-width: 465px) {
      text-align: center;
    }
  }
`;
