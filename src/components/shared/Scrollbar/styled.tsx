import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

export const Container = styled.div`
  position: static !important;

  @media (min-width: ${Breakpoints.xl}px) {
    position: relative !important;
  }
` as any;

export const Wrapper = styled.div`
  position: static !important;

  @media (min-width: ${Breakpoints.xl}px) {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
` as any;

export const Scroller = styled.div`
  position: static !important;

  @media (min-width: ${Breakpoints.xl}px) {
    position: absolute !important;
  }
` as any;

export const TrackX = styled.div`
  display: none;
` as any;

export const ThumbX = styled.div`
  display: none;
` as any;

export const TrackYEl = styled.div`
  position: absolute;
  border-radius: 0.25rem;
  width: 0.375rem;
  top: 0;
  right: 0;
  bottom: 0.625rem;
  background: ${(props) => props.theme.colors.blockBackground};
  z-index: 10;
` as any;

export const SidebarTrackY = styled(TrackYEl)`
  right: -1.5rem;
`;

export const MainTrackY = styled(TrackYEl)`
  right: 0.4rem;
  top: 0.625rem;
  background: ${(props) => props.theme.colors.tertiary};
`;

export const ThumbYEl = styled.div`
  background: #f4f4f4;
  cursor: pointer;
  border-radius: 0.25rem;
` as any;

export const MainThumbYEl = styled(ThumbYEl)`
  background: #e5e5e5;
`;
