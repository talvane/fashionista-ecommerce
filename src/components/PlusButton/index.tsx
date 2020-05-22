import React, { ButtonHTMLAttributes } from 'react';
import { FiPlus } from 'react-icons/fi';

import Button from '../Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const PlusButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>
    <FiPlus />
    {children}
  </Button>
);

export default PlusButton;
