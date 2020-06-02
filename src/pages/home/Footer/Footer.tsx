import React from 'react';

import { FooterContainer, MenuItem } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>Cerebro Wallet &copy; 2020</div>
      <nav className="footer__menu">
        <MenuItem href="#">Assets</MenuItem>
        <MenuItem href="#">Changelog</MenuItem>
        <MenuItem href="#">Blog</MenuItem>
        <MenuItem href="#">Terms of Use</MenuItem>
        <MenuItem href="#">Privacy Policy</MenuItem>
      </nav>
    </FooterContainer>
  );
};

export default Footer;
