import React from 'react';

import { Currencies } from '../../../enums';

import DropDown from '../DropDown/DropDown';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

interface CoinOption {
  label: string;
  value: Currencies;
}

interface Props {
  options: CoinOption[];
  name: string;
}

function CoinValue({ label, value }: CoinOption) {
  return (
    <div className="dropdown__value">
      <CurrencyIcon currency={value} className="dropdown__value-coin-icon" />
      <strong className="dropdown__value-coin-name">{label}</strong>
      <span className="dropdown__value-coin-code">{value}</span>
    </div>
  );
}

function CoinOption({ label, value }: CoinOption) {
  return (
    <div className="dropdown__option">
      <CoinValue label={label} value={value} />
    </div>
  );
}

const CoinDropDown: React.FC<Props> = ({ name, options }) => {
  return (
    <DropDown
      className="dropdown--coin"
      name={name}
      options={options}
      optionComponent={CoinOption}
      valueComponent={CoinValue}
    />
  );
};

export default CoinDropDown;
