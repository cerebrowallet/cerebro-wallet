import styled from 'styled-components';
import { animated } from 'react-spring';

export const Div = styled(animated.div)`
  position: absolute;
  font-size: 0.875rem;
  line-height: 1.5rem;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  p {
    margin-bottom: 2.5rem;
  }
`;
