import React, { MouseEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../Button';

interface BackButtonProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const BackButton: React.FC<BackButtonProps> = ({ children, ...props }) => (
  <Button {...props}>
    <FiArrowLeft />
    {children}
  </Button>
);

export default BackButton;
