import React from 'react';
import { ChevronUp as ChevronUpIcon } from 'react-feather';

import { Container } from './styled';

const SwipeForMore: React.FC = () => {
  return (
    <Container>
      Swipe Up
      <br />
      to load more transactions
      <br />
      <ChevronUpIcon />
    </Container>
  );
};

export default SwipeForMore;
