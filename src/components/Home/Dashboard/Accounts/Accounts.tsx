import React from 'react';
import { Plus as PlusIcon } from 'react-feather';

import './Accounts.scss';

import Scrollbar from '../../../shared/Scrollbar/Scrollbar';
import CurrencyIcon from '../../../shared/CurrencyIcon/CurrencyIcon';

const Accounts: React.FC = () => {
  return (
    <section className="accounts">
      <header className="accounts__header">
        <span className="accounts__title">Accounts</span>
        <button type="button" className="accounts__add">
          <PlusIcon className="accounts__add-icon" />
        </button>
      </header>
      <div className="accounts__list">
        <Scrollbar wrapperClass="scrollbar--account-list">
          <>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="btc"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                My Bitcoin Wallet
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="stx"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                Blockstack
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="stx"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                Blockstack
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="stx"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                Blockstack
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="stx"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                Blockstack
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="stx"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                Blockstack
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
            <button type="button" className="account-btn">
              <CurrencyIcon
                currency="stx"
                size="large"
                className="account-btn__currency-icon"
              />
              <div className="account-btn__name">
                Blockstack
                <span className="account-btn__balance">
                  0.00002914 BTC / $100
                </span>
              </div>
            </button>
          </>
        </Scrollbar>
      </div>
    </section>
  );
};

export default Accounts;
