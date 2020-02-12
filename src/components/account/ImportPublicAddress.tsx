import React from 'react';
import { useSelector } from 'react-redux';
import { Activity as ActivityIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import { getCoinsList } from '../../store/user/selectors';

import Page from '../layout/Page/Page';
import CoinDropDown from '../forms/DropDown/CoinDropDown';
import FormGroup from '../forms/FormGroup/FormGroup';
import Input from '../forms/Input/Input';
import Button from '../forms/Button/Button';
import WhiteBlock from '../shared/WhiteBlock';

const ImportPublicAddress: React.FC = () => {
  const coins = useSelector(getCoinsList);

  return (
    <Page
      headerText="Import Public Address"
      footerText="Add a public address and see what happens to it. Available features: check balance, charts and transactions history from public explorer."
      FooterIcon={ActivityIcon}
    >
      <Formik
        initialValues={{ account: coins[0], key: '', accountName: '' }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Choose a coin">
                <CoinDropDown name="account" options={coins} />
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
