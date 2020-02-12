import React from 'react';

import CurrencyIcon from '../../../CurrencyIcon/CurrencyIcon';
import HashText from '../../../HashText/HashText';
import { Coins } from '../../../../../dictionaries';
import { Link, Info, Text, Comment } from './styled';

interface Props {
  transaction: {
    coin: Coins;
    hash: string;
    comment?: string;
    amount: number;
    account: string;
  };
}

const Transaction: React.FC<Props> = ({
  transaction: { coin, hash, comment, amount, account },
}) => {
  return (
    <Link to={`/account/${account}/${hash}`}>
      <Info>
        <CurrencyIcon coin={coin} />
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
