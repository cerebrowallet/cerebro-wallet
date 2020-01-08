import React from 'react';
import { Smile as SmileIcon } from 'react-feather';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import {
  getBlockstackId,
  getUserName,
  getName,
} from '../../store/user/selectors';
import { Genders } from '../../enums';
import blockStackIcon from '../../images/blockstack-icon.svg';

import Avatar from './Avatar/Avatar';
import LabeledText from '../shared/LabeledText/LabeledText';
import WhiteBlock from '../shared/WhiteBlock';
import FormGroup from '../forms/FormGroup/FormGroup';
import Input from '../forms/Input/Input';
import DropDown from '../forms/DropDown/DropDown';
import Page from '../layout/Page/Page';

const GENDERS_OPTIONS = Object.keys(Genders).map(key => ({
  label: key,
  value: key,
}));

const ProfileDetails: React.FC = () => {
  const blockstackId = useSelector(getBlockstackId);
  const name = useSelector(getName);
  const username = useSelector(getUserName);

  return (
    <Page
      headerText="Profile"
      footerText="Use emoji by default or upload an avatar."
      FooterIcon={SmileIcon}
    >
      <Avatar />
      <LabeledText label="Blockstack ID" iconUrl={blockStackIcon}>
        {username}
        <br />
        ID-{blockstackId}
      </LabeledText>
      <LabeledText label="Blockstack name" canCopyText>
        {name}
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
