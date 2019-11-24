import React from 'react';

import './Fee.scss';

import CurrencyInput from '../CurrencyInput/CurrencyInput';
import Input from '../../../../shared/Input/Input';

const Fee: React.FC = () => {
  return (
    <CurrencyInput currency="btc" className="fee">
      <Input disabled name="fee" />
    </CurrencyInput>
  );
};

export default Fee;
