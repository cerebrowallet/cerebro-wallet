import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;
  display: none;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${props => props.theme.colors.secondary};
  align-self: start;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    display: flex;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  margin-right: 1.5625rem;
  color: ${props => props.theme.colors.secondary};

  &:last-child {
    margin-right: 0;
  }
`;