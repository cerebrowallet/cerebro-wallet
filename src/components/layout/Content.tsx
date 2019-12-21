import styled from 'styled-components';

const Content = styled.main`
  grid-area: main;
`;

export const ContentOneCol = styled(Content)`
  padding: 2.5rem 1.25rem 0;
  max-width: calc(100vw);

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 3.125rem 2.5rem 2rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: 4.6875rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding-left: 14.0625rem;
  }
`;

export const ContentTwoCols = styled(Content)`
  display: grid;
  padding: 2.1875rem 1.25rem 1.5625rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: auto 1fr;
    grid-gap: 2.4375rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 3.125rem 2.6875rem;
    grid-gap: 3.4375rem;
  }
`;

export default Content;
