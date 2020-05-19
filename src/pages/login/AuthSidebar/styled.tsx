import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Breakpoints } from '../../../dictionaries';

export const Wrapper = styled.div`
  padding: 1.875rem 1.25rem;
  display: grid;
  align-content: space-between;
  height: 100vh;

  @media (min-width: ${Breakpoints.sm}px) {
    padding: 2.625rem 2.125rem;
    min-width: 15rem;
  }

  @media (min-width: ${Breakpoints.lg}px) {
    min-width: 25rem;
    padding: 5.625rem 3.125rem 1.875rem 4.6875rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
`;

export const HomeButton = styled(Link)`
  display: block;
  color: ${(props) => props.theme.colors.primary};
  height: 1.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: ${Breakpoints.md}px) {
    display: none;
  }
`;

export const Logo = styled.img``;

export const Footer = styled.footer`
  font-size: 0.75rem;
  line-height: 1.3125rem;
  color: ${(props) => props.theme.colors.secondary};

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
