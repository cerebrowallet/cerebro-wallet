import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

export const Container = styled.section`
  display: grid;
  grid-template-areas:
    'main'
    'sidebar';
  height: 100vh;

  @media (min-width: ${Breakpoints.xl}px) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: auto 1fr;
  }
`;

export const OneColumnContainer = styled(Container)`
  grid-template-areas:
    'sidebar'
    'main';
  grid-auto-rows: minmax(min-content, max-content);

  @media (min-width: ${Breakpoints.md}px) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: 1.5fr 2.5fr;
    grid-template-rows: auto;
  }

  @media (min-width: ${Breakpoints.lg}px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (min-width: ${Breakpoints.xl}px) {
    grid-template-columns: auto 3fr;
  }
`;

export const TwoColumnsContainer = styled(Container)`
  grid-template-areas:
    'sidebar'
    'main';
  grid-auto-rows: minmax(min-content, max-content);

  @media (min-width: ${Breakpoints.xl}px) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;

  @media (min-width: ${Breakpoints.md}px) {
    background: ${(props) => props.theme.colors.tertiary};
  }

  @media (min-width: ${Breakpoints.xl}px) {
    width: 25.625rem;
  }
`;

export const OneColumnContent = styled.section`
  padding: 2.5rem 1.25rem 0;
  max-width: calc(100vw);

  @media (min-width: ${Breakpoints.md}px) {
    padding: 3.125rem 2.5rem 2rem;
  }

  @media (min-width: ${Breakpoints.lg}px) {
    padding-left: 4.6875rem;
  }

  @media (min-width: ${Breakpoints.xxl}px) {
    padding-left: 0;
    display: flex;
    justify-content: center;

    & > section {
      width: 36.25rem;
    }
  }
`;

export const TwoColumnsContent = styled.section`
  display: grid;
  padding: 2.1875rem 1.25rem 1.5625rem;

  @media (min-width: ${Breakpoints.md}px) {
    grid-template-columns: auto 1fr;
    grid-gap: 2.4375rem;
  }

  @media (min-width: ${Breakpoints.xl}px) {
    padding: 3.125rem 2.6875rem;
    grid-gap: 3.4375rem;
  }

  @media (min-width: ${Breakpoints.xxl}px) {
    justify-content: center;
    grid-template-columns: auto auto;
  }
`;

export const DashboardContent = styled.section`
  display: grid;
  grid-gap: 3.5rem;
  padding: 0.9375rem 1.25rem 1.5625rem;
  grid-template-areas:
    'header'
    'dashboard'
    'footer';

  @media (min-width: ${Breakpoints.md}px) {
    grid-template-rows: auto 1fr auto;
    padding: 2.188rem 1.875rem;
  }

  @media (min-width: ${Breakpoints.xxl}px) {
    padding-left: 4.6875rem;
  }
`;
