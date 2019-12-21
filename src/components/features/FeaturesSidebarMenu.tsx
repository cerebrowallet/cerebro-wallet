import React from 'react';

import { FEATURES } from '../../menus';

import SidebarMenuContainer from '../../containers/SidebarMenuContainer';

const FeaturesSidebarMenu: React.FC = () => {
  return (
    <SidebarMenuContainer
      menuItems={FEATURES.map(feature => ({
        link: feature.link,
        text: feature.text,
        descText: feature.descText,
        icon: <feature.icon />,
      }))}
      withMargin
    />
  );
};

export default FeaturesSidebarMenu;
