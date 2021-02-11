import React, { ButtonHTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  miniWidth?: boolean;
  halfWidth?: boolean;
  phoneMode?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  miniWidth,
  halfWidth,
  phoneMode,
  children,
  ...rest
}) => (
  <ButtonContainer
    loading={loading}
    phoneMode={phoneMode}
    miniWidth={miniWidth}
    halfWidth={halfWidth}
    {...rest}
  >
    {loading ? <FaSpinner color="#FFF" size={18} /> : children}
  </ButtonContainer>
);

export default Button;
