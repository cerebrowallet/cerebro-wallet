import styled from 'styled-components';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

export const Container = styled(CurrencyInput)`
  margin-bottom: 1.875rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;
