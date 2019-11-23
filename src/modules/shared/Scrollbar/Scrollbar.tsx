import * as React from 'react';
import ReactScrollbarsCustom from 'react-scrollbars-custom';

import './Scrollbar.scss';

interface Props {
  width?: string;
  height?: string;
  wrapperClass?: string;
  children: React.ReactNode;
};

const Scrollbar: React.FC<Props> = ({
  width,
  height,
  children,
  wrapperClass,
}) => {
  return (
    <ReactScrollbarsCustom
      style={{ height, width }}
      noDefaultStyles
      renderer={({ elementRef, ...restProps }) => (
        <div
          {...restProps}
          ref={elementRef}
          className={`scrollbar${wrapperClass ? ` ${wrapperClass}` : ''}`}
        />
      )}
      wrapperProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} className="scrollbar__wrapper" />
        ),
      }}
      scrollerProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div
            {...restProps}
            ref={elementRef}
            className="scrollbar__scroller"
          />
        ),
      }}
      contentProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} className="scrollbar__content" />
        ),
      }}
      trackXProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} className="scrollbar__track-x" />
        ),
      }}
      thumbXProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} className="scrollbar__thumb-x" />
        ),
      }}
      trackYProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} className="scrollbar__track-y" />
        ),
      }}
      thumbYProps={{
        renderer: ({ elementRef, ...restProps }) => (
          <div {...restProps} ref={elementRef} className="scrollbar__thumb-y" />
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
