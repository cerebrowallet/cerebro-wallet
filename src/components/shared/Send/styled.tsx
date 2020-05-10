import styled from 'styled-components';
import { animated } from 'react-spring';

export const StepContainer = styled.div`
  display: grid;
  grid-template-areas: 'step';
  position: relative;
  overflow: hidden;
`;

export const Step = styled(animated.div)`
  grid-area: step;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
`;
