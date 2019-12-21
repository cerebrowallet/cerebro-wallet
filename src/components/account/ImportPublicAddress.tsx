import React from 'react';
import { Activity as ActivityIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import { COINS } from '../../dummyData';

import Page from '../layout/Page';
import CoinDropDown from '../forms/DropDown/CoinDropDown';
import FormGroup from '../forms/FormGroup';
import Input from '../forms/Input';
import Button from '../forms/Button';
import WhiteBlock from '../shared/WhiteBlock';

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
            <WhiteBlock>
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
              <Button type="submit">Import</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default ImportPublicAddress;
