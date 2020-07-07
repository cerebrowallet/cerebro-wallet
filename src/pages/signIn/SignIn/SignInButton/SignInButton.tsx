import React from 'react';
import { useConnect } from '@blockstack/connect';

import { Button, BlockstackLogo } from './styled';
import blockstackLogo from '../../../../images/blockstack-logo.svg';

const SignInButton: React.FC = () => {
  const { doOpenAuth } = useConnect();

  return (
    <Button onClick={() => doOpenAuth()}>
      <BlockstackLogo src={blockstackLogo} alt="Blockstack" />
      Sign in with Blockstack
    </Button>
  );
};

export default SignInButton;
