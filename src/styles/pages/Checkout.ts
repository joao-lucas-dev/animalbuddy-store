import styled, { css } from 'styled-components';

import Button from '../../components/Button';

interface IBreadcrumbLi {
  active?: boolean;
}

interface ILeftSide {
  openCart?: boolean;
}

interface IMidSpan {
  frete?: boolean;
}

interface INextButton {
  finally?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Breadcrumb = styled.div`
  ul {
    display: flex;
    align-items: center;
  }
`;

export const BreadcrumbLi = styled.li<IBreadcrumbLi>`
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  transition: all 0.2s linear;
  cursor: pointer;

  a {
    color: #000;
  }

  &:hover {
    opacity: 1;
  }

  svg {
    margin-left: 10px;
  }

  & + li {
    margin-left: 10px;
  }
`;

export const ResumeCartArea = styled.div`
  margin-top: 20px;
`;

export const ButtonCart = styled.button`
  display: flex;

  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
  background: transparent;
  width: 100%;
  padding: 18px;

  @media (max-width: 578px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div<ILeftSide>`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 16px;
    color: #333;

    @media (max-width: 425px) {
      font-size: 13px;
    }

    svg {
      margin-left: 10px;
      transform: ${(props) => (props.openCart ? 'rotate(180deg)' : '')};
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 578px) {
    align-items: center;
    margin-top: 10px;
  }

  span {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 20px;
    color: #333;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

export const Installment = styled.span`
  font-size: 16px !important;
  font-weight: normal !important;

  @media (max-width: 425px) {
    font-size: 14px !important;
  }
`;

export const CartArea = styled.div`
  border-bottom: 1px solid #eee;
`;

export const FreteArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;

  margin-top: 20px;

  span {
    font-size: 18px;
    color: #333;
    font-weight: 500;
  }
`;

export const FormArea = styled.div`
  margin-top: 20px;
`;

export const InfoArea = styled.div`
  margin-top: 20px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }

  span {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`;

export const OneArea = styled.div`
  margin-bottom: 10px;
`;

export const DoubleArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const InputArea = styled.div`
  width: 100%;

  & + div {
    margin-left: 20px;

    @media (max-width: 500px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export const AddressArea = styled.div`
  margin-top: 20px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }

  span {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`;

export const ButtonsArea = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.6;
  }

  svg {
    margin-right: 5px;
    transform: rotate(180deg);
  }
`;

export const NextButton = styled(Button)<INextButton>`
  width: ${(props) =>
    props.finally ? '200px !important' : '130px !important'};
`;

export const InfoResumoArea = styled.div`
  border: 1px solid #eee;
  padding: 0 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const PersonalArea = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSpan = styled.span`
  font-size: 16px;
  color: #666;

  @media (max-width: 465px) {
    font-size: 14px;
  }
`;

export const MidSpan = styled.div<IMidSpan>`
  font-size: 16px;
  color: #333;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  ${(props) =>
    props.frete &&
    css`
      display: block;
      width: 100%;
      text-align: center;
    `}

  @media (max-width: 465px) {
    padding: 0 20px;
    font-size: 14px;
  }
`;

export const RightButton = styled.button`
  font-size: 14px;
  color: #7239f2;
  border: 0;
  background: transparent;
  transition: all 0.2s linear;

  @media (max-width: 465px) {
    font-size: 12px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const AddressInfoArea = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FreteInfoArea = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
`;

export const PaymentArea = styled.div`
  margin-top: 20px;

  @media (max-width: 425px) {
    padding: 0 20px;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #333;
    font-weight: 500;
    margin-bottom: 10px;

    @media (max-width: 425px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    text-align: justify;
    line-height: 22px;

    @media (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
