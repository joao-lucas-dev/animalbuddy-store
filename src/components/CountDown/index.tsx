import React, { useCallback, memo } from 'react';
import Countdown from 'react-countdown';

import {
  Container,
  StockArea,
  ProgressBar,
  ValueProgressBar,
  Top,
  LeftSide,
  Number,
  Title,
  MidSide,
  RightSide,
  Bottom,
} from './styles';

interface ICountDown {
  stock?: number;
}

const CountDown: React.FC<ICountDown> = ({ stock }) => {
  const renderer = useCallback(
    ({ hours, minutes, seconds }) => {
      return (
        <Container>
          <StockArea>
            <p>
              APENAS <span>{stock}</span> PEÇAS EM ESTOQUE
            </p>

            <ProgressBar>
              <ValueProgressBar />
            </ProgressBar>
          </StockArea>

          <Top>
            <LeftSide>
              <Number>{hours}</Number>
              <Title>HORAS</Title>
            </LeftSide>

            <MidSide>
              <Number>{minutes}</Number>
              <Title>MINUTOS</Title>
            </MidSide>

            <RightSide>
              <Number>{seconds}</Number>
              <Title>SEGUNDOS</Title>
            </RightSide>
          </Top>

          <Bottom>
            <span>A promoção termina quando o temporizador zerar!</span>
          </Bottom>
        </Container>
      );
    },
    [stock],
  );

  return <Countdown date={Date.now() + 900000} renderer={renderer} />;
};

export default memo(CountDown);
