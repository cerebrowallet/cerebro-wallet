import React from 'react';
import { useSpring, config } from 'react-spring';

import { Div } from './styled';

interface Props {
  active: boolean;
  children: React.ReactNode;
}

const Slide: React.FC<Props> = ({ active, children }) => {
  const style = useSpring({
    opacity: active ? 1 : 0,
    config: config.molasses,
  });

  return <Div style={style}>{children}</Div>;
};

export default Slide;
