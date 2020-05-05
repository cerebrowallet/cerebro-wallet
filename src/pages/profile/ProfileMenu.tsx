import React from 'react';
import {
  Book as BookIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from 'react-feather';

import SidebarMenuContainer from '../../containers/SidebarMenuContainer';

const MENU_ITEMS = [
  {
    link: '/profile/details',
    text: 'Profile',
    descText: 'Personal Identity',
    icon: <UserIcon />,
  },
  {
    link: '/profile/settings',
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
    <SidebarMenuContainer
      menuItems={MENU_ITEMS.map(item => ({
        link: item.link,
        text: item.text,
        descText: item.descText,
        icon: item.icon,
      }))}
      withMargin
    />
  );
};

export default ProfileMenu;
