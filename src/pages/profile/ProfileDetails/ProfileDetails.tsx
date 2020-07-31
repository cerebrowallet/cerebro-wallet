import React from 'react';
import { Smile as SmileIcon } from 'react-feather';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import blockStackIcon from '../../../images/blockstack-icon.svg';

import { getProfile, getGendersList } from '../../../store/user/selectors';
import { updateProfile } from '../../../store/user/actions';

import { Link } from './styled';

import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import LabeledText from '../../../components/shared/LabeledText/LabeledText';
import WhiteBlock from '../../../components/shared/WhiteBlock';
import FormGroup from '../../../components/forms/FormGroup/FormGroup';
import DropDown from '../../../components/forms/DropDown/DropDown';
import PageContent from '../../../components/layout/PageContent/PageContent';
import UserNameInput from '../UserNameInput';
import CopyText from '../../../components/shared/CopyText/CopyText';
import Loader from '../../../components/shared/Loader/Loader';

const ProfileDetails: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfile);
  const genders = useSelector(getGendersList);

  if (!profile) {
    return <Loader />;
  }

  const { blockstack, username, gender, hasBlockstackProfile } = profile;
  const name = blockstack.name || profile.blockstack.username.split('.')[0];

  return (
    <PageContent
      headerText="Profile"
      footerText="Use emoji by default or upload an avatar."
      FooterIcon={SmileIcon}
    >
      <ProfileAvatar />
      <LabeledText label="Blockstack ID" iconUrl={blockStackIcon}>
        <Link
          href={`https://explorer.blockstack.org/name/${blockstack.username}`}
          target="_blank"
        >
          {blockstack.username}
        </Link>
        <br />
        <CopyText value={`ID-${blockstack.address}`}>
          ID-{blockstack.address}
        </CopyText>
      </LabeledText>
      <LabeledText label="Blockstack name">
        <CopyText value={name}>{name}</CopyText>
      </LabeledText>
      <WhiteBlock>
        <Formik
          initialValues={{
            username: username || '',
            gender: genders.filter((g) => g.id === gender),
          }}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => (
            <Form>
              <FormGroup label="Cerebro username">
                <UserNameInput />
              </FormGroup>
              {!hasBlockstackProfile && (
                <FormGroup label="Gender (for emoji)">
                  <DropDown
                    name="gender"
                    options={genders}
                    onChange={({ id }) => {
                      dispatch(
                        updateProfile({
                          update: {
                            gender: id,
                          },
                        })
                      );
                    }}
                  />
                </FormGroup>
              )}
            </Form>
          )}
        </Formik>
      </WhiteBlock>
    </PageContent>
  );
};

export default ProfileDetails;
