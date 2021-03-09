import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

interface IImgArea {
  disableSpaceBetween: boolean;
}

interface IVariantQtd {
  phone?: string;
}

interface IButton {
  phone?: string;
}

interface IGraphTwo {
  porcentage: number;
}

interface IButtonAssesment {
  marginTop?: boolean;
}

export const FallbackDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  color: #222;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1090px;
  margin: 25px auto 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.div``;

export const CurrentImage = styled.img`
  width: 480px;
  height: 480px;

  @media (max-width: 426px) {
    width: 100%;
    height: 100%;
  }
`;

export const CarouselDiv = styled.div`
  padding: 0 25px;
  position: relative;
  display: none;

  @media (min-width: 426px) {
    display: block;
  }
`;

export const CarouselDivPhone = styled.div`
  padding: 0 25px;
  position: relative;
  display: none;

  @media (max-width: 425px) {
    display: block;
    padding: 0 32px;
  }
`;

export const ImgArea = styled.div<IImgArea>`
  margin-top: 40px;
  display: flex;
  justify-content: ${(props) =>
    props.disableSpaceBetween ? 'flex-start' : 'space-between'};
`;

export const ButtonBackCustom = styled(ButtonBack)<IButton>`
  position: absolute;
  top: ${(props) => (props.phone === 'true' ? '65px' : '85px')};
  left: ${(props) => (props.phone === 'true' ? '0' : '-10px')};
  border: none;
  background: transparent;
`;

export const ButtonNextCustom = styled(ButtonNext)<IButton>`
  position: absolute;
  top: ${(props) => (props.phone === 'true' ? '65px' : '85px')};
  right: ${(props) => (props.phone === 'true' ? '0' : '-10px')};
  border: none;
  background: transparent;
`;

export const RightSide = styled.div`
  width: 100%;
  max-width: 525px;
  margin-left: 85px;

  @media (max-width: 990px) {
    margin-left: 0;
    margin-top: 30px;
    padding: 0 20px;
  }

  @media (max-width: 340px) {
    padding: 0;
  }
`;

export const TitleArea = styled.div`
  border-bottom: 3px solid #000;
  padding-bottom: 8px;

  h1 {
    font-size: 26px;
    font-weight: 600;
  }
`;

export const ReviewArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 18px;
  transition: all 0.2s linear;

  span {
    font-size: 14px;
    color: #000;
    font-weight: 500;
    margin-left: 5px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const PriceArea = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const PromoArea = styled.div`
  width: 122px;
  height: 30px;
  background: #ffb900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  span {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const OldPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #222;
  margin-top: 22px;
`;

export const NewPrice = styled.span`
  font-size: 28px;
  font-weight: 500;
  color: #7239f2;
`;

export const EconomyArea = styled.div`
  width: 183px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff1818;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 8px;

  span {
    color: #ff1818;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const VariantsArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;

export const Variant = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    margin-bottom: 5px;
  }
`;

export const SelectArea = styled.div`
  width: 162px;
  height: 48px;
  background: #f4f4f4;
  border: none;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 155px;
  }

  select {
    position: absolute;
    -webkit-appearance: none;
    width: 100%;
    height: 48px;
    border: 0;
    background: transparent;
    padding: 10px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    z-index: 5;
  }

  svg {
    transform: rotate(90deg);
    margin-right: 10px;
  }
`;

export const VariantQtd = styled.div<IVariantQtd>`
  display: flex;
  flex-direction: column;

  @media (min-width: 426px) {
    display: ${(props) => (props.phone === 'true' ? 'none' : 'flex')};
  }

  @media (max-width: 425px) {
    display: ${(props) => (props.phone === 'true' ? 'flex' : 'none')};
    margin-right: 20px;
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
`;

export const LessButton = styled.button`
  color: #000;
  cursor: pointer;
  transition: all 0.2s linear;
  border: 0;
  padding: 5px;
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
  padding: 5px;
  background: transparent;

  &:hover {
    opacity: 0.6;
  }
`;

export const AddToCartArea = styled.div`
  margin-top: 25px;

  @media (max-width: 425px) {
    display: flex;
    align-items: flex-end;
  }
`;

export const DescriptionArea = styled.div`
  margin-top: 16px;
  padding-top: 10px;
  border-top: 1px solid #eeeeee;

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }

  p {
    margin: 0 0 16px;
  }
`;

export const Markdown = styled(ReactMarkdown)`
  font-size: 16px;
  color: #666;
  font-weight: normal;
  line-height: 22px;

  ul {
    margin-bottom: 20px;
  }

  li {
    padding-left: 30px;
    margin-bottom: 5px;

    &::before {
      content: '•';
      margin-right: 10px;
      width: 5px;
    }
  }
`;

export const ReviewCustomersArea = styled.div`
  padding: 30px 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  margin-top: 30px;
`;

export const AssessmentsArea = styled.div`
  h4 {
    font-size: 26px;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 625px) {
    padding: 0 20px;
  }
`;

export const AssessmentsGraph = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 625px) {
    flex-direction: column;
  }
`;

export const LeftAssessmentsGraph = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;

  @media (max-width: 625px) {
    justify-content: center;
  }

  div:nth-child(1) {
    width: 178px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: #bcbcbc;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Average = styled.div`
  margin-bottom: 10px;
  width: 75px !important;
  height: 75px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #333333;

  span {
    font-size: 26px;
    font-weight: 600px;
    color: #fff;
  }
`;

export const Graph = styled.div`
  margin-left: 50px;

  @media (max-width: 365px) {
    display: none;
  }

  ul {
    li {
      padding: 3px 0;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        opacity: 0.5;
      }

      button {
        display: flex;
        align-items: center;
        background: transparent;
        border: 0;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;

export const GraphOne = styled.div`
  position: relative;
  width: 152px;
  height: 6px;
  background: #eee;
  border-radius: 20px;
  margin-left: 10px;
`;

export const GraphTwo = styled.div<IGraphTwo>`
  position: absolute;
  left: 0;
  width: ${(props) => props.porcentage && `${props.porcentage}%`} !important;
  height: 6px;
  background: #ffb900;
  border-radius: 20px;
`;

export const RightAssessmentsGraph = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 625px) {
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonAssessment = styled.button<IButtonAssesment>`
  margin-top: ${(props) => (props.marginTop ? '20px' : 0)};
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  border: none;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.6;
  }
`;

export const FormArea = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;

  h4 {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 600;
    color: #333;
  }

  span {
    display: block;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  @media (max-width: 625px) {
    padding: 0 20px 20px;
  }
`;

export const ImageArea = styled.div`
  margin-top: 20px !important;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin-top: 20px;
  }
`;
