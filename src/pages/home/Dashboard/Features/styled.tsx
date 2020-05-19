import styled from 'styled-components';

import { Breakpoints } from '../../../../dictionaries';

export const FeaturesContainer = styled.div`
  display: grid;
  grid-area: features-menu;

  @media (min-width: ${Breakpoints.md}px) {
    grid-template-columns: 15.3125rem 15.3125rem;
  }
`;
