import React from 'react';
import { ChevronUp as ChevronUpIcon } from 'react-feather';

import './ActivityList.scss';

import Scrollbar from '../../Scrollbar/Scrollbar';
import CurrencyIcon from '../../CurrencyIcon/CurrencyIcon';
import { Currencies } from '../../../../enums';

const ActivityList: React.FC = () => {
  return (
    <div className="activity-list">
      <Scrollbar wrapperClass="scrollbar--activity-list">
        <>
          <div className="activity-list__item activity-list__item--totals">
            <span className="activity-list__item-content">Nov 5</span>
            <span className="activity-list__item-sum">-$177</span>
          </div>
          <div className="activity-list__item activity-list__item--transaction">
            <span className="activity-list__item-content">
              <CurrencyIcon currency={Currencies.BTC} />
              <span className="activity-list__item-transaction">
                307bf3bd...1c805593
                <span className="activity-list__item-transaction-comment">
                  Transaction comment
                </span>
              </span>
            </span>
            <span className="activity-list__item-sum">-$103</span>
          </div>
          <div className="activity-list__item activity-list__item--transaction">
            <span className="activity-list__item-content">
              <CurrencyIcon currency={Currencies.STX} />
              <span className="activity-list__item-transaction">
                307bf3bd...1c805593
              </span>
            </span>
            <span className="activity-list__item-sum">$10</span>
          </div>
          <div className="activity-list__item activity-list__item--transaction">
            <span className="activity-list__item-content">
              <CurrencyIcon currency={Currencies.BTC} />
              <span className="activity-list__item-transaction">
                307bf3bd...1c805593
                <span className="activity-list__item-transaction-comment">
                  Transaction comment
                </span>
              </span>
            </span>
            <span className="activity-list__item-sum">-$84</span>
          </div>
          <div className="activity-list__item activity-list__item--post">
            <h4 className="activity-list__item-title">
              One Dev is Sad without Your Feedback
            </h4>
            <button type="button" className="activity-list__hide-item">
              <i className="activity-list__hide-item-icon" />
            </button>
            <p className="activity-list__item-excerpt">
              Like most creators, we want to be aware of how our work is
              received by its intended...
            </p>
            <a href="#" className="activity-list__item-read-more">
              Read more &rarr;
            </a>
          </div>
          <div className="activity-list__item activity-list__item--totals">
            <span className="activity-list__item-content">Nov 3</span>
            <span className="activity-list__item-sum">$25</span>
          </div>
          <div className="activity-list__item activity-list__item--transaction">
            <span className="activity-list__item-content">
              <CurrencyIcon currency={Currencies.BTC} />
              <span className="activity-list__item-transaction">
                307bf3bd...1c805593
                <span className="activity-list__item-transaction-comment">
                  Transaction comment
                </span>
              </span>
            </span>
            <span className="activity-list__item-sum">$25</span>
          </div>
          <div className="activity-list__item activity-list__item--totals">
            <span className="activity-list__item-content">Nov 1</span>
            <span className="activity-list__item-sum">-$2</span>
          </div>
          <div className="activity-list__item activity-list__item--transaction">
            <span className="activity-list__item-content">
              <CurrencyIcon currency={Currencies.BTC} />
              <span className="activity-list__item-transaction">
                307bf3bd...1c805593
              </span>
            </span>
            <span className="activity-list__item-sum">-$4</span>
          </div>
          <div className="activity-list__item activity-list__item--transaction">
            <span className="activity-list__item-content">
              <CurrencyIcon currency={Currencies.STX} />
              <span className="activity-list__item-transaction">
                307bf3bd...1c805593
              </span>
            </span>
            <span className="activity-list__item-sum">$2</span>
          </div>
          <div className="activity-list__item activity-list__item--post activity-list__item--post-light">
            <h4 className="activity-list__item-title">Congratulations!</h4>
            <p className="activity-list__item-excerpt">
              Your wallet has been successfully created. Try starting with{' '}
              <a href="#">Knowledge Base</a>. We are really happy to meet you!
            </p>
          </div>
        </>
      </Scrollbar>
      <div className="activity-list__swipe-for-more">
        Swipe Up
        <br />
        to load more transactions
        <br />
        <ChevronUpIcon className="activity-list__swipe-for-more-icon" />
      </div>
    </div>
  );
};

export default ActivityList;
