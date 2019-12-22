import React from 'react';

import { Button } from './styled';

interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

const CircleButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <Button type="button" onClick={onClick} className={className}>
      {children}
    </Button>
  );
};

export default CircleButton;
