import React from 'react';
import { useSelector } from 'react-redux';
import { useFormikContext } from 'formik';

import { getAccountsListWithBalance } from '../../../../store/account/selectors';

import { TxDraftFormValues, TransferToTypes } from '../Send';

import FormGroup from '../../../forms/FormGroup/FormGroup';
import AccountsDropDown from '../../../forms/DropDown/AccountsDropDown';
import Amount from './Amount/Amount';
import Button from '../../../forms/Button/Button';
import Fee from './Fee/Fee';
import TwoCols from '../../../layout/TwoCols';
import TransferToFormGroup from './TransferToFormGroup';

import { SendSteps } from '../Send';

interface Props {
  accountId?: string;
  setStep: (step: SendSteps) => void;
}

const FillUp: React.FC<Props> = ({ accountId, setStep }) => {
  const { values, setFieldValue } = useFormikContext<TxDraftFormValues>();
  const accountsOptions = useSelector(getAccountsListWithBalance);

  return (
    <div>
      {!accountId && (
        <FormGroup label="From account">
          <AccountsDropDown
            required
            options={accountsOptions || []}
            name="transferFrom"
            placeholder="Choose account"
            onChange={(value: any) => {
              if (
                values.transferToType === TransferToTypes.Account &&
                values.transferTo &&
                typeof values.transferTo !== 'string' &&
                value.id === values.transferTo.id
              ) {
                setFieldValue('transferTo', null);
              }
            }}
          />
        </FormGroup>
      )}
      <TransferToFormGroup />
      <Amount />
      <FormGroup label="Network fee" className="form-group--no-margin">
        <TwoCols>
          <Fee />
          <div>
            <Button type="button" onClick={() => setStep(SendSteps.confirm)}>
              Next
            </Button>
          </div>
        </TwoCols>
      </FormGroup>
    </div>
  );
};

export default FillUp;
