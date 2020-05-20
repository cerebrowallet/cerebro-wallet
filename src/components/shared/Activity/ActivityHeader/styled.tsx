import styled from 'styled-components';

import { Breakpoints } from '../../../../dictionaries';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.secondaryExtraLight};
  border-radius: 1.25rem;
  font-size: 0.875rem;
  margin: 1.5625rem 1.25rem;

  @media (min-width: ${Breakpoints.md}px) {
    margin: 2.5rem 1.875rem 1.25rem;
  }
`;
