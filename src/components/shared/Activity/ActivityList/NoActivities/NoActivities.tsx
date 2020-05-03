import React from 'react';

import { Container, Img, Text } from './styled';

import Girl from '../../../../../images/no-tx-girl.png';

const NoActivities: React.FC = () => {
  return (
    <Container>
      <Img src={Girl} />
      <Text>
        No transactions history yet. Top up accounts or share your public
        address with friends to get coins.
      </Text>
    </Container>
  );
};

export default NoActivities;
