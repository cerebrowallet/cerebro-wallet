import React from 'react';

import { SEND_STEPS } from '../constants';

import './SendProgress.scss';

interface Props {
  step: SEND_STEPS;
}

const SendProgress: React.FC<Props> = ({ step }) => {
  return (
    <div className="progress">
      {Object.values(SEND_STEPS).map(st => (
        <span
          key={st}
          className={`progress__step${
            st === step ? ' progress__step--current' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default SendProgress;
