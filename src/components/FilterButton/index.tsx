import React, { ButtonHTMLAttributes } from 'react';
import { FiFilter } from 'react-icons/fi';

import Button from '../Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const FilterButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      <FiFilter />
      {children}
    </Button>
  );
};

export default FilterButton;
