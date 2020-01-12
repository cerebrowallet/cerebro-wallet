import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 1.5625rem;
  height: 1.5625rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 1.5625rem;
    height: 1.5625rem;
    border: 0.1875rem solid ${props => props.theme.colors.secondary};
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.colors.secondary} transparent
      transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
