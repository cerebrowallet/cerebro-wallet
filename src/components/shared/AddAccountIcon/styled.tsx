import styled from 'styled-components';

export const Figure = styled.figure`
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 100%;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.orange};
    width: 0.75rem;
    height: 0.75rem;
  }
`;
