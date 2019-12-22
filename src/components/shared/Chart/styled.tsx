import styled from 'styled-components';

export const Section = styled.section`
  grid-area: chart;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
  height: 26.875rem;
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;
