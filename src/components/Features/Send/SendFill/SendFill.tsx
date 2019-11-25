import React from 'react';
import { Compass as CompassIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';

import Page from '../../../shared/Page/Page';
import FormGroup from '../../../shared/FormGroup/FormGroup';
import Input from '../../../shared/Input/Input';
import DropDown from '../../../shared/DropDown/DropDown';
import Amount from './Amount/Amount';
import Button from '../../../shared/Button/Button';
import Fee from './Fee/Fee';
import SendProgress from '../SendProgress/SendProgress';

import { SEND_STEPS } from '../constants';
import { ACCOUNTS_OPTIONS } from '../../../../dummyData';

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

const SendFill: React.FC<{}> = () => {
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
            <div className="white-block">
              <FormGroup label="From account">
                <DropDown
                  required
                  options={ACCOUNTS_OPTIONS}
                  name="fromAccount"
                  placeholder="Choose account"
                />
              </FormGroup>
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
                <div className="two-cols">
                  <div className="two-cols__left">
                    <Fee />
                  </div>
                  <div className="two-cols__right">
                    <Button type="submit">Next</Button>
                  </div>
                </div>
              </FormGroup>
              <SendProgress step={SEND_STEPS.CHOOSE} />
            </div>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default SendFill;
