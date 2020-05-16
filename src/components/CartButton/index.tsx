import React, { ButtonHTMLAttributes } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import Button from '../Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CartButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      <FiShoppingCart />
      {children}
    </Button>
  );
};

export default CartButton;
