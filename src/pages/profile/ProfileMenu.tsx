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
    descText: 'Adjust Settings',
    icon: <SettingsIcon />,
  },
  {
    link: 'https://wiki.cerebrowallet.com',
    text: 'Wiki',
    descText: 'Knowledge Base',
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
