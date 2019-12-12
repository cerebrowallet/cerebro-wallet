import React from 'react';
import {
  Smile as SmileIcon,
  Paperclip as PaperclipIcon,
  X as CloseIcon,
} from 'react-feather';
import { useHistory } from 'react-router';
import { Formik, Form } from 'formik';

import './Profile.scss';
import userImg from '../../images/user.png';
import blockStackIcon from '../../images/blockstack-icon.svg';

import Page from '../shared/Page/Page';
import CircleButton from '../shared/CircleButton/CircleButton';
import ProfileMenu from '../shared/ProfileMenu/ProfileMenu';
import LabeledText from '../shared/LabeledText/LabeledText';
import FormGroup from "../shared/FormGroup/FormGroup";
import Input from "../shared/Input/Input";
import DropDown from "../shared/DropDown/DropDown";

const GENDERS = [
  { value: 'incognito', label: 'Incognito' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const Profile: React.FC = () => {
  const history = useHistory();

  return (
    <main className="content content--features">
      <section className="main features">
        <Page
          headerText="Profile"
          footerText="Use emoji by default or upload an avatar."
          FooterIcon={SmileIcon}
        >
          <button type="button" className="avatar">
            <span className="avatar__icon">
              <PaperclipIcon />
            </span>
            <img src={userImg} alt="" className="avatar__img" />
          </button>
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
          <LabeledText
            label="Blockstack username"
            canCopyText
          >
            Eugene Ives
          </LabeledText>
          <div className="white-block">
            <Formik initialValues={{ username: '', gender: GENDERS[0] }} onSubmit={() => {}}>
              {() => (
                <Form>
                  <FormGroup label="Cerebro username">
                    <Input name="username" placeholder="Enter" />
                  </FormGroup>
                  <FormGroup label="Gender (for emoji)">
                    <DropDown name="gender" options={GENDERS} />
                  </FormGroup>
                </Form>
              )}
            </Formik>
          </div>
        </Page>
        <CircleButton
          className="close-page-btn"
          onClick={() => history.push('/')}
        >
          <CloseIcon />
        </CircleButton>
      </section>
      <aside className="sidebar">
        <ProfileMenu />
      </aside>
    </main>
  );
};

export default Profile;
