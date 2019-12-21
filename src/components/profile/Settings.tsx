import React from 'react';
import { Send as SendIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import { Currencies, TimeOuts } from '../../enums';

import Page from '../layout/Page';
import FormGroup from '../forms/FormGroup';
import Input from '../forms/Input';
import DropDown from '../forms/DropDown/DropDown';

const CURRENCIES_OPTIONS = Object.values(Currencies).map(key => ({
  label: key.toUpperCase(),
  value: key,
}));

const TIMEOUTS_OPTIONS = Object.values(TimeOuts)
  .map(key => ({
    label: `${key} minute${key === 1 ? '' : 's'}`,
    value: key,
  }))
  .filter(option => typeof option.value === 'number');

const Settings: React.FC = () => {
  return (
    <Page
      headerText="Settings"
      footerText="Stay tuned for new features and essential market news with Cerebro."
      FooterIcon={SendIcon}
    >
      <div className="white-block">
        <Formik
          initialValues={{
            localCurrency: CURRENCIES_OPTIONS[0],
            timeout: TIMEOUTS_OPTIONS[1],
          }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <FormGroup label="Local currency">
                <DropDown name="localCurrency" options={CURRENCIES_OPTIONS} />
              </FormGroup>
              <FormGroup label="Gender (for emoji)">
                <DropDown name="timeout" options={TIMEOUTS_OPTIONS} />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
      <div className="white-block">
        <Formik initialValues={{ email: '' }} onSubmit={() => {}}>
          {() => (
            <Form>
              <FormGroup label="Newsletter">
                <Input name="email" placeholder="Enter your e-mail address" />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};

export default Settings;
