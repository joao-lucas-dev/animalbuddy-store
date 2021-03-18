import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 30px;
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
  font-size: 26px;
  font-weight: 600;

  @media (max-width: 375px) {
    font-size: 24px;
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
    font-size: 15px;

    @media (max-width: 375px) {
      text-align: center;
    }
  }
`;
