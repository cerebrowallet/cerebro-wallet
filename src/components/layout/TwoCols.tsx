import styled from 'styled-components';

import { Breakpoints } from '../../dictionaries';

const TwoCols = styled.div`
  @media (min-width: ${Breakpoints.sm}px) {
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
