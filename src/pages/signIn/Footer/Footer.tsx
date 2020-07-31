import React from 'react';

import { Container, Copyright, Menu, MenuItem } from './styled';

const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>Cerebro Wallet &copy; 2020</Copyright>
      <Menu>
        <MenuItem href="mailto:support@cerebrowallet.com">
          Send feedback
        </MenuItem>
        <MenuItem
          href="https://github.com/cerebrowallet/cerebro-wallet/issues"
          target="_blank"
        >
          Create issue
        </MenuItem>
        <MenuItem href="https://wiki.cerebrowallet.com/beta" target="_blank">
          For beta testers
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Footer;
