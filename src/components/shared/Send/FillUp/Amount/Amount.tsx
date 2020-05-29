import React from 'react';
import { useSelector } from 'react-redux';
import { useFormikContext } from 'formik';

import { TxDraftFormValues } from '../../Send';
import {
  getAccountById,
  getExchangeRate,
} from '../../../../../store/account/selectors';
import { getSettings } from '../../../../../store/user/selectors';
import { round, parseFloatStr } from '../../../../../utils/common';
import { isPositiveNumber } from '../../../../../utils/validations';

import {
  Container,
  SendAllButton,
  InputsContainer,
  AmountInCrypto,
  AmountInLocal,
} from './styled';

import Input from '../../../../forms/Input/Input';

enum Inputs {
  amount = 'amount',
  amountInLocalCurrency = 'amountInLocalCurrency',
}

const Amount: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<TxDraftFormValues>();
  const sendFromAccount = useSelector(getAccountById(values.transferFrom?.id));
  const settings = useSelector(getSettings);
  const exchangeRate = useSelector(getExchangeRate(sendFromAccount?.coin));
  const fee = parseFloat(values.fee);

  const validateInput = (inputName: Inputs) => (value: string) => {
    if (!sendFromAccount) {
      return;
    }

    let error;
    const intVal = parseFloatStr(value);

    if (!isPositiveNumber(value)) {
      error = 'Amount field is not valid.';
    }

    const maxAvailableAmount = sendFromAccount.balance - fee;

    if (inputName === Inputs.amount && intVal > maxAvailableAmount) {
      error = 'The sending amount exceeds the available balance.';
    }

    return error;
  };

  const updateInputValue = (inputToUpdate: Inputs) => (value: string) => {
    let newValue = '';

    if (isPositiveNumber(value)) {
      const intVal = parseFloatStr(value);
      const decimals = inputToUpdate === Inputs.amount || intVal > 0 ? 2 : 8;
      const convertedValue =
        inputToUpdate === Inputs.amount
          ? round(intVal / exchangeRate, 8)
          : round(intVal * exchangeRate, decimals);
      newValue = convertedValue.toString();
    }

    setFieldValue(inputToUpdate as never, newValue);
  };

  if (!settings) {
    return null;
  }

  return (
    <Container label="Amount">
      <SendAllButton
        type="button"
        onClick={() => {
          if (sendFromAccount) {
            const maxAvailableAmount = (
              sendFromAccount.balance - fee
            ).toString();
            setFieldValue(Inputs.amount, maxAvailableAmount);
            updateInputValue(Inputs.amountInLocalCurrency)(maxAvailableAmount);
          }
        }}
      >
        Send all
      </SendAllButton>
      <InputsContainer>
        <AmountInCrypto coin={sendFromAccount?.coin}>
          <Input
            name="amount"
            onChange={updateInputValue(Inputs.amountInLocalCurrency)}
            validate={validateInput(Inputs.amount)}
            placeholder="0"
            required
          />
        </AmountInCrypto>
        <AmountInLocal currency={settings.currency}>
          <Input
            name="amountInLocalCurrency"
            onChange={updateInputValue(Inputs.amount)}
            validate={validateInput(Inputs.amountInLocalCurrency)}
            placeholder="0"
            hideTextError
            required
          />
        </AmountInLocal>
      </InputsContainer>
    </Container>
  );
};

export default Amount;
