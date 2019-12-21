import styled from 'styled-components';

const TwoCols = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
  }

  & > * {
    flex: 50%;

    &:last-child {
      text-align: right;
    }
  }
`;

export default TwoCols;
