import styled from "styled-components";

export const Container = styled.div`
  position: static !important;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    position: relative !important;
  }
` as any;

export const Wrapper = styled.div`
  position: static !important;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
` as any;

export const Scroller = styled.div`
  position: static !important;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
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
  background: ${props => props.theme.colors.blockBackground};
  z-index: 10;
` as any;

export const SidebarTrackY = styled(TrackYEl)`
  right: -1.5rem;
`;

export const ThumbYEl = styled.div`
  background: #f4f4f4;
  cursor: pointer;
  border-radius: 0.25rem;
` as any;
