import styled from 'styled-components';
import { animated } from 'react-spring';

import IconButton from '../IconButton/IconButton';

export const Wrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: linear-gradient(237.99deg, #4e6b81 0%, #2a4355 100%);
  overflow-y: auto;
`;

export const Content = styled.div`
  max-width: 57.5rem;
  margin: 3.125rem auto;
  padding: 0 1.25rem;
`;

export const Header = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 2.1875rem;
  color: #fff;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  margin-bottom: 3.125rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Button = styled(animated(IconButton))`
  position: relative;
  background: #fff;
  max-width: none;
  margin-bottom: 0 !important;

  i {
    margin-right: 0.9375rem;
  }
`;
