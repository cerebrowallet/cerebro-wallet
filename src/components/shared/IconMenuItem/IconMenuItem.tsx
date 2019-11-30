import React from 'react';
import { NavLink } from 'react-router-dom';

import './IconMenuItem.scss';

interface Props {
  link?: string;
  onClick?: () => void;
  icon: React.ReactElement<any>;
  text: string;
  descText: string;
  className?: string;
  children?: React.ReactNode;
}

const IconMenuIcon: React.FC<Props> = ({
  link,
  onClick,
  text,
  descText,
  icon,
  className,
  children,
}) => {
  if (!link && !onClick) {
    return null;
  }

  let cls = 'icon-menu-item';
  if (className) {
    cls += ` ${className}`;
  }

  const content = (
    <>
      {React.cloneElement(icon, {
        className: `icon-menu-item__icon ${icon.props.className || ''}`,
      })}
      <div className="icon-menu-item__name">
        {text}
        <span className="icon-menu-item__desc">{descText}</span>
      </div>
      {children}
    </>
  );

  if (link) {
    return (
      <NavLink
        to={link}
        className={cls}
        activeClassName="icon-menu-item--active"
      >
        {content}
      </NavLink>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {content}
    </button>
  );
};

export default IconMenuIcon;
