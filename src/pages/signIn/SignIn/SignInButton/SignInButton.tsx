import React from 'react';

import { Button, BlockstackLogo } from './styled';
import blockstackLogo from '../../../../images/blockstack-logo.svg';
import { handleSignIn } from '../../../../utils/blockstack';

const SignInButton: React.FC = () => {
  return (
    <Button onClick={() => handleSignIn()}>
      <BlockstackLogo src={blockstackLogo} alt="Blockstack" />
      Sign in with Blockstack
    </Button>
  );
};

export default SignInButton;
