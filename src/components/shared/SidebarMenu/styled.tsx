import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

import { Theme } from '../../../utils/styled';
import { Breakpoints } from '../../../dictionaries';

import IconButton from '../IconButton/IconButton';
import CircleButton from '../CircleButton/CircleButton';

interface ElementProps {
  showMobileMenu?: boolean;
  withMargin?: boolean;
  theme?: Theme;
}

export const Wrapper = styled.nav`
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
     background: ${props?.theme?.colors.tertiary};
     grid-template-rows: none;
     grid-auto-rows: minmax(min-content, max-content);
  `}
  
  @media (min-width: ${Breakpoints}px) {
    ${(props: ElementProps) =>
      props.withMargin &&
      `
      margin: 5.375rem auto 0;
      width: 17.3125rem;
    `}
  }
` as any;

export const MobileTrigger = styled(IconButton)`
  position: relative;
  display: flex;
  width: 100%;
  background: ${(props: ElementProps) =>
    props?.theme?.colors.tertiary};

  &:hover {
    background: ${(props: ElementProps) =>
      props?.theme?.colors.tertiary};
  }

  ${(props: ElementProps) =>
    props.showMobileMenu &&
    `
    background: ${props?.theme?.colors.tertiary};
    
    &:hover {
      background: ${props?.theme?.colors.tertiary};
    }
  `}
` as any;

export const MobileTriggerIcon = styled(ChevronDownIcon)`
  display: ${(props: ElementProps) =>
    props.showMobileMenu ? 'none' : 'block'};
  position: absolute;
  right: 0.625rem;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  transform: translateY(-50%);
` as any;

export const MobileMenuWrapper = styled.div`
  display: ${(props: ElementProps) =>
    props.showMobileMenu ? 'block' : 'none'};
  width: 100%;
  padding-bottom: 1.875rem;
`;

export const MobileCloseIcon = styled(CircleButton)`
  position: absolute;
  top: 1.25rem;
  right: 0.625rem;
`;

export const MenuItem = styled(IconButton)`
  position: relative;
`;

export const SidebarMenuFooter = styled.footer`
  position: relative;
  width: 100%;
  padding-top: 1.5625rem;
  margin-top: 1.5625rem;

  @media (min-width: ${Breakpoints.xl}px) {
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
    border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};

    @media (min-width: ${Breakpoints.xl}px) {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        ${(props) => props.theme.colors.tertiary} 100%
      );
    }
  }
` as any;
