import * as React from 'react';
import ReactScrollbarsCustom from 'react-scrollbars-custom';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  wrapperClass?: string;
  children: React.ReactNode;
  TrackY?: React.ComponentType<any>;
  ThumbY?: React.ComponentType<any>;
}

export const StyledScrollbar = styled.div`
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

export const StyledTrackY = styled.div`
  position: absolute;
  border-radius: 0.25rem;
  width: 0.375rem;
  top: 0;
  right: 0;
  bottom: 0.625rem;
  background: ${props => props.theme.colors.blockBackground};
  z-index: 10;
` as any;

export const SidebarTrackY = styled(StyledTrackY)`
  right: -1.5rem;
`;

export const StyledThumbY = styled.div`
  background: #f4f4f4;
  cursor: pointer;
  border-radius: 0.25rem;
` as any;

const Scrollbar: React.FC<Props> = ({
  width,
  height,
  children,
  TrackY,
  ThumbY,
}) => {
  return (
    <ReactScrollbarsCustom
      style={{ height, width }}
      noDefaultStyles
      renderer={({ elementRef, ...restProps }) => (
        <StyledScrollbar {...restProps} ref={elementRef} />
      )}
      wrapperProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <Wrapper {...restProps} ref={elementRef} />
        ),
      }}
      scrollerProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <Scroller {...restProps} ref={elementRef} />
        ),
      }}
      contentProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} />
        ),
      }}
      trackXProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <TrackX {...restProps} ref={elementRef} />
        ),
      }}
      thumbXProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <ThumbX {...restProps} ref={elementRef} />
        ),
      }}
      trackYProps={{
        renderer: ({ elementRef, ...restProps }) =>
          TrackY ? (
            <TrackY {...restProps} ref={elementRef} />
          ) : (
            <StyledTrackY {...restProps} ref={elementRef} />
          ),
      }}
      thumbYProps={{
        renderer: ({ elementRef, ...restProps }) =>
          ThumbY ? (
            <ThumbY {...restProps} ref={elementRef} />
          ) : (
            <StyledThumbY {...restProps} ref={elementRef} />
          ),
      }}
    >
      {children}
    </ReactScrollbarsCustom>
  );
};

Scrollbar.defaultProps = {
  width: '100%',
  height: '100%',
};

export default Scrollbar;
