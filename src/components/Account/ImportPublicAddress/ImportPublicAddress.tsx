import React from 'react';
import { Activity as ActivityIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import { COINS } from '../../../dummyData';

import Page from '../../shared/Page/Page';
import CoinDropDown from '../../shared/CoinDropDown/CoinDropDown';
import FormGroup from '../../shared/FormGroup/FormGroup';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';

const OPTIONS = COINS.map(coin => ({
  label: coin.name,
  value: coin.code,
}));

const ImportPublicAddress: React.FC = () => {
  return (
    <Page
      headerText="Import Public Address"
      footerText="Add a public address and see what happens to it. Available features: check balance, charts and transactions history from public explorer."
      FooterIcon={ActivityIcon}
    >
      <Formik
        initialValues={{ account: OPTIONS[0], key: '', accountName: '' }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <section className="white-block">
              <FormGroup label="Choose a coin">
                <CoinDropDown name="account" options={OPTIONS} />
              </FormGroup>
              <FormGroup label="Public Address">
                <Input
                  name="key"
                  type="textarea"
                  required
                  placeholder="Enter BTC address"
                />
              </FormGroup>
              <FormGroup label="Account name">
                <Input name="accountName" placeholder="My Bitcoin (optional)" />
              </FormGroup>
              <Button type="submit">
                Import
              </Button>
            </section>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default ImportPublicAddress;
