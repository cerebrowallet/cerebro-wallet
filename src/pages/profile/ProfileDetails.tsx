import React from 'react';
import { Smile as SmileIcon } from 'react-feather';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import blockStackIcon from '../../images/blockstack-icon.svg';

import {
  getUserData,
  getProfile,
  getGendersList,
} from '../../store/user/selectors';
import { updateProfile } from '../../store/user/actions';

import Avatar from './Avatar/Avatar';
import LabeledText from '../../components/shared/LabeledText/LabeledText';
import WhiteBlock from '../../components/shared/WhiteBlock';
import FormGroup from '../../components/forms/FormGroup/FormGroup';
import DropDown from '../../components/forms/DropDown/DropDown';
import PageContent from '../../components/layout/PageContent/PageContent';
import UserNameInput from './UserNameInput';
import CopyText from '../../components/shared/CopyText/CopyText';

const ProfileDetails: React.FC = () => {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const profile = useSelector(getProfile);
  const genders = useSelector(getGendersList);

  if (!userData || !profile) {
    return null;
  }

  const {
    username: blockStackUsername,
    identityAddress,
    profile: { name },
  } = userData;

  const userName = name ? name : blockStackUsername.split('.')[0];

  return (
    <PageContent
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
      <LabeledText label="Blockstack name">
        <CopyText value={userName}>{userName}</CopyText>
      </LabeledText>
      <WhiteBlock>
        <Formik
          initialValues={{
            username: profile.username || '',
            gender: genders.filter((g) => g.id === profile.gender),
          }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Cerebro username">
                <UserNameInput />
              </FormGroup>
              <FormGroup label="Gender (for emoji)">
                <DropDown
                  name="gender"
                  options={genders}
                  onChange={({ id }) =>
                    dispatch(
                      updateProfile({
                        update: {
                          gender: id,
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
    </PageContent>
  );
};

export default ProfileDetails;
