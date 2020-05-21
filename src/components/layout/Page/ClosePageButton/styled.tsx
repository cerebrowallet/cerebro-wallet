import styled from 'styled-components';

import CircleButton from '../../../shared/CircleButton/CircleButton';
import { Breakpoints } from '../../../../dictionaries';

export const Button = styled(CircleButton)`
  position: absolute;
  top: 1.25rem;
  right: 0.625rem;
  z-index: 100;

  @media (min-width: ${Breakpoints.md}px) {
    top: 2.625rem;
    right: 1.25rem;
  }

  & > svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;
