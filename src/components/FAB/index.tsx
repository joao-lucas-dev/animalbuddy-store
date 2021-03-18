import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

const FAB: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const { href } = window.location;

    const newText = window.encodeURIComponent(
      `${href} \n\n Olá, estou interessado(a) neste produto e tenho algumas dúvidas. Você pode me ajudar?`,
    );

    setText(newText);
  }, []);

  return (
    <Container>
      <a
        href={`https://wa.me/5581971112339?text=${text}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={42} color="#fff" />
      </a>
    </Container>
  );
};

export default FAB;
