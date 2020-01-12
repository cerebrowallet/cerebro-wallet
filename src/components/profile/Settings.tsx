import React from 'react';
import { Send as SendIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { Currencies, TimeOuts } from '../../enums';
import { getSettings } from '../../store/user/selectors';
import { updateSettings } from '../../store/user/actions';

import Page from '../layout/Page/Page';
import FormGroup from '../forms/FormGroup/FormGroup';
import Input from '../forms/Input/Input';
import DropDown from '../forms/DropDown/DropDown';
import WhiteBlock from '../shared/WhiteBlock';
import NewsletterEmailInput from './NewsletterEmailInput/NewsletterEmailInput';

const CURRENCIES_OPTIONS = Object.values(Currencies).map(key => ({
  label: key.toUpperCase(),
  value: key,
}));

const TIMEOUTS_OPTIONS = Object.values(TimeOuts)
  .map(key => {
    const k = key as any;
    const ms = parseInt(k, 10);
    const minutes = ms / 60000;

    return {
      label: `${minutes} minute${key === 1 ? '' : 's'}`,
      value: ms,
    };
  })
  .filter(option => !Number.isNaN(option.value));

const Settings: React.FC = () => {
  const settings = useSelector(getSettings);
  const dispatch = useDispatch();

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
              opt => opt.value === settings.timeout
            )[0],
          }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Local currency">
                <DropDown
                  name="currency"
                  options={CURRENCIES_OPTIONS}
                  onChange={({ value }) => {
                    dispatch(
                      updateSettings({
                        update: {
                          currency: value,
                        },
                      })
                    );
                  }}
                />
              </FormGroup>
              <FormGroup label="Session timeout">
                <DropDown
                  name="timeout"
                  options={TIMEOUTS_OPTIONS}
                  onChange={({ value }) => {
                    dispatch(
                      updateSettings({
                        update: {
                          timeout: value,
                        },
                      })
                    );
                  }}
                />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </WhiteBlock>
      <WhiteBlock>
        <FormGroup label="Newsletter">
          <NewsletterEmailInput />
        </FormGroup>
      </WhiteBlock>
    </Page>
  );
};

export default Settings;
