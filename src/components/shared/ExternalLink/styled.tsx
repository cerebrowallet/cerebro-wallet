import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.altPrimary};
  transition: color 0.15s ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.altHover};
  }

  &:active {
    color: ${(props) => props.theme.colors.primary};
  }
`;
