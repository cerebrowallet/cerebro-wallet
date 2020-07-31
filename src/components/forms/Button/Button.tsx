import React from 'react';

import { ButtonColors } from '../../../dictionaries';
import { Btn } from './styled';

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
  onClick,
  color,
  ...rest
}) => {
  return (
    <Btn {...rest} type={type} onClick={onClick} color={color}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  color: ButtonColors.black,
};

export default Button;
