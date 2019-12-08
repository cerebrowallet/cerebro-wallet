import React from 'react';

import { ButtonColors } from '../../../enums';

import './Button.scss';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: ButtonColors;
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
        color ? ` button--${ButtonColors[color]}` : ''
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
  color: ButtonColors.black,
};

export default Button;
