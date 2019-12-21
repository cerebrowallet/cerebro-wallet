import React from 'react';
import { Smile as SmileIcon } from 'react-feather';
import { Form, Formik } from 'formik';

import { Genders } from '../../enums';
import blockStackIcon from '../../images/blockstack-icon.svg';

import Avatar from './Avatar';
import LabeledText from '../shared/LabeledText';
import WhiteBlock from '../shared/WhiteBlock';
import FormGroup from '../forms/FormGroup';
import Input from '../forms/Input';
import DropDown from '../forms/DropDown/DropDown';
import Page from '../layout/Page';

const GENDERS_OPTIONS = Object.keys(Genders).map(key => ({
  label: key,
  value: key,
}));

const ProfileDetails: React.FC = () => {
  return (
    <Page
      headerText="Profile"
      footerText="Use emoji by default or upload an avatar."
      FooterIcon={SmileIcon}
    >
      <Avatar />
      <LabeledText
        label="Blockstack ID"
        icon={<img src={blockStackIcon} alt="" />}
      >
        <p>
          eugeniusives.id.blockstack
          <br />
          ID-175LZCS78r9YFjBQYsaqa5uYg5eHErDRPa
        </p>
      </LabeledText>
      <LabeledText label="Blockstack username" canCopyText>
        Eugene Ives
      </LabeledText>
      <WhiteBlock>
        <Formik
          initialValues={{ username: '', gender: GENDERS_OPTIONS[0] }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <FormGroup label="Cerebro username">
                <Input name="username" placeholder="Enter" />
              </FormGroup>
              <FormGroup label="Gender (for emoji)">
                <DropDown name="gender" options={GENDERS_OPTIONS} />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </WhiteBlock>
    </Page>
  );
};

export default ProfileDetails;
