import styled from 'styled-components';

export const ReviewArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  & + div {
    margin-top: 20px;
  }
`;

export const Mid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftSide = styled.div`
  text-align: justify;
  padding-right: 50px;

  h2 {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 5px;

    img {
      margin-left: 10px;
    }
  }

  span {
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 14px;
    color: #999;
  }

  p {
    margin-top: 20px;
  }
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
`;
