import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  transform: rotate(360deg);
  transition: transform 1s;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${props => props.theme.colors.secondary};
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:active {
    transform: rotate(0deg);
    transition: 0s;
  }
`;
