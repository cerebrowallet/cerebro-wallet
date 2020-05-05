import React from 'react';

import { FooterContainer, MenuItem } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>&copy; 2019 Cerebro Team</div>
      <nav className="footer__menu">
        <MenuItem href="#">Show Guide</MenuItem>
        <MenuItem href="#">Changelog</MenuItem>
        <MenuItem href="#">Blog</MenuItem>
        <MenuItem href="#">Notice</MenuItem>
      </nav>
    </FooterContainer>
  );
};

export default Footer;
