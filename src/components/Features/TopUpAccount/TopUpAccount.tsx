import React from 'react';
import { Share2 as ShareIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import FormGroup from '../../shared/FormGroup/FormGroup';
import QRCode from './QRCode/QRCode';
import LabeledText from '../../shared/LabeledText/LabeledText';
import DropDown from '../../shared/DropDown/DropDown';

import { ACCOUNTS_OPTIONS } from '../../../dummyData';

const TopUpAccount: React.FC = () => {
  return (
    <section className="page">
      <header className="page__header">Top up account</header>
      <section className="page__content">
        <section className="white-block">
          <Formik
            initialValues={{
              account: null,
            }}
            onSubmit={() => {}}
          >
            {() => (
              <Form>
                <FormGroup label="Account" className="form-group--no-margin">
                  <DropDown
                    options={ACCOUNTS_OPTIONS}
                    name="account"
                    onChange={() => {}}
                  />
                </FormGroup>
              </Form>
            )}
          </Formik>
        </section>
        <QRCode />
        <LabeledText label="Public address">
          1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
        </LabeledText>
        <LabeledText label="Legacy format" canCopyText>
          afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
        </LabeledText>
      </section>
      <footer className="page-footer">
        <ShareIcon className="page-footer__icon" />
        You can share this address with anyone who want to send money to you.
      </footer>
    </section>
  );
};

export default TopUpAccount;
