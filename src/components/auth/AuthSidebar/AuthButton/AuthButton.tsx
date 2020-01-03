import React from 'react';

import { Button, BlockstackLogo } from './styled';
import blockstackLogo from '../../../../images/blockstack-logo.svg';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const AuthButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      <BlockstackLogo src={blockstackLogo} alt="" />
      {children}
    </Button>
  );
};

export default AuthButton;
