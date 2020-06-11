import React, { useState, useEffect } from 'react';
import {
  withRouter,
  RouteComponentProps,
  useLocation,
  useHistory,
} from 'react-router';

import { Breakpoints } from '../dictionaries';
import { useWindowSize } from '../utils/hooks';

import SidebarMenu from '../components/shared/SidebarMenu/SidebarMenu';

export interface MenuItem {
  link: string;
  text: string;
  descText: string;
  icon: React.ReactElement<any>;
  className?: string;
  footerItem?: boolean;
  readonly?: boolean;
}

interface Props extends RouteComponentProps {
  className?: string;
  menuItems: MenuItem[];
  wrapperClassName?: string;
  itemClassName?: string;
  mobileBreakpoint?: Breakpoints;
  withMargin?: boolean;
}

const SidebarMenuContainer: React.FC<Props> = ({
  menuItems,
  mobileBreakpoint = Breakpoints.md,
  className,
  withMargin,
}) => {
  const windowSize = useWindowSize();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (windowSize.width > mobileBreakpoint && showMobileMenu) {
      setShowMobileMenu(false);
    }
  }, [windowSize, showMobileMenu, mobileBreakpoint]);

  const [activeItem, otherMenuItems, footerMenuItems] = menuItems.reduce(
    (acc: [MenuItem | undefined, MenuItem[], MenuItem[]], item: MenuItem) => {
      if (
        windowSize.width < mobileBreakpoint &&
        location.pathname.includes(item.link)
      ) {
        acc[0] = item;
      } else if (item.footerItem) {
        acc[2].push(item);
      } else {
        acc[1].push(item);
      }

      return acc;
    },
    [undefined, [], []]
  );

  return (
    <SidebarMenu
      className={className}
      withMargin={withMargin}
      activeItem={activeItem}
      menuItems={otherMenuItems}
      footerMenuItems={footerMenuItems}
      showMobileMenu={showMobileMenu}
      setShowMobileMenu={setShowMobileMenu}
      onMobileMenuItemClick={(link: string) => {
        history.push(link);
        setShowMobileMenu(false);
      }}
    />
  );
};

export default withRouter(SidebarMenuContainer);
