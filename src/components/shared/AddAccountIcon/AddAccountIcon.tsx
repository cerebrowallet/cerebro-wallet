import React from 'react';

import { Figure } from './styled';

interface Props {
  Icon: React.ComponentType<any>;
}

const AddAccountIcon: React.FC<Props> = ({ Icon }) => {
  return (
    <Figure>
      <Icon />
    </Figure>
  );
};

export default AddAccountIcon;
