import { FC, HTMLAttributes } from 'react';

import { Button, ButtonIconWrapper, Icon } from './ButtonIcon.styles';

interface ButtonIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  fixed?: boolean;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  type = 'button',
  icon,
  alt,
  disabled,
  fixed,
  onClick,
}) => (
  <ButtonIconWrapper fixed={fixed}>
    <Button type={type} disabled={disabled} onClick={onClick}>
      <Icon src={icon} alt={alt} />
    </Button>
    {children}
  </ButtonIconWrapper>
);

export default ButtonIcon;
