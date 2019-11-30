import React from 'react';
import {
  Plus as PlusIcon,
  Navigation as NavigationIcon,
  Repeat as RepeatIcon,
  Filter as FilterIcon,
} from 'react-feather';

import './FeaturesMenu.scss';
import IconMenuItem from '../IconButton/IconButton';
import SidebarMenu from '../../shared/SidebarMenu/SidebarMenu';

interface Props {
  wrapperCssClass?: string;
  view: 'sidebar' | 'dashboard';
}

const MENU_ITEMS = [
  {
    link: '/features/receive',
    text: 'Receive',
    descText: 'Top up my accounts',
    icon: <PlusIcon />,
  },
  {
    link: '/features/send',
    text: 'Send',
    descText: 'Transfer to others',
    icon: <NavigationIcon />,
  },
  {
    link: '/features/exchange',
    text: 'Exchange',
    descText: 'Trade your funds instantly',
    icon: <RepeatIcon />,
  },
  {
    link: '/features/activity',
    text: 'Activity',
    descText: 'Transactions history',
    icon: <FilterIcon />,
  },
];

const FeaturesMenu: React.FC<Props> = ({ view }) => {
  if (view === 'sidebar') {
    return <SidebarMenu menuItems={MENU_ITEMS} wrapperClassName="features-menu features-menu--sidebar" />;
  }

  if (view === 'dashboard') {
    return (
      <div className="features-menu features-menu--dashboard">
        {MENU_ITEMS.map(item => (
          <IconMenuItem
            link={item.link}
            text={item.text}
            descText={item.descText}
            icon={item.icon}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default FeaturesMenu;
