import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -1rem 0 0 -1rem;
    width: 2rem;
    height: 2rem;
    background-size: cover;
    transform-origin: center;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
`;
