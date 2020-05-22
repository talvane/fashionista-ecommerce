import React, { ButtonHTMLAttributes } from 'react';
import { FiMinus } from 'react-icons/fi';

import Button from '../Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  //onClickRemove: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MinusButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>
    <FiMinus />
    {children}
  </Button>
);

export default MinusButton;
