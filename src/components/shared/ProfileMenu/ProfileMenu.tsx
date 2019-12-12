import React from 'react';
import {
  Book as BookIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from 'react-feather';

import SidebarMenu from '../SidebarMenu/SidebarMenu';

const MENU_ITEMS = [
  {
    link: '/profile',
    text: 'Profile',
    descText: 'Personal Identity',
    icon: <UserIcon />,
  },
  {
    link: '/settings',
    text: 'Settings',
    descText: 'Adjust settings',
    icon: <SettingsIcon />,
  },
  {
    link: 'https://docs.cerebrowallet.com',
    text: 'Help Center',
    descText: 'Knowledge Base, Support',
    icon: <BookIcon />,
  },
];

const ProfileMenu: React.FC = () => {
  return (
    <SidebarMenu
      menuItems={MENU_ITEMS}
      wrapperClassName="features-menu features-menu--sidebar"
    />
  );
};

export default ProfileMenu;
