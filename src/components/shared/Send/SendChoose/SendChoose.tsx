import React from 'react';
import { useSelector } from 'react-redux';
import { Compass as CompassIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';

import { getAccountsList } from '../../../../store/account/selectors';
import { SendSteps } from '../../../../dictionaries';

import Page from '../../../layout/Page/Page';
import FormGroup from '../../../forms/FormGroup/FormGroup';
import Input from '../../../forms/Input/Input';
import DropDown from '../../../forms/DropDown/DropDown';
import Amount from './Amount/Amount';
import Button from '../../../forms/Button/Button';
import Fee from './Fee/Fee';
import SendPagination from '../SendPagination/SendPagination';
import WhiteBlock from '../../WhiteBlock';
import TwoCols from '../../../layout/TwoCols';

interface Values {
  fromAccount: {
    label: string;
    value: string;
  } | null;
  transferTo: string;
  transferToWhat: string;
  amount: number;
  accountCurrency: string;
  amountInDollars: number;
  fee: number;
}

interface Props {
  account?: string;
  theme?: any;
}

const SendChoose: React.FC<Props> = ({ account }) => {
  const initialValues: Values = {
    fromAccount: null,
    transferTo: '',
    transferToWhat: 'Address',
    amount: 0,
    accountCurrency: 'BTC',
    amountInDollars: 0,
    fee: 0.001,
  };
  const history = useHistory();
  const accounts = useSelector(getAccountsList);

  return (
    <Page
      headerText="Send"
      FooterIcon={CompassIcon}
      footerText="Instantly send money with custom fee to anyone or own wallet."
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values) => history.push('/features/send/confirm')}
      >
        {() => (
          <Form>
            <WhiteBlock>
              {!account && (
                <FormGroup label="From account">
                  <DropDown
                    required
                    options={accounts}
                    name="fromAccount"
                    placeholder="Choose account"
                    showValue
                  />
                </FormGroup>
              )}
              <FormGroup label="Transfer to">
                <Input
                  name="transferTo"
                  type="textarea"
                  placeholder="Enter BTC Address"
                  required
                />
              </FormGroup>
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
    </Page>
  );
};

export default SendChoose;
