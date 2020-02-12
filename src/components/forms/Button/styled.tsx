import styled from 'styled-components';
import { ButtonColors } from '../../../dictionaries';

export const BlackButton = styled.button`
  display: inline-block;
  background: ${props => props.theme.colors.buttons[ButtonColors.black].bg};
  color: ${props => props.theme.colors.blockBackground};
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
    background: ${props =>
      props.theme.colors.buttons[ButtonColors.black].hover};
  }

  &:active {
    background: ${props =>
      props.theme.colors.buttons[ButtonColors.black].active};
  }

  &:focus {
    outline: none;
  }
`;

export const RedButton = styled(BlackButton)`
  background: ${props => props.theme.colors.buttons[ButtonColors.red].bg};

  &:hover {
    background: ${props => props.theme.colors.buttons[ButtonColors.red].hover};
  }

  &:active {
    background: ${props => props.theme.colors.buttons[ButtonColors.red].active};
  }
`;
