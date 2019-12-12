import React from 'react';
import { X as CloseIcon } from 'react-feather';
import { useHistory } from 'react-router';

import './CloseConrnerButton.scss';

import CircleButton from '../CircleButton/CircleButton';

const CloseCornerButton: React.FC = () => {
  const history = useHistory();

  return (
    <CircleButton
      className="close-corner-button"
      onClick={() => history.push('/')}
    >
      <CloseIcon />
    </CircleButton>
  );
};

export default CloseCornerButton;
