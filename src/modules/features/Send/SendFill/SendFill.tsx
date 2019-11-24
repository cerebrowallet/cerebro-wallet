import React from 'react';
import { Compass as CompassIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';

import FormGroup from '../../../shared/FormGroup/FormGroup';
import Input from '../../../shared/Input/Input';
import DropDown from '../../../shared/DropDown/DropDown';
import Amount from './Amount/Amount';
import Button from '../../../shared/Button/Button';
import Fee from './Fee/Fee';
import SendProgress from '../SendProgress/SendProgress';

import { SEND_STEPS } from '../constants';

import '../Send.scss';

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
    <section className="page">
      <header className="page__header">Send</header>
      <section className="page__content">
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
                    options={[
                      {
                        label: 'Bitcoin',
                        value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuXR1',
                      },
                      {
                        label: 'Very long account name',
                        value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuXR4',
                      },
                      {
                        label: 'Bitcoin 2',
                        value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuX41',
                      },
                      {
                        label: 'Bitcoin',
                        value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuXRw',
                      },
                      {
                        label: 'Very long account name',
                        value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuXR8',
                      },
                      {
                        label: 'Bitcoin 2',
                        value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuX423',
                      },
                    ]}
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
      </section>
      <footer className="page-footer">
        <CompassIcon className="page-footer__icon" />
        Instantly send money with custom fee to anyone or own wallet.
      </footer>
    </section>
  );
};

export default SendFill;
