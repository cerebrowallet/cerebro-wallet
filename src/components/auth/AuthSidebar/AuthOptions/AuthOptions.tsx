import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import AuthButton from '../AuthButton/AuthButton';
import Option from './Option/Option';
import { Wrapper, Controls, Control, OptionsWrapper } from './styled';

enum Tabs {
  SignUp,
  SignIn,
}

const AuthOptions: React.FC<RouteComponentProps> = ({ match, history }) => {
  const [tab, setTab] = useState(
    match.url.includes('signup') ? Tabs.SignUp : Tabs.SignIn
  );

  return (
    <Wrapper>
      <Controls>
        <Control
          type="button"
          active={tab === Tabs.SignUp}
          onClick={() => {
            setTab(Tabs.SignUp);
            history.push('/signup');
          }}
        >
          Sign Up
        </Control>
        <Control
          type="button"
          active={tab === Tabs.SignIn}
          onClick={() => {
            history.push('/signin');
            setTab(Tabs.SignIn);
          }}
        >
          Sign In
        </Control>
      </Controls>
      <OptionsWrapper>
        <Option active={tab === Tabs.SignUp}>
          <p>
            Easy to try, sign up for a free decentralized account via Blockstack
            that you can manage popular cryptocurrencies.
          </p>
          <AuthButton onClick={() => {}}>Create Blockstack ID</AuthButton>
        </Option>
        <Option active={tab === Tabs.SignIn}>
          <p>
            Great to see you again! Sign in to and get an overview of your
            cryptocurrency accounts, transaction history, and general settings.
          </p>
          <AuthButton onClick={() => {}}>Sign In with Blockstack</AuthButton>
        </Option>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default withRouter(AuthOptions);
