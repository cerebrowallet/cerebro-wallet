import React from 'react';

import CurrencyIcon from '../../../CurrencyIcon/CurrencyIcon';
import HashText from '../../../HashText/HashText';
import { Currencies } from '../../../../../enums';
import { Link, Info, Text, Comment } from './styled';

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
    <Link to={`/account/${account}/${hash}`}>
      <Info>
        <CurrencyIcon currency={currency} />
        <Text>
          <HashText>{hash}</HashText>
          {comment && <Comment>{comment}</Comment>}
        </Text>
      </Info>
      <span>
        {amount < 0 ? '-' : ''}${Math.abs(amount)}
      </span>
    </Link>
  );
};

export default Transaction;
