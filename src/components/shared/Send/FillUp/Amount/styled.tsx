import styled from 'styled-components';
import FormGroup from '../../../../forms/FormGroup/FormGroup';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

export const Container = styled(FormGroup)`
  position: relative;
`;

export const SendAllButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  
  &:focus {
    outline: none;
  }
`;

export const InputsContainer = styled.div`
  position: relative;
  //overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    width: 100%;
  }
`;

export const AmountInCrypto = styled(CurrencyInput)`
  border-bottom: 1px solid #fff;
  flex: 50%;

  input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    border-right: 1px solid #fff;
  }
`;

export const AmountInLocal = styled(CurrencyInput)`
  flex: 50%;

  input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;
