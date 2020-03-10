import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.span`
  position: relative;
  display: inline-block;
`;

export const Toggle = styled.button`
  cursor: pointer;
  width: 100%;
  background: none;
  border: 0;
  text-align: left;
  line-height: 1.0625rem;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0 0.1875rem;

  &:focus {
    outline: none;
  }

  svg {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    top: 0.1875rem;
    right: -0.625rem;
    color: ${props => props.theme.colors.secondary};
    transition: transform 0.2s ease-in-out;
    transform: rotate(
      ${(props: { isMenuOpen: boolean }) =>
        props.isMenuOpen ? '180deg' : '0deg'}
    );
  }
`;

export const Menu = styled(animated.div)`
  position: absolute;
  opacity: 0;
  left: -0.4375rem;
  top: 100%;
  width: 100%;
  background: ${props => props.theme.colors.tertiary};
  z-index: 10;
  background: ${props => props.theme.colors.blockBackground};
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 0.625rem;
  padding: 0.625rem;
  min-width: 4.0625rem;
  text-align: left;
`;

export const MenuItem = styled.button`
  background: none;
  border: 0;
  font-weight: ${(props: { active: boolean }) => (props.active ? 600 : 400)};
  font-size: 0.875rem;
  line-height: 1.0625rem;
  padding: 0;
  margin-bottom: 0.3125rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:focus {
    outline: none;
  }
`;
