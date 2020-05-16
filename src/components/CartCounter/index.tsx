import React, { HTMLAttributes } from 'react';

import './styles.scss';

interface CartCounterProps extends HTMLAttributes<InnerHTML> {
  counter: number;
}

const CartCounter: React.FC<CartCounterProps> = ({ counter, ...rest }) => {
  return (
    <sup className="counter" {...rest}>
      <span className="counter__value">{counter}</span>
    </sup>
  );
};

export default CartCounter;
