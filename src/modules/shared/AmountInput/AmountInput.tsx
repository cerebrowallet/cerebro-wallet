import React from 'react';

import FormGroup from '../FormGroup/FormGroup';
import Input from '../Input/Input';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

import './AmountInput.scss';

const AmountInput: React.FC = () => {
  return (
    <FormGroup label="Amount" className="amount-input">
      <button type="button" className="amount-input__send-all-btn">
        Send all
      </button>
      <div className="amount-input__inputs">
        <CurrencyInput className="amount-input__amount" currency="btc">
          <Input name="amount" className="input--square-corners" />
        </CurrencyInput>
        <CurrencyInput className="amount-input__amount" currency="$">
          <Input name="amountInDollars" className="input--square-corners" />
        </CurrencyInput>
      </div>
    </FormGroup>
  );
};

export default AmountInput;
