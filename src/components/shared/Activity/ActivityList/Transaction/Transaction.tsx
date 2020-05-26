import React from 'react';

import { TransactionActivity } from '../../../../../store/account/types';

import { Link, Info, Text, Comment } from './styled';

import CurrencyIcon from '../../../CurrencyIcon/CurrencyIcon';
import Hash from '../../../Hash/Hash';
import FormatAmount from '../../../FormatAmount';

interface Props {
  transaction: TransactionActivity;
}

const Transaction: React.FC<Props> = ({
  transaction: { coin, hash, comment, amount, accountId },
}) => {
  return (
    <Link to={`/activity/${accountId}/${hash}`}>
      <Info>
        <CurrencyIcon coin={coin} />
        <Text>
          <Hash truncate value={hash} />
          {comment && <Comment>{comment}</Comment>}
        </Text>
      </Info>
      <span>
        <FormatAmount amount={amount} coin={coin} />
      </span>
    </Link>
  );
};

export default Transaction;
