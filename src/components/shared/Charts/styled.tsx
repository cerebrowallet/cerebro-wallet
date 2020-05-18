import styled from 'styled-components';

export const Container = styled.section`
  grid-area: chart;
  background: ${(props) => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
  height: 26.875rem;
  overflow: hidden;
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5625rem;
`;

export const Content = styled.div``;

export const Footer = styled.footer``;
