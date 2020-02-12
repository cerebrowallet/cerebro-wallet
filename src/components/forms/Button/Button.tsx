import React from 'react';

import { ButtonColors } from '../../../dictionaries';
import { BlackButton, RedButton } from './styled';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: ButtonColors;
}

const Button: React.FC<Props> = ({ type, children, onClick, color }) => {
  const Component = color === ButtonColors.red ? RedButton : BlackButton;

  return (
    <Component type={type} onClick={onClick} color={color}>
      {children}
    </Component>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  color: ButtonColors.black,
};

export default Button;
