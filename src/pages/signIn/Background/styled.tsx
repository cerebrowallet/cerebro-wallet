import styled from 'styled-components';
import { animated } from 'react-spring';

import { Breakpoints } from '../../../dictionaries';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
  position: relative;
  background: ${colors.black};
  display: grid;
  grid-template-areas:
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;

  @media (min-width: ${Breakpoints.md}px) {
    overflow: hidden;
  }
`;

export const Circle = styled(animated.div)`
  position: absolute;
  display: none;
  will-change: transform;
  border-radius: 100%;
  background: ${(props) => props.theme.colors.orange};
  width: 5%;
  height: auto;
  padding-top: 5%;
  
  @media (min-width: ${Breakpoints.md}px) {
    display: block;
  }
`;
