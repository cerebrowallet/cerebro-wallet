import React from 'react';
import { Shield as ShieldIcon } from 'react-feather';
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

const ImportPrivateKey: React.FC = () => {
  return (
    <Page
      headerText="Import Private Key"
      footerText="All your keys securely stored via Decentralized Storage Gaia by Blockstack. Keys cannot be used to store or transfer your funds by anyone except you. Available features: check balance, charts, transactions history, send, receive and in-app exchange service."
      FooterIcon={ShieldIcon}
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
              <FormGroup label="Private Key, Mnemonic, WIF or XPRV">
                <Input
                  name="key"
                  type="textarea"
                  required
                  rows={3}
                  placeholder="Write here your mnemonic, private key, WIF, or anything you've got. Cerebro will do its best to guess the correct format and import your wallet"
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

export default ImportPrivateKey;
