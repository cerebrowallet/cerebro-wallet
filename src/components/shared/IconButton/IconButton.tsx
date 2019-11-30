import React from 'react';
import { NavLink } from 'react-router-dom';

import './IconButton.scss';

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

  let cls = 'icon-button';
  if (className) {
    cls += ` ${className}`;
  }

  const content = (
    <>
      {React.cloneElement(icon, {
        className: `icon-button__icon ${icon.props.className || ''}`,
      })}
      <div className="icon-button__name">
        {text}
        <span className="icon-button__desc">{descText}</span>
      </div>
      {children}
    </>
  );

  if (link) {
    return (
      <NavLink
        to={link}
        className={cls}
        activeClassName="icon-button--active"
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
