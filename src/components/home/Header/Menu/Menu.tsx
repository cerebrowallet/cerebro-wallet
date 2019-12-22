import React from 'react';
import { LogOut as LogOutIcon } from 'react-feather';

import {
  MenuContainer,
  RouterLink,
  ExternalLink,
  LinkWithIcon,
} from './styled';

interface Props {
  showMenu: boolean;
}

const Menu: React.FC<Props> = ({ showMenu }) => {
  return (
    <MenuContainer showMenu={showMenu}>
      <RouterLink to="/my-accounts">Accounts</RouterLink>
      <ExternalLink href="https://docs.cerebrowallet.com">
        Help Center
      </ExternalLink>
      <RouterLink to="/settings">Settings</RouterLink>
      <LinkWithIcon to="/logout">
        <LogOutIcon />
      </LinkWithIcon>
    </MenuContainer>
  );
};

export default Menu;
