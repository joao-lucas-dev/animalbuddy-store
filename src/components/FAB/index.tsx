import React, { useState, useEffect } from 'react';

import { Container, Icon } from './styles';

interface IFAB {
  isProduct?: boolean;
}

const FAB: React.FC<IFAB> = ({ isProduct = false }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const { href } = window.location;

    let newText = '';

    if (isProduct) {
      newText = window.encodeURIComponent(
        `${href} \n\n Olá, estou interessado(a) neste produto e tenho algumas dúvidas. Você pode me ajudar?`,
      );
    } else {
      newText = window.encodeURIComponent(
        'Olá, tenho algumas dúvidas. Você pode me ajudar?',
      );
    }

    setText(newText);
  }, [isProduct]);

  return (
    <Container isProduct={isProduct}>
      <a
        href={`https://wa.me/5581971112339?text=${text}`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon />
      </a>
    </Container>
  );
};

export default FAB;
