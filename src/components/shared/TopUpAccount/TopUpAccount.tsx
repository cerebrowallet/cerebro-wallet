import React, { useState, useEffect } from 'react';
import { Share2 as ShareIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import {
  getAccountById,
  getAccountsListWithBalance,
} from '../../../store/account/selectors';

import AccountsDropDown from '../../forms/DropDown/AccountsDropDown';
import FormGroup from '../../forms/FormGroup/FormGroup';
import QRCode from './QRCode/QRCode';
import LabeledText from '../LabeledText/LabeledText';
import PageContent from '../../layout/PageContent/PageContent';
import Hash from '../Hash/Hash';
import WhiteBlock from '../WhiteBlock';
import CopyText from '../CopyText/CopyText';

interface Props {
  accountId?: string;
}

const TopUpAccount: React.FC<Props> = ({ accountId }) => {
  const accounts = useSelector(getAccountsListWithBalance);
  const [selectedAccountId, setSelectedAccountId] = useState<
    string | undefined
  >(undefined);
  const account = useSelector(getAccountById(selectedAccountId));

  useEffect(() => {
    setSelectedAccountId(accountId);
  }, [accountId]);

  return (
    <PageContent
      headerText="Top up account"
      FooterIcon={ShareIcon}
      footerText="You can share this address with anyone who wants to send money to you."
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
                  <AccountsDropDown
                    options={accounts || []}
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
            <CopyText value={account.address}>
              <Hash breakAll value={account.address} />
            </CopyText>
          </LabeledText>
        </>
      )}
    </PageContent>
  );
};

export default TopUpAccount;
