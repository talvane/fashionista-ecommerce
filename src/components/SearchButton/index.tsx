import React, { ButtonHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import Button from '../Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const SearchButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      <FiSearch />
      {children}
    </Button>
  );
};

export default SearchButton;
