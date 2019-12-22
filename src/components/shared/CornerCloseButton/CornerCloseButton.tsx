import React from 'react';
import { X as CloseIcon } from 'react-feather';
import { useHistory } from 'react-router';

import { Button } from './styled';

interface Props {
  className?: string;
}

const CornerCloseButton: React.FC<Props> = ({ className }) => {
  const history = useHistory();

  return (
    <Button onClick={() => history.push('/')} className={className}>
      <CloseIcon />
    </Button>
  );
};

export default CornerCloseButton;
