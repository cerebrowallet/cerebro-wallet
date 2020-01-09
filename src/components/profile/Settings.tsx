import React from 'react';
import { Send as SendIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { Currencies, TimeOuts } from '../../enums';
import { getSettings } from '../../store/user/selectors';

import Page from '../layout/Page/Page';
import FormGroup from '../forms/FormGroup/FormGroup';
import Input from '../forms/Input/Input';
import DropDown from '../forms/DropDown/DropDown';
import WhiteBlock from '../shared/WhiteBlock';

const CURRENCIES_OPTIONS = Object.values(Currencies).map(key => ({
  label: key.toUpperCase(),
  value: key,
}));

const TIMEOUTS_OPTIONS = Object.values(TimeOuts)
  .map(key => {
    const seconds = key as any;
    const minutes = parseInt(seconds, 10) / 60000;

    return {
      label: `${minutes} minute${key === 1 ? '' : 's'}`,
      value: minutes,
    };
  })
  .filter(option => !Number.isNaN(option.value));

const Settings: React.FC = () => {
  const settings = useSelector(getSettings);

  if (!settings) {
    return null;
  }

  return (
    <Page
      headerText="Settings"
      footerText="Stay tuned for new features and essential market news with Cerebro."
      FooterIcon={SendIcon}
    >
      <WhiteBlock>
        <Formik
          initialValues={{
            currency: CURRENCIES_OPTIONS.filter(
              opt => opt.value === settings.currency
            )[0],
            timeout: TIMEOUTS_OPTIONS.filter(
              opt => opt.value * 60000 === settings.timeout
            )[0],
          }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Local currency">
                <DropDown name="currency" options={CURRENCIES_OPTIONS} />
              </FormGroup>
              <FormGroup label="Session timeout">
                <DropDown name="timeout" options={TIMEOUTS_OPTIONS} />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </WhiteBlock>
      <WhiteBlock>
        <Formik
          initialValues={{ email: settings.email }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Newsletter">
                <Input name="email" placeholder="Enter your e-mail address" />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </WhiteBlock>
    </Page>
  );
};

export default Settings;
