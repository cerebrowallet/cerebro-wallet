import React from 'react';
import { Smile as SmileIcon } from 'react-feather';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { getUserData, getProfileData } from '../../store/user/selectors';
import { Genders } from '../../enums';
import { enumToMap } from '../../utils/utils';
import blockStackIcon from '../../images/blockstack-icon.svg';
import { updateProfile } from '../../store/user/actions';

import Avatar from './Avatar/Avatar';
import LabeledText from '../shared/LabeledText/LabeledText';
import WhiteBlock from '../shared/WhiteBlock';
import FormGroup from '../forms/FormGroup/FormGroup';
import Input from '../forms/Input/Input';
import DropDown from '../forms/DropDown/DropDown';
import Page from '../layout/Page/Page';

const gendersMap = enumToMap(Genders);

const GENDERS_OPTIONS = Array.from(gendersMap.entries()).map(
  ([label, value]) => ({
    value,
    label: label.toString(),
  })
);

const ProfileDetails: React.FC = () => {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const { gender, username } = useSelector(getProfileData);

  if (!userData) {
    return null;
  }

  const {
    username: blockStackUsername,
    identityAddress,
    profile: { name },
  } = userData;

  return (
    <Page
      headerText="Profile"
      footerText="Use emoji by default or upload an avatar."
      FooterIcon={SmileIcon}
    >
      <Avatar />
      <LabeledText label="Blockstack ID" iconUrl={blockStackIcon}>
        {blockStackUsername}
        <br />
        ID-{identityAddress}
      </LabeledText>
      <LabeledText label="Blockstack name" canCopyText>
        {name}
      </LabeledText>
      <WhiteBlock>
        <Formik
          initialValues={{
            username: username || '',
            gender: GENDERS_OPTIONS.filter(g => g.value === gender),
          }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Cerebro username">
                <Input name="username" placeholder="Enter" />
              </FormGroup>
              <FormGroup label="Gender (for emoji)">
                <DropDown
                  name="gender"
                  options={GENDERS_OPTIONS}
                  onChange={({ value }) =>
                    dispatch(
                      updateProfile({
                        update: {
                          gender: value,
                        },
                      })
                    )
                  }
                />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </WhiteBlock>
    </Page>
  );
};

export default ProfileDetails;
