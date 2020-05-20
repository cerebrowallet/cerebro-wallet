import styled from 'styled-components';

import { Breakpoints } from '../../dictionaries';

export const InputError = styled.span`
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  color: ${(props) => props.theme.colors.red};
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 0.0625rem;
  transition: opacity 0.15s ease-in;

  @media (min-width: ${Breakpoints.md}px) {
    white-space: nowrap;
  }
`;
