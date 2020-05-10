import React from 'react';

import { Container, Button } from './styled';
import { SendSteps } from '../Send';

interface Props {
  step: SendSteps;
  setStep: (step: SendSteps) => void;
}

const NavDots: React.FC<Props> = ({ step, setStep }) => {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => setStep(SendSteps.fillUp)}
        current={step === SendSteps.fillUp}
        disabled={step === SendSteps.result}
      />
      <Button
        type="button"
        onClick={() => setStep(SendSteps.confirm)}
        current={step === SendSteps.confirm}
        disabled={step === SendSteps.fillUp || step === SendSteps.result}
      />
      <Button
        type="button"
        onClick={() => setStep(SendSteps.result)}
        current={step === SendSteps.result}
        disabled={step === SendSteps.fillUp || step === SendSteps.confirm}
      />
    </Container>
  );
};

export default NavDots;
