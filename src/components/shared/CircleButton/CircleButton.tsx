import React from 'react';

import './CircleButton.scss';

interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
};

const CircleButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      className={`circle-button${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircleButton;
