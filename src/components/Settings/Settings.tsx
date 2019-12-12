import React from 'react';
import { Send as SendIcon } from 'react-feather';
import { useHistory } from 'react-router';
import { Formik, Form } from 'formik';

import { Currencies } from '../../enums';

import Page from '../shared/Page/Page';
import ProfileMenu from '../shared/ProfileMenu/ProfileMenu';
import FormGroup from '../shared/FormGroup/FormGroup';
import Input from '../shared/Input/Input';
import DropDown from '../shared/DropDown/DropDown';
import CloseCornerButton from '../shared/CloseCornerButton/CloseCornerButton';

const CURRENCIES = [
  {
    label: 'USD',
    value: Currencies.USD,
  },
  {
    label: 'BTC',
    value: Currencies.BTC,
  },
  {
    label: 'STX',
    value: Currencies.STX,
  },
];

const TIMEOUTS = [
  {
    label: '1 minute',
    value: 1,
  },
  {
    label: '3 minutes',
    value: 3,
  },
  {
    label: '5 minutes',
    value: 5,
  },
  {
    label: '10 minutes',
    value: 10,
  },
  {
    label: '30 minutes',
    value: 30,
  },
];

const Settings: React.FC = () => {
  const history = useHistory();

  return (
    <main className="content content--features">
      <section className="main features">
        <Page
          headerText="Settings"
          footerText="Stay tuned for new features and essential market news with Cerebro."
          FooterIcon={SendIcon}
        >
          <div className="white-block">
            <Formik
              initialValues={{
                localCurrency: CURRENCIES[0],
                timeout: TIMEOUTS[1],
              }}
              onSubmit={() => {}}
            >
              {() => (
                <Form>
                  <FormGroup label="Cerebro username">
                    <DropDown name="localCurrency" options={CURRENCIES} />
                  </FormGroup>
                  <FormGroup label="Gender (for emoji)">
                    <DropDown name="timeout" options={TIMEOUTS} />
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
                    <Input
                      name="email"
                      placeholder="Enter your e-mail address"
                    />
                  </FormGroup>
                </Form>
              )}
            </Formik>
          </div>
        </Page>
        <CloseCornerButton />
      </section>
      <aside className="sidebar">
        <ProfileMenu />
      </aside>
    </main>
  );
};

export default Settings;
