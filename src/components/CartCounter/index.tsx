import React, { HTMLAttributes } from 'react';

import './styles.scss';

interface CartCounterProps extends HTMLAttributes<InnerHTML> {
  counter: number;
}

const CartCounter: React.FC<CartCounterProps> = ({ children, ...props }) => {
  const { counter } = { ...props };

  return (
    <sup className="counter">
      <span className="counter__value">{counter}</span>
    </sup>
  );
};

export default CartCounter;
