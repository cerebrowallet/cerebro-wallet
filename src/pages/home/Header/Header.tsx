import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'react-feather';

import User from './User/User';
import Menu from './Menu/Menu';
import {
  HeaderContainer,
  MenuMobileTriggerButton,
  MenuWrapper,
} from './styled';

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <HeaderContainer>
      <User />
      <MenuWrapper>
        <MenuMobileTriggerButton
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <ChevronLeftIcon /> : <MenuIcon />}
        </MenuMobileTriggerButton>
        <Menu showMenu={showMobileMenu} />
      </MenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
