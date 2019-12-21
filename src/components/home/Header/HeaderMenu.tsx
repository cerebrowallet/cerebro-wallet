import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors/colors';
import { LogOut as LogOutIcon } from 'react-feather';

interface Props {
  showMenu: boolean;
}

const HeaderMenuWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #fff;
  padding-top: 5.4375rem;
  transition: all 0.375s, transform 0.25s;
  z-index: ${(props: Props) => (props.showMenu ? 100 : -1)};
  visibility: ${(props: Props) => (props.showMenu ? 'visible' : 'hidden')};
  opacity: ${(props: Props) => (props.showMenu ? 1 : 0)};

  a {
    opacity: ${(props: Props) => (props.showMenu ? 1 : 0)};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    position: static;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    align-items: center;
    padding-top: 0;
    transform: none;
    background: none;
    transition: none;

    a {
      opacity: 1;
    }
  }
`;

const StyledLink = styled.a`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  color: ${colors.gray90};
  margin-top: 1.25rem;

  &:first-child {
    margin-top: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 2.188rem;
    font-size: 0.875rem;
    margin-top: 0;
    opacity: 1;

    &:first-child {
      padding-left: 0;
    }
  }
`;

interface HeaderMenuLinkProps {
  to: string;
  children: React.ReactNode;
}

const HeaderMenuLink: React.FC<HeaderMenuLinkProps> = props => (
  <Link {...props}>{props.children}</Link>
);

interface HeaderMenuLinkExtProps {
  href: string;
  children: React.ReactNode;
}

const HeaderMenuLinkExt: React.FC<HeaderMenuLinkExtProps> = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const HeaderMenuLogoutLink = styled(StyledLink)`
  vertical-align: middle;

  svg {
    color: ${colors.gray60};
    width: 1.125rem;
    height: 1.125rem;
  }
`;

const HeaderMenu: React.FC<Props> = ({ showMenu }) => {
  return (
    <HeaderMenuWrapper showMenu={showMenu}>
      <StyledLink as={HeaderMenuLink} to="/my-accounts">
        Accounts
      </StyledLink>
      <StyledLink as={HeaderMenuLinkExt} href="https://docs.cerebrowallet.com">
        Help Center
      </StyledLink>
      <StyledLink as={HeaderMenuLink} to="/settings">
        Settings
      </StyledLink>
      <HeaderMenuLogoutLink as={HeaderMenuLink} to="/logout">
        <LogOutIcon />
      </HeaderMenuLogoutLink>
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;
