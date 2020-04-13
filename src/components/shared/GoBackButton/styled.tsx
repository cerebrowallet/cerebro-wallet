import styled from 'styled-components';
import CircleButton from '../CircleButton/CircleButton';

export const Button = styled(CircleButton)`
  position: absolute;
  top: 1.25rem;
  right: 0.625rem;
  z-index: 100;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    top: 2.625rem;
    right: 1.25rem;
  }
`;
