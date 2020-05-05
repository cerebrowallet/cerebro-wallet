import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Compass as CompassIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';

import {
  getRecommendedBTCFee as getRecommendedBTCFeeAction,
  setTxDraftValues,
} from '../../../../store/account/actions';
import {
  getAccountById,
  getAccountsListForDropdown,
  getRecommendedBTCFee,
  getTxDraftValues,
} from '../../../../store/account/selectors';
import { Coins, SendSteps } from '../../../../dictionaries';
import { Account } from '../../../../store/account/types';

import PageContent from '../../../layout/PageContent/PageContent';
import FormGroup from '../../../forms/FormGroup/FormGroup';
import DropDown from '../../../forms/DropDown/DropDown';
import Amount from './Amount/Amount';
import Button from '../../../forms/Button/Button';
import Fee from './Fee/Fee';
import SendPagination from '../SendPagination/SendPagination';
import WhiteBlock from '../../WhiteBlock';
import TwoCols from '../../../layout/TwoCols';
import TransferToFormGroup from './TransferToFormGroup';

export const TRANSFER_TO_TYPES = {
  ADDRESS: 'address',
  ACCOUNT: 'account',
};

interface TxDraftAccount {
  intId?: string;
  address?: string;
  balance?: number;
  coin?: Coins;
  id?: string;
}

export interface TxDraftFormValues {
  transferFrom: TxDraftAccount;
  transferTo: TxDraftAccount | string;
  transferToType: string;
  amount: string;
  amountInLocalCurrency: string;
  fee: string;
}

interface Props {
  account: Account | null;
  theme?: any;
}

const SendForm: React.FC<Props> = ({ account }) => {
  const recommendedFee = useSelector(getRecommendedBTCFee);
  const txDraftValues = useSelector(getTxDraftValues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendedBTCFeeAction());
  }, []);

  const txDraftAccount: TxDraftAccount = {};
  if (account) {
    txDraftAccount.intId = account.id;
    txDraftAccount.address = account.address;
    txDraftAccount.balance = account.balance;
    txDraftAccount.coin = account.coin;
    txDraftAccount.id = account.address;
  }

  const initialValues: TxDraftFormValues = txDraftValues
    ? txDraftValues
    : {
        transferFrom: txDraftAccount,
        transferTo: '',
        transferToType: TRANSFER_TO_TYPES.ADDRESS,
        amount: '',
        amountInLocalCurrency: '',
        fee: recommendedFee.toString(),
      };
  const history = useHistory();
  const accounts = useSelector(getAccountsListForDropdown);

  return (
    <PageContent
      headerText="Send"
      FooterIcon={CompassIcon}
      footerText="Instantly send money with custom fee to anyone or own wallet."
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values: TxDraftFormValues) => {
          dispatch(setTxDraftValues(values));
          history.push('/features/send/confirm');
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <WhiteBlock>
              {!account && (
                <FormGroup label="From account">
                  <DropDown
                    required
                    options={accounts}
                    name="transferFrom"
                    placeholder="Choose account"
                    showValue
                    onChange={(value: any) => {
                      if (
                        values.transferToType === TRANSFER_TO_TYPES.ADDRESS &&
                        typeof values.transferTo !== 'string' &&
                        value.intId === values.transferTo.intId
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
                    <Button type="submit">Next</Button>
                  </div>
                </TwoCols>
              </FormGroup>
              <SendPagination step={SendSteps.Choose} />
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default SendForm;
