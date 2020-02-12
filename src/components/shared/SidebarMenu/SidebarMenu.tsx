import React from 'react';
import { ChevronLeft as ChevronLeftIcon } from 'react-feather';

import {
  Wrapper,
  MobileTrigger,
  MobileTriggerIcon,
  MobileMenuWrapper,
  SidebarMenuFooter,
  MobileCloseIcon,
  MenuItem,
} from './styled';
import { SidebarTrackY } from '../Scrollbar/styled';

import IconButton from '../IconButton/IconButton';
import Scrollbar from '../Scrollbar/Scrollbar';
import Loader from '../Loader/Loader';

interface MenuItem {
  link: string;
  text: string;
  descText: string;
  icon: React.ReactElement<any>;
  className?: string;
}

interface Props {
  menuItems: MenuItem[];
  footerMenuItems: MenuItem[];
  activeItem?: MenuItem;
  setShowMobileMenu: (show: boolean) => void;
  showMobileMenu: boolean;
  onMobileMenuItemClick: (link: string) => void;
  className?: string;
  withMargin?: boolean;
}

const SidebarMenu: React.FC<Props> = ({
  menuItems,
  footerMenuItems,
  className,
  activeItem,
  showMobileMenu,
  setShowMobileMenu,
  onMobileMenuItemClick,
  withMargin,
}) => {
  if (activeItem) {
    return (
      <Wrapper className={className} showMobileMenu={showMobileMenu}>
        {activeItem && (
          <MobileTrigger
            showMobileMenu={showMobileMenu}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            text={activeItem.text}
            descText={activeItem.descText}
            icon={activeItem.icon}
          >
            <MobileTriggerIcon showMobileMenu={showMobileMenu} />
          </MobileTrigger>
        )}
        <MobileMenuWrapper showMobileMenu={showMobileMenu}>
          {menuItems.map((item, i) => (
            <IconButton
              key={`${item.link}-${i}`}
              onClick={() => onMobileMenuItemClick(item.link)}
              text={item.text}
              descText={item.descText}
              icon={item.icon}
            />
          ))}
          <SidebarMenuFooter showMobileMenu={showMobileMenu}>
            {footerMenuItems.map((item, i) => (
              <IconButton
                key={`${item.link}-${i}`}
                link={item.link}
                text={item.text}
                descText={item.descText}
                icon={item.icon}
              />
            ))}
          </SidebarMenuFooter>
          <MobileCloseIcon onClick={() => setShowMobileMenu(false)}>
            <ChevronLeftIcon />
          </MobileCloseIcon>
        </MobileMenuWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className} withMargin={withMargin}>
      <Scrollbar TrackY={SidebarTrackY}>
        {menuItems.length > 0 ? (
          menuItems.map((item, i) => (
            <MenuItem
              key={`${item.link}-${i}`}
              link={item.link}
              text={item.text}
              descText={item.descText}
              icon={item.icon}
            />
          ))
        ) : (
          <Loader />
        )}
      </Scrollbar>
      <SidebarMenuFooter>
        {footerMenuItems.map((item, i) => (
          <MenuItem
            key={`${item.link}-${i}`}
            link={item.link}
            text={item.text}
            descText={item.descText}
            icon={item.icon}
          />
        ))}
      </SidebarMenuFooter>
    </Wrapper>
  );
};

export default SidebarMenu;
