import { FC, HTMLAttributes } from 'react';

import { ButtonWrapper } from './Button.styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({ children, disabled, type = 'button', onClick }) => (
  <ButtonWrapper disabled={disabled} type={type} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;
