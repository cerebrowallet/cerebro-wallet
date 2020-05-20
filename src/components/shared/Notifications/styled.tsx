import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  height: auto;
  width: 100%;
  max-width: 21rem;
  z-index: 1000;
`;

export const Notification = styled(animated.div)`
  position: relative;
  will-change: bottom;
  margin: 0 1.25rem 0.4rem;
`;

const Content = styled.div`
  font-size: 0.875rem;
  line-height: 1.125rem;
  padding: 0.6875rem 2rem 0.6875rem 1.25rem;
  border-radius: 0.625rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`;

export const Success = styled(Content)`
  color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.green};
`;

export const Error = styled(Content)`
  color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.red};
`;

export const Default = styled(Content)`
  color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.primary};
`;

export const DefaultInvert = styled(Content)`
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.tertiary};

  svg {
    color: ${props => props.theme.colors.primary}!important;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.75rem;
  right: 0.625rem;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme.colors.tertiary};
  }
`;
