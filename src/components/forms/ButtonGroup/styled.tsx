import styled from 'styled-components';

import { Theme } from '../../../styles/types';

export const Container = styled.div`
  display: flex;
  padding: 0.125rem;
  background: ${(props) => props.theme.colors.secondaryExtraLight};
  border-radius: 0.625rem;
`;

interface ButtonProps {
  active: boolean;
  theme?: Theme;
}

export const Button = styled.button`
  flex: 1;
  border: 0;
  border-radius: 0.625rem;
  background: ${(props: ButtonProps) =>
    props.active
      ? props.theme?.colors.tertiary
      : props.theme?.colors.secondaryExtraLight};
  color: ${(props: ButtonProps) =>
    props.active ? props.theme?.colors.primary : props.theme?.colors.secondary};
  transition: all 0.15s ease-in;
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.75rem 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${(props: ButtonProps) => props.theme?.colors.primary};
  }

  &:focus {
    outline: none;
  }
`;
