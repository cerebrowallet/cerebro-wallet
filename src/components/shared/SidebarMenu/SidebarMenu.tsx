import React, { useState, useEffect } from 'react';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
} from 'react-feather';
import {
  withRouter,
  RouteComponentProps,
  useLocation,
  useHistory,
} from 'react-router';

import { Breakpoints } from '../../../enums';
import { useWindowSize } from '../../../hooks';

import './SidebarMenu.scss';
import CircleButton from '../../shared/CircleButton/CircleButton';
import IconMenuItem from '../IconButton/IconButton';

interface MenuItem {
  link: string;
  text: string;
  descText: string;
  icon: React.ReactElement<any>;
}

interface Props extends RouteComponentProps {
  wrapperClassName?: string;
  menuItems: MenuItem[];
  itemClassName?: string;
  mobileMenuFooter?: React.ReactNode;
  mobileBreakpoint?: Breakpoints;
}

const SidebarMenu: React.FC<Props> = ({
  wrapperClassName,
  menuItems,
  itemClassName,
  mobileMenuFooter,
  mobileBreakpoint = Breakpoints.md,
}) => {
  const windowSize = useWindowSize();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (windowSize.width > mobileBreakpoint && showMenu) {
      setShowMenu(false);
    }
  }, [windowSize, showMenu]);

  let className = `sidebar-menu${
    wrapperClassName ? ` ${wrapperClassName}` : ''
  }`;

  if (windowSize.width < mobileBreakpoint) {
    className += ' sidebar-menu--mobile';

    if (showMenu) {
      className += ' sidebar-menu--mobile-opened';
    }

    const [triggerMenuItem, otherMenuItems] = menuItems.reduce(
      (acc: [MenuItem | undefined, MenuItem[]], item: MenuItem) => {
        if (location.pathname.includes(item.link)) {
          acc[0] = item;
        } else {
          if (acc[1] === undefined) {
            acc[1] = [];
          }
          acc[1].push(item);
        }

        return acc;
      },
      [undefined, []]
    );

    return (
      <section className={className}>
        {triggerMenuItem && (
          <IconMenuItem
            className={`sidebar-menu__mobile-trigger ${itemClassName || ''}`}
            onClick={() => setShowMenu(!showMenu)}
            text={triggerMenuItem.text}
            descText={triggerMenuItem.descText}
            icon={triggerMenuItem.icon}
          >
            <ChevronDownIcon className="sidebar-menu__mobile-trigger-icon" />
          </IconMenuItem>
        )}
        <div className="sidebar-menu__mobile-menu">
          {otherMenuItems.map((item, i) => (
            <IconMenuItem
              className={`sidebar-menu__mobile-item ${itemClassName || ''}`}
              key={`${item.link}-${i}`}
              onClick={() => {
                history.push(item.link);
                setShowMenu(!showMenu);
              }}
              text={item.text}
              descText={item.descText}
              icon={item.icon}
            />
          ))}
          <CircleButton
            onClick={() => setShowMenu(!showMenu)}
            className="sidebar-menu__mobile-close"
          >
            <ChevronLeftIcon />
          </CircleButton>
          {mobileMenuFooter}
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      {menuItems.map((item, i) => (
        <IconMenuItem
          key={`${item.link}-${i}`}
          link={item.link}
          text={item.text}
          descText={item.descText}
          icon={item.icon}
          className={`sidebar-menu__item ${itemClassName || ''}`}
        />
      ))}
    </section>
  );
};

SidebarMenu.defaultProps = {
  mobileBreakpoint: Breakpoints.md,
};

export default withRouter(SidebarMenu);
