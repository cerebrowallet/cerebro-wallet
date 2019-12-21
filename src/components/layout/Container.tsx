import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-areas:
    'main'
    'sidebar';
  height: 100vh;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: auto 1fr;
  }
`;

export const ContainerOneCol = styled(Container)`
  grid-template-areas:
    'sidebar'
    'main';
  grid-auto-rows: minmax(min-content, max-content);

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: 1.5fr 2.5fr;
    grid-template-rows: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 2fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: auto 3fr;
  }
`;

export const ContainerTwoCols = styled(Container)`
  grid-template-areas:
    'sidebar'
    'main';
  grid-auto-rows: minmax(min-content, max-content);

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-areas: 'sidebar main';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
`;

export default Container;
