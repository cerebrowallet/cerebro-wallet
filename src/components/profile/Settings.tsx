import React from 'react';
import { Send as SendIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import {
  getSettings,
  getCurrenciesList,
  getTimeoutsList,
} from '../../store/user/selectors';
import { updateSettings } from '../../store/user/actions';

import Page from '../layout/Page/Page';
import FormGroup from '../forms/FormGroup/FormGroup';
import DropDown from '../forms/DropDown/DropDown';
import WhiteBlock from '../shared/WhiteBlock';
import NewsletterEmailInput from './NewsletterEmailInput/NewsletterEmailInput';
import Loader from '../shared/Loader/Loader';

const Settings: React.FC = () => {
  const settings = useSelector(getSettings);
  const currencies = useSelector(getCurrenciesList);
  const timeouts = useSelector(getTimeoutsList);
  const dispatch = useDispatch();

  if (!settings) {
    return <Loader withMargin />;
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
            currency: currencies.filter(opt => opt.id === settings.currency)[0],
            timeout: timeouts.filter(opt => opt.id === settings.timeout)[0],
          }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Local currency">
                <DropDown
                  name="currency"
                  options={currencies}
                  onChange={({ id }) => {
                    dispatch(
                      updateSettings({
                        update: {
                          currency: id,
                        },
                      })
                    );
                  }}
                />
              </FormGroup>
              <FormGroup label="Session timeout">
                <DropDown
                  name="timeout"
                  options={timeouts}
                  onChange={({ id }) => {
                    dispatch(
                      updateSettings({
                        update: {
                          timeout: id,
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
