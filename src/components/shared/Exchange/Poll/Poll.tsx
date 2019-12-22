import React from 'react';

import { Container, PollOption, ResultPercentage } from './styled';

const Poll: React.FC = () => {
  return (
    <Container>
      <PollOption type="button">
        ShapeShift.io<ResultPercentage>0%</ResultPercentage>
      </PollOption>
      <PollOption type="button" winner>
        Changelly.com<ResultPercentage>75%</ResultPercentage>
      </PollOption>
      <PollOption type="button">
        CoinFalcon.com<ResultPercentage>5%</ResultPercentage>
      </PollOption>
      <PollOption type="button">
        Other<ResultPercentage>20%</ResultPercentage>
      </PollOption>
    </Container>
  );
};

export default Poll;
