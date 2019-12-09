import React from 'react';
import { Unlock as UnlockIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import Page from '../../shared/Page/Page';
import FormGroup from '../../shared/FormGroup/FormGroup';
import Button from '../../shared/Button/Button';

import { COINS } from '../../../dummyData';

import CoinDropDown from '../../shared/CoinDropDown/CoinDropDown';

const OPTIONS = COINS.map(coin => ({
  label: coin.name,
  value: coin.code,
}));

const CreateAccount: React.FC = () => {
  return (
    <Page
      headerText="Create a new account"
      footerText="The account will be created with your Mnemonic phrase. Available features: check balance, charts, transactions history, send, receive and in-app exchange service."
      FooterIcon={UnlockIcon}
    >
      <Formik
        initialValues={{ account: OPTIONS[0] }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <section className="white-block">
              <FormGroup label="Choose a coin">
                <CoinDropDown name="account" options={OPTIONS} />
              </FormGroup>
              <Button type="submit">Create</Button>
            </section>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default CreateAccount;
