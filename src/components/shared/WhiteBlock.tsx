import styled from 'styled-components';

const WhiteBlock = styled.section`
  background: #fff;
  border-radius: 1.25rem;
  padding: 1.5625rem;
  margin-bottom: 1.25rem;

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 3.125rem;

    & + .white-block {
      margin-top: -1.2rem;
    }
  }
`;

export default WhiteBlock;
