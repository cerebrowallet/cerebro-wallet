import * as React from 'react';
import ReactScrollbarsCustom from 'react-scrollbars-custom';

import {
  Container,
  Wrapper,
  Scroller,
  TrackX,
  ThumbX,
  TrackYEl,
  ThumbYEl,
} from './styled';

interface Props {
  width?: string;
  height?: string;
  wrapperClass?: string;
  children: React.ReactNode;
  TrackY?: React.ComponentType<any>;
  ThumbY?: React.ComponentType<any>;
}

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
        <Container {...restProps} ref={elementRef} />
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
            <TrackYEl {...restProps} ref={elementRef} />
          ),
      }}
      thumbYProps={{
        renderer: ({ elementRef, ...restProps }) =>
          ThumbY ? (
            <ThumbY {...restProps} ref={elementRef} />
          ) : (
            <ThumbYEl {...restProps} ref={elementRef} />
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
