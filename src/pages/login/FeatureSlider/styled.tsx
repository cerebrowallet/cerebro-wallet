import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

export const SliderWrapper = styled.nav`
  position: relative;
  z-index: 5;
  min-width: 20rem;
  min-height: 22rem;
  margin: 0 3.125rem;
  color: white;

  @media (min-width: ${Breakpoints.lg}px) {
    width: 25rem;
    min-height: 20rem;
  }
`;

export const SlideHeader = styled.h1`
  font-size: 2.6rem;
  line-height: 2.9rem;
  font-weight: bold;
  margin-bottom: 1.875rem;

  @media (min-width: ${Breakpoints.lg}px) {
    font-size: 3rem;
    line-height: 3.375rem;
  }
`;

export const SlideContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1.5625rem;
`;
