import React from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

import './TotalBalance.scss';

const TotalBalance: React.FC = () => {
  return (
    <section className="total-balance">
      <header className="total-balance__title">
        Total balance
        <span className="total-balance__currency">
          USD
          <ChevronDownIcon className="total-balance__currency-dropdown-toggle"/>
        </span>
      </header>
      <div className="total-balance__balance">
        3,458.27
      </div>
    </section>
  )
};

export default TotalBalance;
