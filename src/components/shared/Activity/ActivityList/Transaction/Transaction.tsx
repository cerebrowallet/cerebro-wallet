import React from 'react';
import { useSelector } from 'react-redux';

import { TransactionActivity } from '../../../../../store/account/types';
import { getSettings } from '../../../../../store/user/selectors';
import { CurrencySymbols } from '../../../../../dictionaries';

import { Link, Info, Text, Comment } from './styled';

import CurrencyIcon from '../../../CurrencyIcon/CurrencyIcon';
import Hash from '../../../Hash/Hash';

interface Props {
  transaction: TransactionActivity;
  uriPrefix?: string;
}

const Transaction: React.FC<Props> = ({
  transaction: { coin, hash, comment, amount, accountId },
  uriPrefix,
}) => {
  const settings = useSelector(getSettings);

  return (
    <Link to={`/${uriPrefix}/${accountId}/tx/${hash}`}>
      <Info>
        <CurrencyIcon coin={coin} />
        <Text>
          <Hash truncate value={hash} />
          {comment && <Comment>{comment}</Comment>}
        </Text>
      </Info>
      <span>
        {amount < 0 ? '-' : ''}
        {settings.currency && CurrencySymbols[settings.currency]}
        {Math.abs(amount)}
      </span>
    </Link>
  );
};

Transaction.defaultProps = {
  uriPrefix: 'features/activity',
};

export default Transaction;
