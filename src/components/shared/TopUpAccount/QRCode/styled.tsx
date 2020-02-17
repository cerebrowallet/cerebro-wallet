import styled from 'styled-components';

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  background: ${props => props.theme.colors.blockBackground};
  margin-bottom: 3.125rem;
  border-radius: 1.25rem;
  padding-top: 100%;

  canvas {
    position: absolute;
    height: 80% !important;
    width: 80% !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 400px) {
    width: 12.5rem;
    padding-top: 12.5rem;
  }
`;
