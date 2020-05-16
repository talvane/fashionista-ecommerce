import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
