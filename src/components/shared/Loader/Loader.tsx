import React from 'react';

import { Wrapper, Circle } from './styled';

interface Props {
  withMargin?: boolean;
}

const Loader: React.FC<Props> = () => {
  return (
    <Wrapper withMargin>
      <Circle>
        <div />
        <div />
        <div />
        <div />
      </Circle>
    </Wrapper>
  );
};

export default Loader;
