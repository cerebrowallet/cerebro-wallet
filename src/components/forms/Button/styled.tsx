import styled from 'styled-components';

import { Breakpoints, ButtonColors } from '../../../dictionaries';
import { Theme } from '../../../styles/types';

interface Props {
  color?: ButtonColors;
  theme?: Theme;
}

export const Btn = styled.button`
  display: inline-block;
  position: relative;
  background: ${(props: Props) => {
    if (props.color === ButtonColors.red) {
      return props?.theme?.colors.red;
    }

    return props?.theme?.colors.primary;
  }}
  color: ${(props) => props?.theme?.colors.tertiary};
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
  color: ${(props) => props?.theme?.colors.tertiary};

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.25rem;
    transition: all .3s ease-in-out;
    background: ${(props: Props) => {
      if (props.color === ButtonColors.red) {
        return props?.theme?.colors.redAlpha;
      }

      return props?.theme?.colors.primaryAlpha;
    }};
  }

  @media (min-width: ${Breakpoints.sm}px) {
    width: 10rem;
  }

  &:hover {
    background: ${(props: Props) => {
      if (props.color === ButtonColors.red) {
        return props?.theme?.colors.redLight;
      }

      return props?.theme?.colors.primaryLight;
    }}
  } 

  &:active {
    background: ${(props: Props) => {
      if (props.color === ButtonColors.red) {
        return props?.theme?.colors.redLight;
      }

      return props?.theme?.colors.primaryLight;
    }}
    
    &:before {
      left: -3px;
      top: -3px;
      right: -3px;
      bottom: -3px;
    }
  }

  &:focus {
    outline: none;
  }
`;
