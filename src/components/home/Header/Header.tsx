import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'react-feather';
import styled from 'styled-components';

import User from './User';
import HeaderMenu from './HeaderMenu';
import { StyledButton } from '../../shared/CircleButton';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// padding: 0.9375rem 1.25rem 0;
//
// @media (min-width: ${props => props.theme.breakpoints.xl}) {
//   padding: 2.188rem 4.688rem 0 0;
// }

const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuMobileTrigger = styled(StyledButton)`
  z-index: 101;

  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <StyledHeader>
      <User />
      <HeaderMenuWrapper>
        <MenuMobileTrigger onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <ChevronLeftIcon /> : <MenuIcon />}
        </MenuMobileTrigger>
        <HeaderMenu showMenu={showMobileMenu} />
      </HeaderMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
