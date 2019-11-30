import React from 'react';

import FormGroup from '../../../FormGroup/FormGroup';
import Input from '../../../Input/Input';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

import './Amount.scss';

const Amount: React.FC = () => {
  return (
    <FormGroup label="Amount" className="amount">
      <button type="button" className="amount__send-all-btn">
        Send all
      </button>
      <div className="amount__inputs">
        <CurrencyInput className="amount__amount" currency="btc">
          <Input name="amount" className="input--square-corners" required />
        </CurrencyInput>
        <CurrencyInput className="amount__amount-in-us-dollars" currency="$">
          <Input name="amountInDollars" className="input--square-corners" required />
        </CurrencyInput>
      </div>
    </FormGroup>
  );
};

export default Amount;
