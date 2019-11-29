import React from 'react';

import './AccountsList.scss';
import { Currencies } from '../../../enums';

import Scrollbar from '../Scrollbar/Scrollbar';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

export interface Props {
  className?: string;
}

const AccountsList: React.FC<Props> = ({ className }) => {
  return (
    <div className={`accounts-list${className ? ` ${className}` : ''}`}>
      <Scrollbar wrapperClass="scrollbar--accounts-list">
        <>
          <button type="button" className="accounts-list__item">
            <CurrencyIcon
              currency={Currencies.BTC}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              My Bitcoin Wallet
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
          <button type="button" className="accounts-list__item">
            <CurrencyIcon
              currency={Currencies.STX}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              Blockstack
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
          <button type="button" className="accounts-list__item accounts-list__item--active">
            <CurrencyIcon
              currency={Currencies.STX}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              Blockstack
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
          <button type="button" className="accounts-list__item">
            <CurrencyIcon
              currency={Currencies.STX}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              Blockstack
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
          <button type="button" className="accounts-list__item">
            <CurrencyIcon
              currency={Currencies.STX}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              Blockstack
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
          <button type="button" className="accounts-list__item">
            <CurrencyIcon
              currency={Currencies.STX}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              Blockstack
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
          <button type="button" className="accounts-list__item">
            <CurrencyIcon
              currency={Currencies.STX}
              size="large"
              className="accounts-list__currency-icon"
            />
            <div className="accounts-list__name">
              Blockstack
              <span className="accounts-list__balance">
                  0.00002914 BTC / $100
                </span>
            </div>
          </button>
        </>
      </Scrollbar>
    </div>
  );
};

export default AccountsList;
