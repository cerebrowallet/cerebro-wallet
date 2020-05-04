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
  Placeholder,
} from './styled';

import Page from '../../layout/Page/Page';
import LabeledText from '../LabeledText/LabeledText';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import Hash from '../Hash/Hash';
import CopyText from '../CopyText/CopyText';

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
        <LabeledText label="Status">
          {Number.isInteger(transaction.confirmations) ? (
            transaction.confirmations > 0 ? (
              'Success'
            ) : (
              'Unconfirmed'
            )
          ) : (
            <Placeholder />
          )}
        </LabeledText>
        <LabeledText label="Confirmations">
          {Number.isInteger(transaction.confirmations) ? (
            transaction.confirmations
          ) : (
            <Placeholder />
          )}
        </LabeledText>
        <LabeledText label="Network fee">
          {transaction.fee ? (
            <>
              {transaction.fee} {account.coin}
            </>
          ) : (
            <Placeholder />
          )}
        </LabeledText>
      </Details>
      <LabeledText label="From">
        {transaction.from ? (
          <CopyText value={transaction.from}>
            <Hash breakAll value={transaction.from} />
          </CopyText>
        ) : (
          <Placeholder />
        )}
      </LabeledText>
      <LabeledText label="To">
        {transaction.to ? (
          <CopyText value={transaction.to}>
            <Hash breakAll value={transaction.to} />
          </CopyText>
        ) : (
          <Placeholder />
        )}
      </LabeledText>
      <LabeledText label="Hash">
        <Hash breakAll value={transaction.hash} />
      </LabeledText>
    </Page>
  );
};

export default withRouter(TransactionDetails);
