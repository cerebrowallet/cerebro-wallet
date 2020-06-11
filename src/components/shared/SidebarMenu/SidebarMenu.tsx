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

import { MenuItem as IMenuItem } from '../../../containers/SidebarMenuContainer';

interface Props {
  menuItems: IMenuItem[];
  footerMenuItems: IMenuItem[];
  activeItem?: IMenuItem;
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
              readonly={item.readonly}
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
                readonly={item.readonly}
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
              readonly={item.readonly}
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
            readonly={item.readonly}
          />
        ))}
      </SidebarMenuFooter>
    </Wrapper>
  );
};

export default SidebarMenu;
