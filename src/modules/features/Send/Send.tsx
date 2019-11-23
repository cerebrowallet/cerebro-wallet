import React from 'react';
import { Compass as CompassIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import FormGroup from '../../shared/FormGroup/FormGroup';
import Input from '../../shared/Input/Input';
import DropDown from '../../shared/DropDown/DropDown';
import AmountInput from '../../shared/AmountInput/AmountInput';
import CurrencyInput from '../../shared/CurrencyInput/CurrencyInput';
import Button from '../../shared/Button/Button';

import './Send.scss';

const Send: React.FC = () => {
  return (
    <section className="page">
      <header className="page__header">Send</header>
      <section className="page__content">
        <Formik
          initialValues={{
            fromAccount: {
              label: 'Bitcoin',
              value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuXR1',
            },
            transferTo: '1LjDjujdaPPa61K2fvpyRLCdd8so1iuXR1',
            transferToWhat: 'Address',
            amount: 0.00032142,
            accountCurrency: 'BTC',
            amountInDollars: 2.91,
            fee: 0.001,
          }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div className="white-block">
                <FormGroup label="From account">
                  <DropDown
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
                    ]}
                    name="fromAccount"
                    placeholder="Choose account"
                  />
                </FormGroup>
                <FormGroup label="Transfer to">
                  <Input name="transferTo" type="textarea" />
                </FormGroup>
                <AmountInput />
                <div className="two-cols">
                  <div className="two-cols__left">
                    <FormGroup label="Network fee">
                      <CurrencyInput currency="btc">
                        <Input disabled name="fee" />
                      </CurrencyInput>
                    </FormGroup>
                  </div>
                  <div className="two-cols__right">
                    <Button onClick={() => {}}>Next</Button>
                  </div>
                </div>
                <nav className="pg">
                  <input type="button" className="pg__dot pg__dot--active" />
                  <input type="button" className="pg__dot" />
                  <input type="button" className="pg__dot" />
                </nav>
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

export default Send;
