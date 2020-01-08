import React, { useState } from 'react';
import { useSpring, config } from 'react-spring';

import { Wrapper } from './styled';

interface Props {
  children: React.ReactNode;
}

const MyAccountsButton: React.FC<Props> = ({ children }) => {
  const [hover, set] = useState(false);

  const style = useSpring({
    top: hover ? '-0.125rem' : '0rem',
    config: config.stiff,
  });

  return (
    <Wrapper
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

export default MyAccountsButton;
