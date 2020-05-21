import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'react-feather';

import {
  HeaderContainer,
  MenuMobileTriggerButton,
  MenuWrapper,
} from './styled';

import User from './User/User';
import Menu from './Menu/Menu';
import ThemeToggle from './ThemeToggle/ThemeToggle';

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <HeaderContainer>
      <User />
      <MenuWrapper>
        <ThemeToggle />
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
