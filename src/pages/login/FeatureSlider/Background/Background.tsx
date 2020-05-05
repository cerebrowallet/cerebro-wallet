import React, { useState } from 'react';

import { Wrapper } from './styled';

interface Props {
  children({ coords }: { coords: number[] }): void;
}

const Background: React.FC<Props> = ({ children }) => {
  const [coords, setCoords] = useState([0, 0]);

  return (
    <Wrapper onMouseMove={({ clientX: x, clientY: y }) => setCoords([x, y])}>
      {children({ coords })};
    </Wrapper>
  );
};

export default Background;
