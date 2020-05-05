import React from 'react';

import { FEATURES } from '../../menus';

import SidebarMenuContainer from '../../containers/SidebarMenuContainer';

const FeaturesMenu: React.FC = () => {
  return (
    <SidebarMenuContainer
      menuItems={FEATURES.map((feature) => ({
        link: feature.link,
        text: feature.text,
        descText: feature.descText,
        icon: <feature.icon />,
      }))}
      withMargin
    />
  );
};

export default FeaturesMenu;
