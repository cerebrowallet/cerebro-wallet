import React from 'react';
import styled from 'styled-components';

import { ButtonColors } from '../../enums';
import colors from '../../styles/colors/colors';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: ButtonColors;
}

const BlackButton = styled.button`
  display: inline-block;
  background: ${props => props.theme.colors.buttons[ButtonColors.black].bg};
  color: ${colors.white};
  font-size: 0.75rem;
  line-height: 0.9375rem;
  text-align: center;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.75rem 0;
  border-radius: 1.25rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.1s ease-in;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 10rem;
  }

  &:hover {
    background: ${props => props.theme.colors.buttons[ButtonColors.black].hover};
  }

  &:active {
    background: ${props => props.theme.colors.buttons[ButtonColors.black].active};
  }

  &:focus {
    outline: none;
  }
`;

const RedButton = styled(BlackButton)`
  background: ${props => props.theme.colors.buttons[ButtonColors.red].bg};
  
  &:hover {
    background: ${props => props.theme.colors.buttons[ButtonColors.red].hover};
  }

  &:active {
    background: ${props => props.theme.colors.buttons[ButtonColors.red].active};
  }
`;

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
