import React from 'react';
import { Share2 as ShareIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import FormGroup from '../FormGroup/FormGroup';
import QRCode from './QRCode/QRCode';
import LabeledText from '../LabeledText/LabeledText';
import DropDown from '../DropDown/DropDown';
import Page from '../Page/Page';
import HashText from '../HashText/HashText';

import { ACCOUNTS_OPTIONS } from '../../../dummyData';

const TopUpAccount: React.FC = () => {
  return (
    <Page
      headerText="Send"
      FooterIcon={ShareIcon}
      footerText="Instantly send money with custom fee to anyone or own wallet."
    >
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
        <HashText breakAll>1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
      </LabeledText>
      <LabeledText label="Legacy format" canCopyText>
        <HashText breakAll>afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
      </LabeledText>
    </Page>
  );
};

export default TopUpAccount;
