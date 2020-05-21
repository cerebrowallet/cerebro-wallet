import styled from 'styled-components';
import { animated } from 'react-spring';

import { Theme } from '../../../styles/types';

export const Container = styled.span`
  position: relative;
  display: inline-block;
`;

interface ToggleProps {
  position?: 'right' | 'left';
  theme?: Theme;
  isMenuOpen: boolean;
}

export const Toggle = styled.button`
  cursor: pointer;
  width: 100%;
  background: none;
  border: 0;
  line-height: 1.0625rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: ${(props: ToggleProps) =>
    props.position === 'right' ? 'right' : 'left'};
  padding: 0 0.925rem 0 0.1875rem;
  color: ${(props: ToggleProps) => props?.theme?.colors.primary};

  &:focus {
    outline: none;
  }

  svg {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    top: 0.1875rem;
    right: 0;
    color: ${(props: ToggleProps) => props?.theme?.colors.secondary};
    transition: transform 0.2s ease-in-out;
    transform: rotate(
      ${(props: ToggleProps) => (props.isMenuOpen ? '180deg' : '0deg')}
    );
  }
`;

interface MenuProps {
  position?: 'right' | 'left';
  theme?: Theme;
}

export const Menu = styled(animated.div)`
  position: absolute;
  opacity: 0;
  top: 100%;
  background: ${(props: MenuProps) => props?.theme?.colors.tertiary};
  z-index: 10;
  background: ${(props: MenuProps) => props?.theme?.colors.tertiary};
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 0.625rem;
  min-width: 4.0625rem;

  ${(props: MenuProps) =>
    props.position === 'right'
      ? `
    text-align: right;
    padding: 0.625rem;
    right: -0.4375rem;
  `
      : `
    text-align: left;
    padding: 0.625rem;
    left: -0.4375rem;
  `}
`;

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.button`
  background: none;
  border: 0;
  font-weight: ${(props: MenuItemProps) => (props.active ? 600 : 400)};
  font-size: 0.875rem;
  line-height: 1.0625rem;
  padding: 0;
  margin-bottom: 0.3125rem;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) => props?.theme?.colors.primary};

  &:last-child {
    margin-bottom: 0;
  }

  &:focus {
    outline: none;
  }
`;
