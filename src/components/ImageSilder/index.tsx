import React, { useState, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Container, ImagesArea, ImageDiv } from './styles';

interface IImageSlider {
  slides: Array<string>;
}

const ImageSlider: React.FC<IImageSlider> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length = 0 } = slides;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
      {slides.length > 1 && <IoIosArrowBack size={20} onClick={prevSlide} />}
      <ImagesArea>
        {slides.map((img, index) => {
          return (
            <ImageDiv active={index === current} key={String(index)}>
              {index === current && <img src={img} alt="Produto" />}
            </ImageDiv>
          );
        })}
      </ImagesArea>
      {slides.length > 1 && <IoIosArrowForward size={20} onClick={nextSlide} />}
    </Container>
  );
};

export default ImageSlider;
