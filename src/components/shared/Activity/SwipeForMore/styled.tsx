import styled from 'styled-components';

import { Breakpoints } from '../../../../dictionaries';

export const Container = styled.div`
  text-align: center;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.9375rem 1.25rem;

  @media (min-width: ${Breakpoints.md}px) {
    display: none;
  }

  svg {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
