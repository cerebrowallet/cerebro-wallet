import React from 'react';

import './Button.scss';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button: React.FC<Props> = ({ type, children, className, onClick }) => {
  return (
    <button
      type={type}
      className={`button${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
