import React from 'react';
import { X as CloseIcon } from 'react-feather';
import { useHistory } from 'react-router';

import { Button } from './styled';

interface Props {
  className?: string;
  goTo?: string;
}

const GoBackButton: React.FC<Props> = ({ className, goTo }) => {
  const history = useHistory();

  return (
    <Button
      onClick={() => (goTo ? history.push(goTo) : history.goBack())}
      className={className}
    >
      <CloseIcon />
    </Button>
  );
};

export default GoBackButton;
