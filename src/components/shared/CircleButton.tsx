import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors/colors';

interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export const StyledButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  background: ${colors.white};
  border-radius: 100%;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  border: 0;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
  }
`;

const CircleButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <StyledButton type="button" onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default CircleButton;
