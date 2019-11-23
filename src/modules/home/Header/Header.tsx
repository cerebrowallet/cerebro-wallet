import React, { useState } from 'react';
import {
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'react-feather';
import { Link } from 'react-router-dom';

import userImage from '../../../images/user.png';
import './Header.scss';

import CircleButton from '../../shared/CircleButton/CircleButton';

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="user">
        <div className="user__avatar">
          <img src={userImage} className="user__avatar-img" alt="" />
        </div>
        <div className="user__text">
          Hello, <strong className="user__name">Eugene</strong>
        </div>
      </div>
      <nav
        className={`header-menu${
          showMobileMenu ? ' header-menu--mobile-open' : ''
        }`}
      >
        <CircleButton
          className="header-menu__mobile-trigger"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {!showMobileMenu ? (
            <MenuIcon className="header-menu__mobile-trigger-icon" />
          ) : (
            <ChevronLeftIcon className="header-menu__mobile-trigger-icon" />
          )}
        </CircleButton>
        <nav className="header-menu__nav-items">
          <Link to="/accounts" className="header-menu__item">
            Accounts
          </Link>
          <Link to="/help" className="header-menu__item">
            Help Center
          </Link>
          <Link to="/settings" className="header-menu__item">
            Settings
          </Link>
          <Link
            to="/logout"
            className="header-menu__item header-menu__item--logout"
          >
            <LogOutIcon className="header-menu__logout-icon" />
          </Link>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
