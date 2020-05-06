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
import { config } from '../../../config';

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

import PageContent from '../../layout/PageContent/PageContent';
import LabeledText from '../LabeledText/LabeledText';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import Hash from '../Hash/Hash';
import CopyText from '../CopyText/CopyText';
import ExternalLink from '../ExternalLink/ExternalLink';

interface Props extends RouteComponentProps {
  accountId: string;
  txHash: string;
}

const TransactionDetails: React.FC<Props> = ({
  accountId,
  txHash,
  history,
  match,
}) => {
  const dispatch = useDispatch();
  const account = useSelector(getAccountById(accountId));
  const transaction = useSelector(
    getTransactionById(accountId, txHash)
  );
  const settings = useSelector(getSettings);

  useEffect(() => {
    if (
      account &&
      account.transactions &&
      account.transactions.byIds[txHash]
    ) {
      dispatch(getTransactionDetails({ accountId, txHash }));
    } else {
      history.push(`${match.path.split(':accountId')[0]}${accountId}`);
    }
  }, [accountId, txHash]);

  if (!account || !transaction) {
    return null;
  }

  return (
    <PageContent>
      <TopUp>
        <TopUpHeader>
          <TopUpHeaderDetails>
            <h3>
              {transaction.amount < 0 ? '— ' : ''}
              {Math.abs(transaction.amount)}{' '}
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
        <ExternalLink
          to={`${config.coins[account.coin].explorerUrl}/transaction/${
            transaction.hash
          }`}
        >
          <Hash breakAll value={transaction.hash} />
        </ExternalLink>
      </LabeledText>
    </PageContent>
  );
};

export default withRouter(TransactionDetails);
