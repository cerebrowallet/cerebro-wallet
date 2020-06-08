import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

export const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  justify-content: center;
  padding: 0 1.25rem;
  display: grid;
  grid-area: footer;
  grid-template-areas:
    'menu'
    'copy';
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1.875rem;

  @media (min-width: ${Breakpoints.md}px) {
    margin-bottom: 0;
    padding: 1.875rem 4.6875rem;
    justify-content: space-between;
    grid-template-areas: 'copy menu';
  }
`;

export const Copyright = styled.div`
  grid-area: copy;
`;

export const Menu = styled.div`
  grid-area: menu;
  margin-bottom: 1.25rem;
  width: 100%;

  @media (min-width: ${Breakpoints.md}px) {
    margin-bottom: 0;
  }
`;

export const MenuLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  display: block;
  margin-bottom: 0.625rem;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:active {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: ${Breakpoints.md}px) {
    display: inline-block;
    margin-left: 1.875rem;
    margin-bottom: 0;
    text-align: left;
  }
`;
