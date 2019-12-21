import React from 'react';
import { Unlock as UnlockIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import Page from '../layout/Page';
import FormGroup from '../forms/FormGroup';
import Button from '../forms/Button';
import WhiteBlock from '../shared/WhiteBlock';

import { COINS } from '../../dummyData';

import CoinDropDown from '../forms/DropDown/CoinDropDown';

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
      <Formik initialValues={{ account: OPTIONS[0] }} onSubmit={() => {}}>
        {() => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Choose a coin">
                <CoinDropDown name="account" options={OPTIONS} />
              </FormGroup>
              <Button type="submit">Create</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default CreateAccount;
