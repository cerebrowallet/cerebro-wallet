import React from 'react';
import { ChevronUp as ChevronUpIcon } from 'react-feather';

import './Activity.scss';

import Scrollbar from '../../shared/Scrollbar/Scrollbar';
import CurrencyIcon from '../../shared/CurrencyIcon/CurrencyIcon';

const Activity: React.FC = () => {
  return (
    <div className="activity">
      <Scrollbar wrapperClass="scrollbar--activity">
        <>
          <div className="activity__item activity__item--totals">
            <span className="activity__item-content">Nov 5</span>
            <span className="activity__item-sum">-$177</span>
          </div>
          <div className="activity__item activity__item--transaction">
            <span className="activity__item-content">
              <CurrencyIcon currency="btc" />
              <span className="activity__item-transaction">
                307bf3bd...1c805593
                <span className="activity__item-transaction-comment">
                  Transaction comment
                </span>
              </span>
            </span>
            <span className="activity__item-sum">-$103</span>
          </div>
          <div className="activity__item activity__item--transaction">
            <span className="activity__item-content">
              <CurrencyIcon currency="stx" />
              <span className="activity__item-transaction">
                307bf3bd...1c805593
              </span>
            </span>
            <span className="activity__item-sum">$10</span>
          </div>
          <div className="activity__item activity__item--transaction">
            <span className="activity__item-content">
              <CurrencyIcon currency="btc" />
              <span className="activity__item-transaction">
                307bf3bd...1c805593
                <span className="activity__item-transaction-comment">
                  Transaction comment
                </span>
              </span>
            </span>
            <span className="activity__item-sum">-$84</span>
          </div>
          <div className="activity__item activity__item--post">
            <h4 className="activity__item-title">
              One Dev is Sad without Your Feedback
            </h4>
            <button type="button" className="activity__hide-item">
              <i className="activity__hide-item-icon" />
            </button>
            <p className="activity__item-excerpt">
              Like most creators, we want to be aware of how our work is
              received by its intended...
            </p>
            <a href="#" className="activity__item-read-more">
              Read more &rarr;
            </a>
          </div>
          <div className="activity__item activity__item--totals">
            <span className="activity__item-content">Nov 3</span>
            <span className="activity__item-sum">$25</span>
          </div>
          <div className="activity__item activity__item--transaction">
            <span className="activity__item-content">
              <CurrencyIcon currency="btc" />
              <span className="activity__item-transaction">
                307bf3bd...1c805593
                <span className="activity__item-transaction-comment">
                  Transaction comment
                </span>
              </span>
            </span>
            <span className="activity__item-sum">$25</span>
          </div>
          <div className="activity__item activity__item--totals">
            <span className="activity__item-content">Nov 1</span>
            <span className="activity__item-sum">-$2</span>
          </div>
          <div className="activity__item activity__item--transaction">
            <span className="activity__item-content">
              <CurrencyIcon currency="btc" />
              <span className="activity__item-transaction">
                307bf3bd...1c805593
              </span>
            </span>
            <span className="activity__item-sum">-$4</span>
          </div>
          <div className="activity__item activity__item--transaction">
            <span className="activity__item-content">
              <CurrencyIcon currency="stx" />
              <span className="activity__item-transaction">
                307bf3bd...1c805593
              </span>
            </span>
            <span className="activity__item-sum">$2</span>
          </div>
          <div className="activity__item activity__item--post activity__item--post-light">
            <h4 className="activity__item-title">Congratulations!</h4>
            <p className="activity__item-excerpt">
              Your wallet has been successfully created. Try starting with{' '}
              <a href="#">Knowledge Base</a>. We are really happy to meet you!
            </p>
          </div>
        </>
      </Scrollbar>
      <div className="activity__swipe-for-more">
        Swipe Up<br/>to load more transactions<br/>
        <ChevronUpIcon className="activity__swipe-for-more-icon" />
      </div>
    </div>
  );
};

export default Activity;
