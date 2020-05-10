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
          placeholder={`Enter ${transferFromAccount?.coin} Address`}
          required
          requiredErrorMessage="Address field is not valid."
        />
      ) : (
        <AccountsDropDown
          required
          options={accountsOptions.filter(
            (account) => !!values && account.id !== values.transferFrom?.id
          )}
          name="transferTo"
          placeholder="Choose account"
        />
      )}
    </FormGroup>
  );
};

export default TransferToFormGroup;
