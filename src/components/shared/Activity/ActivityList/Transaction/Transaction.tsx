import React from 'react';
import { NavLink } from 'react-router-dom';

import './Transaction.scss';
import CurrencyIcon from '../../../CurrencyIcon/CurrencyIcon';
import HashText from '../../../HashText/HashText';
import { Currencies } from '../../../../../enums';

interface Props {
  transaction: {
    currency: Currencies;
    hash: string;
    comment?: string;
    amount: number;
    account: string;
  };
}

const Transaction: React.FC<Props> = ({
  transaction: { currency, hash, comment, amount, account },
}) => {
  return (
    <NavLink
      to={`/account/${account}/${hash}`}
      className="transaction"
      activeClassName="transaction--active"
    >
      <span className="transaction__info">
        <CurrencyIcon currency={currency} />
        <span className="transaction__hash-text">
          <HashText>{hash}</HashText>
          {comment && (
            <span className="transaction__comment">{comment}</span>
          )}
        </span>
      </span>
      <span className="transaction__amount">
        {amount < 0 ? '-' : ''}${Math.abs(amount)}
      </span>
    </NavLink>
  );
};

export default Transaction;
