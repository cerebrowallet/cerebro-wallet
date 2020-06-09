import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';

import { SendSteps, TransferToTypes, TxDraftFormValues } from '../Send';
import { getSettings } from '../../../../store/user/selectors';
import { makeTx } from '../../../../store/account/actions';
import {
  getAccountById,
  getExchangeRates,
} from '../../../../store/account/selectors';
import { CurrencySymbols } from '../../../../dictionaries';

import {
  Actions,
  Amount,
  AmountInLocalCurrency,
  BackButton,
  Details,
  Title,
} from './styled';

import Button from '../../../forms/Button/Button';

interface Props {
  setStep: (step: SendSteps) => void;
}

const Confirm = React.forwardRef<HTMLDivElement, Props>(({ setStep }, ref) => {
  const dispatch = useDispatch();
  const settings = useSelector(getSettings);
  const rates = useSelector(getExchangeRates);
  const { values } = useFormikContext<TxDraftFormValues>();
  const transferFromAccount = useSelector(
    getAccountById(values.transferFrom?.id)
  );
  const transferToAddress =
    values.transferToType === TransferToTypes.Account &&
    values.transferTo &&
    typeof values.transferTo !== 'string'
      ? values.transferTo.address
      : values.transferTo;

  if (
    !transferFromAccount ||
    !transferToAddress ||
    !settings?.currency ||
    !rates
  ) {
    return null;
  }

  return (
    <div ref={ref}>
      <Title>You want to spend</Title>
      <Amount>
        {values.amount} {transferFromAccount.coin}
      </Amount>
      <AmountInLocalCurrency>
        {CurrencySymbols[settings.currency]}
        {values.amountInLocalCurrency}
      </AmountInLocalCurrency>
      <Details>
        <dt>From</dt>
        <dd>{transferFromAccount.address}</dd>
        <dt>To</dt>
        <dd>{transferToAddress}</dd>
        <dt>Network fee</dt>
        <dd>
          {values.fee} {transferFromAccount.coin}
        </dd>
        <dt>Will receive</dt>
        <dd>
          {values.amount} {transferFromAccount.coin}
        </dd>
      </Details>
      <Actions>
        <BackButton type="button" onClick={() => setStep(SendSteps.fillUp)}>
          ‹ Back
        </BackButton>
        <Button type="button" onClick={() => dispatch(makeTx(values))}>
          Confirm
        </Button>
      </Actions>
    </div>
  );
});

export default Confirm;
