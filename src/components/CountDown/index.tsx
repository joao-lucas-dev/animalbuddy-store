import React, { useCallback, memo } from 'react';
import Countdown from 'react-countdown';

import {
  Container,
  Top,
  LeftSide,
  Number,
  Title,
  MidSide,
  RightSide,
  Bottom,
} from './styles';

const CountDown: React.FC = () => {
  const renderer = useCallback(({ hours, minutes, seconds }) => {
    return (
      <Container>
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
  }, []);

  return <Countdown date={Date.now() + 600000} renderer={renderer} />;
};

export default memo(CountDown);
