import React from 'react';

import { Currencies } from '../../../../../enums';

import Input from '../../../../forms/Input/Input';
import { Container } from './styled';

const Fee: React.FC = () => {
  return (
    <Container currency={Currencies.BTC}>
      <Input disabled name="fee" />
    </Container>
  );
};

export default Fee;
