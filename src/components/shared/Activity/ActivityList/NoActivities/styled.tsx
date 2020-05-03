import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 2.125rem 0.5rem 2rem;
  max-width: 18.75rem;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 3.125rem 0 2rem;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 4.25rem 0 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 6.25rem 0 2.5rem;
  }
`;

export const Img = styled.img`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1.125rem;
`;

export const Text = styled.p`
  font-size: 0.8125rem;
  line-height: 1.5rem;
`;
