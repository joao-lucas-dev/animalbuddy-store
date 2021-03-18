import React, { useCallback, memo } from 'react';
import { v4 } from 'uuid';

import { Container } from './styles';

interface IStarsRating {
  value: number;
  productPage?: boolean;
}

const StarsRating: React.FC<IStarsRating> = ({
  value,
  productPage = false,
}) => {
  const getStars = useCallback((valueStar: number) => {
    const stars = [];
    const [whole, part] = valueStar.toString().split('.');
    for (let i = 0; i < parseFloat(whole); i++) stars.push(100);
    if (part) stars.push(50);
    for (let i = parseFloat(whole); i < (part ? 4 : 5); i++) stars.push(0);

    return stars;
  }, []);

  return (
    <Container productPage={productPage}>
      {getStars(value).map((startValue: number) => (
        <img key={v4()} src={`/${startValue}.svg`} alt="Estrela" />
      ))}
    </Container>
  );
};

export default memo(StarsRating);
