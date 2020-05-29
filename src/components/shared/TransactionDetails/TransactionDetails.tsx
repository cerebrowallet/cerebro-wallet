import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { format } from 'date-fns';

import { getAccountById, getTxByHash } from '../../../store/account/selectors';
import { getTxDetails } from '../../../store/account/actions';
import { config } from '../../../config';
import { usePrevious } from '../../../utils/hooks';

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
import TxComment from './TxComment/TxComment';
import FormatAmount from '../FormatAmount';
import { Transaction } from '../../../store/account/types';

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
  const tx = useSelector(getTxByHash(accountId, txHash));
  const previous = usePrevious<{ tx: Transaction; account: Account }>({
    tx,
    account,
  });

  useEffect(() => {
    if (account === null || tx === null) {
      history.push(`${match.path.split(':accountId')[0]}${accountId}`);
    }
  }, [account, tx, history, match.path, accountId]);

  useEffect(() => {
    if (!previous?.tx && tx) {
      dispatch(getTxDetails({ accountId, txHash }));
    }
  }, [previous, tx, accountId, txHash, dispatch]);

  if (!account || !tx) {
    return null;
  }

  return (
    <PageContent>
      <TopUp>
        <TopUpHeader>
          <TopUpHeaderDetails>
            <h3>
              {tx.amount < 0 ? '-' : ''}
              {Math.abs(tx.amount)} {account.coin}
            </h3>
            <span>
              <FormatAmount coin={account.coin} amount={Math.abs(tx.amount)} />
            </span>
          </TopUpHeaderDetails>
          <TopUpHeaderIcon>
            <CurrencyIcon coin={account.coin} size="xl" />
          </TopUpHeaderIcon>
        </TopUpHeader>
        <AdditionalInfo>
          <AdditionalInfoDate label="Date">
            {format(new Date(tx.date), 'h:mm aaaa MMM d, yyyy')}
          </AdditionalInfoDate>
          <AdditionalInfoComment label="Comment">
            <TxComment accountId={accountId} txHash={tx.hash} />
          </AdditionalInfoComment>
        </AdditionalInfo>
      </TopUp>
      <Details>
        <LabeledText label="Status">
          {tx.confirmations ? (
            tx.confirmations > 0 ? (
              'Success'
            ) : (
              'Unconfirmed'
            )
          ) : (
            <Placeholder />
          )}
        </LabeledText>
        <LabeledText label="Confirmations">
          {tx.confirmations ? tx.confirmations : <Placeholder />}
        </LabeledText>
        <LabeledText label="Network fee">
          {tx.fee ? (
            <>
              {tx.fee} {account.coin}
            </>
          ) : (
            <Placeholder />
          )}
        </LabeledText>
      </Details>
      <LabeledText label="From">
        {tx.from ? (
          <CopyText value={tx.from}>
            <Hash breakAll value={tx.from} />
          </CopyText>
        ) : (
          <Placeholder />
        )}
      </LabeledText>
      <LabeledText label="To">
        {tx.to ? (
          <CopyText value={tx.to}>
            <Hash breakAll value={tx.to} />
          </CopyText>
        ) : (
          <Placeholder />
        )}
      </LabeledText>
      <LabeledText label="Hash">
        <ExternalLink
          to={`${config.coins[account.coin].explorerUrl}/transaction/${
            tx.hash
          }`}
        >
          <Hash breakAll value={tx.hash} />
        </ExternalLink>
      </LabeledText>
    </PageContent>
  );
};

export default withRouter(TransactionDetails);
