import React from 'react';
import { useHistory } from 'react-router';

import './MyAccounts.scss';
import { ACCOUNTS } from '../../dummyData';

import IconMenuItem from '../shared/IconButton/IconButton';
import { Currencies } from '../../enums';
import CurrencyIcon from '../shared/CurrencyIcon/CurrencyIcon';
import AddAccount from '../shared/AddAccount/AddAccount';
import { X as CloseIcon } from 'react-feather';
import CircleButton from '../shared/CircleButton/CircleButton';

const MyAccounts: React.FC = () => {
  const history = useHistory();

  return (
    <section className="my-accounts">
      <div className="my-accounts__content">
        <h3 className="my-accounts__header">My accounts</h3>
        <div className="my-accounts__items">
          {ACCOUNTS.map((acc, i) => (
            <IconMenuItem
              key={`${acc.address}-${i}`}
              link={`/account/${acc.address}}`}
              icon={<CurrencyIcon currency={acc.currency} size="large" />}
              text={acc.name}
              descText={`${acc.balance} ${acc.currency.toUpperCase()} / $100`}
              className="icon-button--my-accounts"
            />
          ))}
        </div>
        <h3 className="my-accounts__header">Manage</h3>
        <AddAccount
          className="my-accounts__items add-account--my-accounts"
          buttonClassName="icon-button--my-accounts"
        />
      </div>
      <CircleButton
        className="close-page-btn"
        onClick={() => history.push('/')}
      >
        <CloseIcon />
      </CircleButton>
    </section>
  );
};

export default MyAccounts;
