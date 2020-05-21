import styled from 'styled-components';

import { Themes } from '../../../../store/user/types';
import { Theme } from '../../../../styles/types';

interface Props {
  selectedTheme: Themes;
  theme?: Theme;
}

export const Button = styled.button`
  position: relative;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${(props: Props) => props?.theme?.colors.tertiary};
  border-radius: 1.5rem;
  padding: 0.0625rem;
  border: 0;
  cursor: pointer;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:before {
    display: block;
    position: absolute;
    z-index: 2;
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    left: ${(props: Props) =>
      props.selectedTheme === Themes.light ? '-11px' : '-25px'};
    transition: left 0.3s ease-in-out;
    background: ${(props: Props) => props?.theme?.colors.tertiary};
    border-radius: 1.5rem;
    will-change: left;
  }

  &:after {
    display: block;
    position: absolute;
    content: '';
    top: 6px;
    left: 6px;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    background: ${(props: Props) => props?.theme?.colors.orange};
    z-index: 1;
  }
`;
