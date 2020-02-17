import React, { useState, useEffect } from 'react';
import { Share2 as ShareIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import {
  getAccountsList,
  getAccountById,
} from '../../../store/account/selectors';

import FormGroup from '../../forms/FormGroup/FormGroup';
import QRCode from './QRCode/QRCode';
import LabeledText from '../LabeledText/LabeledText';
import DropDown from '../../forms/DropDown/DropDown';
import Page from '../../layout/Page/Page';
import HashText from '../HashText/HashText';
import WhiteBlock from '../WhiteBlock';

interface Props {
  accountId?: string;
}

const TopUpAccount: React.FC<Props> = ({ accountId }) => {
  const accounts = useSelector(getAccountsList);
  const [selectedAccountId, setSelectedAccountId] = useState<
    string | undefined
  >(undefined);
  const account = useSelector(getAccountById(selectedAccountId));

  useEffect(() => {
    setSelectedAccountId(accountId);
  }, [accountId]);

  return (
    <Page
      headerText="Top up account"
      FooterIcon={ShareIcon}
      footerText="Instantly send money with custom fee to anyone or own wallet."
    >
      {!accountId && (
        <WhiteBlock>
          <Formik
            initialValues={{
              accountId: accountId || null,
            }}
            onSubmit={() => {}}
          >
            {() => (
              <Form>
                <FormGroup label="Account" className="form-group--no-margin">
                  <DropDown
                    options={accounts}
                    name="accountId"
                    onChange={({ id }) => {
                      if (typeof id === 'string') {
                        setSelectedAccountId(id);
                      }
                    }}
                  />
                </FormGroup>
              </Form>
            )}
          </Formik>
        </WhiteBlock>
      )}
      {account && (
        <>
          <QRCode address={account.address} />
          <LabeledText label="Public address">
            <HashText breakAll>{account.address}</HashText>
          </LabeledText>
          <LabeledText label="Legacy format" canCopyText>
            <HashText breakAll>
              afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
            </HashText>
          </LabeledText>
        </>
      )}
    </Page>
  );
};

export default TopUpAccount;
