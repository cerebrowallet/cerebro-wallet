import styled from 'styled-components';

import { Breakpoints } from '../../../../../dictionaries';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

export const Container = styled(CurrencyInput)`
  margin-bottom: 1.875rem;

  @media (min-width: ${Breakpoints.sm}px) {
    margin-bottom: 0;
  }
`;
