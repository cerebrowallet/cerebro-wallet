import React, { useState, useEffect } from 'react';
import {
  Plus as PlusIcon,
  Navigation as NavigationIcon,
  Repeat as RepeatIcon,
  Filter as FilterIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronDown as ChevronDownIcon,
} from 'react-feather';
import {
  withRouter,
  RouteComponentProps,
  useLocation,
  useHistory,
} from 'react-router';

import { Breakpoints } from '../../../enums';
import { useWindowSize } from '../../../hooks';

import './FeaturesMenu.scss';
import CircleButton from '../../shared/CircleButton/CircleButton';
import IconMenuItem from '../../shared/IconMenuItem/IconMenuItem';

interface MenuItem {
  link: string;
  text: string;
  descText: string;
  icon: React.ComponentType<any>;
}

const MENU_ITEMS = [
  {
    link: '/features/receive',
    text: 'Receive',
    descText: 'Top up my accounts',
    icon: PlusIcon,
  },
  {
    link: '/features/send',
    text: 'Send',
    descText: 'Transfer to others',
    icon: NavigationIcon,
  },
  {
    link: '/features/exchange',
    text: 'Exchange',
    descText: 'Trade your funds instantly',
    icon: RepeatIcon,
  },
  {
    link: '/features/activity',
    text: 'Activity',
    descText: 'Transactions history',
    icon: FilterIcon,
  },
];

interface Props extends RouteComponentProps {
  wrapperCssClass?: string;
}

const FeaturesMenu: React.FC<Props> = ({ wrapperCssClass }) => {
  const windowSize = useWindowSize();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (windowSize.width > Breakpoints.md && showMenu) {
      setShowMenu(false);
    }
  }, [windowSize, showMenu]);

  let className = `features-menu${
    wrapperCssClass ? ` ${wrapperCssClass}` : ''
  }`;

  if (windowSize.width < Breakpoints.md) {
    className += ' features-menu--mobile';

    if (showMenu) {
      className += ' features-menu--mobile-opened';
    }

    const [triggerMenuItem, otherMenuItems] = MENU_ITEMS.reduce(
      (acc: [MenuItem | undefined, MenuItem[]], item: MenuItem) => {
        if (item.link === location.pathname) {
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
            className="features-menu__mobile-trigger"
            onClick={() => setShowMenu(!showMenu)}
            text={triggerMenuItem.text}
            descText={triggerMenuItem.descText}
            Icon={triggerMenuItem.icon}
          >
            <ChevronDownIcon className="features-menu__mobile-trigger-icon" />
          </IconMenuItem>
        )}
        <div className="features-menu__mobile-menu">
          {otherMenuItems.map((item, i) => (
            <IconMenuItem
              className="features-menu__mobile-item"
              key={`${item.link}-${i}`}
              onClick={() => {
                history.push(item.link);
                setShowMenu(!showMenu);
              }}
              text={item.text}
              descText={item.descText}
              Icon={item.icon}
            />
          ))}
          <CircleButton
            onClick={() => setShowMenu(!showMenu)}
            className="features-menu__mobile-close"
          >
            <ChevronLeftIcon />
          </CircleButton>
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      {MENU_ITEMS.map((item, i) => (
        <IconMenuItem
          key={`${item.link}-${i}`}
          link={item.link}
          text={item.text}
          descText={item.descText}
          Icon={item.icon}
        />
      ))}
    </section>
  );
};

export default withRouter(FeaturesMenu);
