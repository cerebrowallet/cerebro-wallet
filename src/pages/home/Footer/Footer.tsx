import React from 'react';

import { FooterContainer, MenuItem } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>Cerebro Wallet &copy; 2020</div>
      <nav className="footer__menu">
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
      </nav>
    </FooterContainer>
  );
};

export default Footer;
