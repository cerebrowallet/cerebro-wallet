import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: grid;
  grid-area: features-menu;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 15.3125rem 15.3125rem;
  }
`;
