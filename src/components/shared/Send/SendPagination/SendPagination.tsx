import React from 'react';

import { SendSteps } from '../../../../dictionaries';

import { Container, Step } from './styled';

interface Props {
  step: SendSteps;
}

const SendPagination: React.FC<Props> = ({ step }) => {
  return (
    <Container>
      {Object.values(SendSteps).map(state => (
        <Step key={state} current={state === step} />
      ))}
    </Container>
  );
};

export default SendPagination;
