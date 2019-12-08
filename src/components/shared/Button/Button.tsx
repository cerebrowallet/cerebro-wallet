import React from 'react';

import './Button.scss';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: 'black' | 'red';
}

const Button: React.FC<Props> = ({
  type,
  children,
  className,
  onClick,
  color,
}) => {
  return (
    <button
      type={type}
      className={`button${className ? ` ${className}` : ''}${
        color !== 'black' ? ` button--${color}` : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  color: 'black',
};

export default Button;
