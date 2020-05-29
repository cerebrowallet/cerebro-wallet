import React from 'react';
import { useSelector } from 'react-redux';

import { config } from '../../../config';
import { getAccountById } from '../../../store/account/selectors';

import {
  WhiteBlockDetails,
  WalletName,
  Icon,
  Balance,
  BalanceInCrypto,
  BalanceInLocalCurrency,
  Addresses,
} from './styled';

import UpdateBalance from './UpdateBalance/UpdateBalance';
import Loader from '../../../components/shared/Loader/Loader';
import LabeledText from '../../../components/shared/LabeledText/LabeledText';
import Hash from '../../../components/shared/Hash/Hash';
import Charts from '../../../components/shared/Charts/Charts';
import PageContent from '../../../components/layout/PageContent/PageContent';
import CopyText from '../../../components/shared/CopyText/CopyText';
import FormatAmount from '../../../components/shared/FormatAmount';

interface Props {
  accountId: string;
}

const Details: React.FC<Props> = ({ accountId }) => {
  const account = useSelector(getAccountById(accountId));

  if (!account) {
    return <Loader />;
  }

  return (
    <PageContent className="details">
      <WhiteBlockDetails>
        <WalletName>
          <Icon coin={account.coin} size="lg" />
          <span>{account.name}</span>
        </WalletName>
        <Balance>
          <BalanceInCrypto>
            <UpdateBalance accountId={account.id} />
            {account.balance} {config.coins[account.coin].abbr}
          </BalanceInCrypto>
          <BalanceInLocalCurrency>
            <FormatAmount amount={account.balance} coin={account.coin} />
          </BalanceInLocalCurrency>
        </Balance>
      </WhiteBlockDetails>
      <Addresses>
        <LabeledText label="Public address">
          <CopyText value={account.address}>
            <Hash breakAll value={account.address} />
          </CopyText>
        </LabeledText>
      </Addresses>
      <Charts coinA={account.coin} canChange={false} />
    </PageContent>
  );
};

export default Details;
