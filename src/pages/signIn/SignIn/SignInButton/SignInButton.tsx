import React from 'react';

import { Button, BlockstackLogo } from './styled';
import blockstackLogo from '../../../../images/blockstack-logo.svg';
import { userSession } from '../../../../utils/blockstack';

const SignInButton: React.FC = () => {
  return (
    <Button onClick={() => userSession.redirectToSignIn()}>
      <BlockstackLogo src={blockstackLogo} alt="Blockstack" />
      Sign in with Blockstack
    </Button>
  );
};

export default SignInButton;
