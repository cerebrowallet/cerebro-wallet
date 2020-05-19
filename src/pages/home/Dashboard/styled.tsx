import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

export const DashboardContainer = styled.section`
  grid-area: dashboard;
  display: grid;
  grid-template-areas:
    'total-balance'
    'accounts'
    'features-menu';
  grid-gap: 1.3125rem;
  align-self: center;

  @media (max-aspect-ratio: 16/9) {
    align-self: flex-start;
  }

  @media (min-width: ${Breakpoints.md}px) {
    grid-template-areas:
      'total-balance features-menu'
      'accounts chart';
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: auto 3fr;
    grid-gap: 1.25rem;
  }

  @media (min-width: ${Breakpoints.xl}px) {
    padding-right: 1.875rem;
    max-width: 60rem;
  }
`;
