import React from 'react';

import SignInButton from './SignInButton/SignInButton';
import { Wrapper, Text, TopCircle } from './styled';
import LogoIcon from '../../../components/shared/LogoIcon/LogoIcon';

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <TopCircle>
        <LogoIcon />
      </TopCircle>
      <Text>
        One click sign in to Cerebro if you have universal login by Blockstack.
      </Text>
      <SignInButton />
    </Wrapper>
  );
};

export default SignIn;
