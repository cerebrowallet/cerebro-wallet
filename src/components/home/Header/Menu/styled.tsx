import styled from 'styled-components';
import colors from '../../../../styles/colors/colors';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  showMenu: boolean;
}

export const MenuContainer = styled.nav`
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

export const MenuLink = styled.a`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  color: ${props => props.theme.colors.altPrimary};
  margin-top: 1.25rem;
  transition: color .15s ease-in;

  &:first-child {
    margin-top: 0;
  }
  
  &:hover {
    color: ${props => props.theme.colors.altHover};
  }
  
  &:active {
    color: ${props => props.theme.colors.primary};
  }
  
  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-left: 2.188rem;
    font-size: 0.875rem;
    margin-top: 0;
    opacity: 1;

    &:first-child {
      padding-left: 0;
    }
  }
`;

const HtmlLink: React.FC = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export const ExternalLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = props => (
  <MenuLink as={HtmlLink} {...props}>
    {props.children}
  </MenuLink>
);

export const RouterLink: React.FC<{
  to: string;
  children: React.ReactNode;
}> = props => (
  <MenuLink as={Link} {...props}>
    {props.children}
  </MenuLink>
);

const Btn = styled.button`
  vertical-align: middle;
  background: none;
  border: 0;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }

  svg {
    color: ${colors.gray60};
    width: 1.125rem;
    height: 1.125rem;
  }
`;

const Button: React.FC = props => (
  <Btn type="button" {...props}>
    {props.children}
  </Btn>
);

export const LogOutButton: React.FC<{
  onClick: () => void;
}> = props => (
  <MenuLink as={Button} {...props}>
    {props.children}
  </MenuLink>
);
