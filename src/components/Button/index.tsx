import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  miniWidth?: boolean;
  halfWidth?: boolean;
  phoneMode?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  miniWidth,
  halfWidth,
  phoneMode,
  children,
  ...rest
}) => (
  <ButtonContainer
    phoneMode={phoneMode}
    miniWidth={miniWidth}
    halfWidth={halfWidth}
    {...rest}
  >
    {children}
  </ButtonContainer>
);

export default Button;
