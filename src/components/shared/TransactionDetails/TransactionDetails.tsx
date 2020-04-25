import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { format } from 'date-fns';

import {
  getAccountById,
  getTransactionById,
} from '../../../store/account/selectors';
import { getSettings } from '../../../store/user/selectors';
import { getTransactionDetails } from '../../../store/account/actions';
import { CurrencySymbols } from '../../../dictionaries';

import {
  TopUp,
  TopUpHeader,
  TopUpHeaderDetails,
  TopUpHeaderIcon,
  AdditionalInfo,
  AdditionalInfoDate,
  AdditionalInfoComment,
  Details,
} from './styled';

import Page from '../../layout/Page/Page';
import LabeledText from '../LabeledText/LabeledText';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import Hash from '../Hash/Hash';

interface Props extends RouteComponentProps {
  accountId: string;
  transactionHash: string;
}

const TransactionDetails: React.FC<Props> = ({
  accountId,
  transactionHash,
  history,
  match,
}) => {
  const dispatch = useDispatch();
  const account = useSelector(getAccountById(accountId));
  const transaction = useSelector(
    getTransactionById(accountId, transactionHash)
  );
  const settings = useSelector(getSettings);

  useEffect(() => {
    if (
      account &&
      account.transactions &&
      account.transactions.byIds[transactionHash]
    ) {
      dispatch(getTransactionDetails({ accountId, transactionHash }));
    } else {
      history.push(`${match.path.split(':accountId')[0]}${accountId}`);
    }
  }, [accountId, transactionHash]);

  if (!account || !transaction) {
    return null;
  }

  return (
    <Page>
      <TopUp>
        <TopUpHeader>
          <TopUpHeaderDetails>
            <h3>
              {transaction.amount}
              {account.coin}
            </h3>
            <span>
              {transaction.amountInLocalCurrency < 0 ? '— ' : ''}
              {settings.currency && CurrencySymbols[settings.currency]}
              {Math.abs(transaction.amountInLocalCurrency)}
            </span>
          </TopUpHeaderDetails>
          <TopUpHeaderIcon>
            <CurrencyIcon coin={account.coin} size="xl" />
          </TopUpHeaderIcon>
        </TopUpHeader>
        <AdditionalInfo>
          <AdditionalInfoDate label="Date">
            {format(new Date(transaction.date), 'h:mm aaaa MMM d, yyyy')}
          </AdditionalInfoDate>
          {transaction.comment && (
            <AdditionalInfoComment label="Comment">
              {transaction.comment}
            </AdditionalInfoComment>
          )}
        </AdditionalInfo>
      </TopUp>
      <Details>
        <LabeledText label="Status">Success</LabeledText>
        <LabeledText label="Confirmations">
          {transaction.confirmations}
        </LabeledText>
        {transaction.fee && (
          <LabeledText label="Network fee">
            {transaction.fee} {account.coin}
          </LabeledText>
        )}
      </Details>
      {transaction.from && (
        <LabeledText label="From">
          <Hash breakAll value={transaction.from} />
        </LabeledText>
      )}
      {transaction.to && (
        <LabeledText label="To" canCopyText>
          <Hash breakAll value={transaction.to} />
        </LabeledText>
      )}
      <LabeledText label="Hash">
        <Hash breakAll value={transaction.hash} />
      </LabeledText>
    </Page>
  );
};

export default withRouter(TransactionDetails);
