import React from 'react';
import { useSelector } from 'react-redux';
import { useFormikContext } from 'formik';

import { TxDraftFormValues, TransferToTypes } from '../Send';
import {
  getAccountById,
  getAccountsOptions,
} from '../../../../store/account/selectors';

import WhiteDropDownMenu from '../../WhiteDropDownMenu/WhiteDropDownMenu';
import Input from '../../../forms/Input/Input';
import FormGroup from '../../../forms/FormGroup/FormGroup';
import AccountsDropDown from '../../../forms/DropDown/AccountsDropDown';

const TransferToFormGroup: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<TxDraftFormValues>();
  const accountsOptions = useSelector(getAccountsOptions);
  const transferFromAccount = useSelector(
    getAccountById(values.transferFrom?.id)
  );

  return (
    <FormGroup
      label="Transfer to "
      labelContent={
        <WhiteDropDownMenu
          selected={values.transferToType}
          menuItems={[
            {
              id: TransferToTypes.Address,
              name: 'Address',
            },
            {
              id: TransferToTypes.Account,
              name: 'My Account',
            },
          ]}
          onChange={(value: any) => {
            setFieldValue('transferToType', value);
            setFieldValue(
              'transferTo',
              value === TransferToTypes.Address ? '' : null
            );
          }}
        />
      }
    >
      {values.transferToType === TransferToTypes.Address ? (
        <Input
          name="transferTo"
          type="textarea"
          placeholder={
            values.transferFrom
              ? `Enter ${transferFromAccount?.coin} Address`
              : 'Choose sending account first'
          }
          required
          requiredErrorMessage="Address field is not valid."
          disabled={!values.transferFrom}
        />
      ) : (
        <AccountsDropDown
          required
          options={accountsOptions.filter(
            (account) =>
              !!values &&
              account.id !== values.transferFrom?.id &&
              account.coin === values.transferFrom?.coin
          )}
          name="transferTo"
          placeholder={
            values.transferFrom
              ? `Choose ${transferFromAccount?.coin} account`
              : 'Choose sending account first'
          }
          disabled={!values.transferFrom}
        />
      )}
    </FormGroup>
  );
};

export default TransferToFormGroup;
