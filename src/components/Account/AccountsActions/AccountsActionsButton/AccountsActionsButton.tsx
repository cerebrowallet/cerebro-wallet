import React from 'react';

import './AccountsActionsButton.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  Icon: React.ComponentType<any>;
  name: string;
  desc: string;
  link: string;
  className?: string;
};

const AccountsActionsButton: React.FC<Props> = ({
  Icon,
  name,
  desc,
  link,
  className,
}) => {
  return (
    <NavLink
      to={link}
      className={`accounts-actions-btn${className ? ` ${className}` : ''}`}
      activeClassName="icon-menu-item--active"
    >
      <figure className="accounts-actions-btn__icon">
        <Icon />
      </figure>
      <div className="accounts-actions-btn__text">
        <strong className="accounts-actions-btn__name">{name}</strong>
        <span className="accounts-actions-btn__desc">{desc}</span>
      </div>
    </NavLink>
  );
};

export default AccountsActionsButton;
