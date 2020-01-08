import styled from 'styled-components';
import { animated } from 'react-spring';

export const Overlay = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.primary};
    opacity: 0.4;
  }
`;

export const Body = styled(animated.div)`
  position: absolute;
  background: ${props => props.theme.colors.blockBackground};
  padding: 1.5625rem;
  border-radius: 1.25rem;
  margin-top: 2.5rem;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 30rem;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
