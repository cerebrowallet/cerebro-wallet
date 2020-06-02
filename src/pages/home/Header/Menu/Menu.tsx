import React from 'react';
import { LogOut as LogOutIcon } from 'react-feather';
import { useHistory } from 'react-router';

import { userSession } from '../../../../utils/blockstack';

import {
  MenuContainer,
  RouterLink,
  ExternalLink,
  LogOutButton,
} from './styled';

interface Props {
  showMenu: boolean;
}

const Menu: React.FC<Props> = ({ showMenu }) => {
  const history = useHistory();

  return (
    <MenuContainer showMenu={showMenu}>
      <RouterLink to="/my-accounts">Accounts</RouterLink>
      <ExternalLink href="https://wiki.cerebrowallet.com">
        Wiki
      </ExternalLink>
      <RouterLink to="/profile/settings">Settings</RouterLink>
      <LogOutButton
        onClick={() => {
          userSession.signUserOut();
          history.push('/signin');
        }}
      >
        <LogOutIcon />
      </LogOutButton>
    </MenuContainer>
  );
};

export default Menu;
