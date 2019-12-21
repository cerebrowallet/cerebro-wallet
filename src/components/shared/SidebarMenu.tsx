import React from 'react';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronDown as ChevronDownIcon,
} from 'react-feather';
import styled from 'styled-components';
import { Theme } from '../../utils/styled';

import CircleButton from './CircleButton';
import IconButton from './IconButton';
import Scrollbar, { SidebarTrackY } from '../Scrollbar';

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

interface ElementProps {
  showMobileMenu?: boolean;
  withMargin?: boolean;
  theme?: Theme;
}

const Wrapper = styled.nav`
  position: static;
  background: none;
  z-index: 1;
  display: grid;
  justify-items: center;
  padding: 2.1875rem 1.25rem 0;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  flex-grow: 1;
  grid-template-rows: 1fr auto;

  ${(props: ElementProps) =>
    props.showMobileMenu &&
    `
     position: fixed;
     overflow-y: auto;
     overflow-x: hidden;
     z-index: 101;
     background: ${props.theme && props.theme.colors.blockBackground};
     grid-template-rows: none;
     grid-auto-rows: minmax(min-content, max-content);
  `}
  
  @media (min-width: ${(props: ElementProps) =>
    props.theme && props.theme.breakpoints.md}) {
    ${(props: ElementProps) =>
      props.withMargin &&
      `
      margin: 5.375rem auto 0;
      width: 17.3125rem;
    `}
  }
` as any;

const MobileTrigger = styled(IconButton)`
  position: relative;
  display: flex;
  width: 100%;
  background: ${(props: ElementProps) =>
    props.theme && props.theme.colors.blockBackground};

  &:hover {
    background: ${(props: ElementProps) =>
      props.theme && props.theme.colors.blockBackground};
  }

  ${(props: ElementProps) =>
    props.showMobileMenu &&
    `
    background: ${props.theme && props.theme.colors.tertiary};
    
    &:hover {
      background: ${props.theme && props.theme.colors.tertiary};
    }
  `}
` as any;

const MobileTriggerIcon = styled(ChevronDownIcon)`
  display: ${(props: ElementProps) =>
    props.showMobileMenu ? 'none' : 'block'};
  position: absolute;
  right: 0.625rem;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  transform: translateY(-50%);
` as any;

const MobileMenuWrapper = styled.div`
  display: ${(props: ElementProps) =>
    props.showMobileMenu ? 'block' : 'none'};
  width: 100%;
  padding-bottom: 1.875rem;
`;

const MobileCloseIcon = styled(CircleButton)`
  position: absolute;
  top: 1.25rem;
  right: 0.625rem;
`;

const MenuItem = styled(IconButton)`
  position: relative;
`;

const SidebarMenuFooter = styled.footer`
  position: relative;
  width: 100%;
  padding-top: 1.5625rem;
  margin-top: 1.5625rem;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    margin-top: 0;
  }

  &:before {
    position: absolute;
    content: '';
    height: 2.625rem;
    z-index: 1;
    left: -1.875rem;
    right: -1.875rem;
    top: -2.625rem;
    background: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        ${props => props.theme.colors.blockBackground} 100%
      );
    }
  }
` as any;

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
        {menuItems.map((item, i) => (
          <MenuItem
            key={`${item.link}-${i}`}
            link={item.link}
            text={item.text}
            descText={item.descText}
            icon={item.icon}
          />
        ))}
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
