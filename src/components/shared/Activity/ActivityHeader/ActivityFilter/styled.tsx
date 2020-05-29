import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 2.5rem;
  background: none;
  border: 0;
  text-align: left;
  padding: 0 1.25rem;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};

  &:focus {
    outline: none;
  }

  svg {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    top: 0.875rem;
    right: 1.125rem;
    color: ${(props) => props.theme.colors.secondary};
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
  left: 0;
  top: calc(2.5rem + 1px);
  width: 100%;
  border-radius: 0 0 1.25rem 1.25rem;
  padding: 0.625rem 0;
  background: ${(props) => props.theme.colors.secondaryExtraLight};
  z-index: 10;
`;

export const Option = styled.button`
  display: block;
  border: 0;
  background: none;
  padding: 0.25rem 1.25rem;
  line-height: 1.0625rem;
  width: 100%;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export const SubHeader = styled.h4`
  font-size: 0.75rem;
  line-height: 1.0625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  padding: 0 1.25rem;
  color: ${(props) => props.theme.colors.secondary};
  margin: 0.625rem 0;
`;
