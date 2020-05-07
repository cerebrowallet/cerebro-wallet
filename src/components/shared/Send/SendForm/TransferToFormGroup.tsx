import React from 'react';
import { useSelector } from 'react-redux';
import { useFormikContext } from 'formik';

import { TxDraftFormValues } from './SendForm';
import {
  getAccountById,
  getAccountsOptions,
} from '../../../../store/account/selectors';
import { TRANSFER_TO_TYPES } from './SendForm';

import WhiteDropDownMenu from '../../WhiteDropDownMenu/WhiteDropDownMenu';
import Input from '../../../forms/Input/Input';
import DropDown from '../../../forms/DropDown/DropDown';
import FormGroup from '../../../forms/FormGroup/FormGroup';

const TransferToFormGroup: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<TxDraftFormValues>();
  const accounts = useSelector(getAccountsOptions);
  const sendFromAccount = useSelector(
    getAccountById(values.transferFrom.intId)
  );

  const TRANSFER_TO_OPTIONS = [
    {
      id: TRANSFER_TO_TYPES.ADDRESS,
      name: 'Address',
    },
    {
      id: TRANSFER_TO_TYPES.ACCOUNT,
      name: 'My Account',
    },
  ];

  return (
    <FormGroup
      label="Transfer to "
      labelContent={
        <WhiteDropDownMenu
          selected={values.transferToType}
          menuItems={TRANSFER_TO_OPTIONS}
          onChange={(value: any) => {
            setFieldValue('transferToType', value);
            setFieldValue(
              'transferTo',
              value === TRANSFER_TO_TYPES.ADDRESS ? '' : null
            );
          }}
        />
      }
    >
      {values.transferToType === TRANSFER_TO_TYPES.ADDRESS ? (
        <Input
          name="transferTo"
          type="textarea"
          placeholder={`Enter ${sendFromAccount?.coin} Address`}
          required
          requiredErrorMessage="Address field is not valid."
        />
      ) : (
        <DropDown
          required
          options={accounts.filter(
            (account) => !!values && account.intId !== values.transferFrom.intId
          )}
          name="transferTo"
          placeholder="Choose account"
        />
      )}
    </FormGroup>
  );
};

export default TransferToFormGroup;
