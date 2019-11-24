import React from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__company">
        &copy; 2019 Cerebro Team
      </div>
      <nav className="footer__menu">
        <a href="#" className="footer__menu-item">Show Guide</a>
        <a href="#" className="footer__menu-item">Changelog</a>
        <a href="#" className="footer__menu-item">Blog</a>
        <a href="#" className="footer__menu-item">Notice</a>
      </nav>
    </footer>
  )
};

export default Footer;
