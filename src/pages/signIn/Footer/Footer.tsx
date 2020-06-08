import React from 'react';

import { Container, Copyright, Menu, MenuLink } from './styled';

const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>Cerebro Wallet &copy; 2020</Copyright>
      <Menu>
        <MenuLink href="/assets">Assets</MenuLink>
        <MenuLink href="/changelog">Changelog</MenuLink>
        <MenuLink href="/blog">Blog</MenuLink>
        <MenuLink href="/terms">Terms of Use</MenuLink>
        <MenuLink href="/privacy">Privacy Policy</MenuLink>
      </Menu>
    </Container>
  );
};

export default Footer;
