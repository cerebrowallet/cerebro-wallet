import React from 'react';

import './Poll.scss';

const Poll: React.FC = () => {
  return (
    <section className="poll poll--voted">
      <button type="button" className="poll__option">
        ShapeShift.io<span className="poll__option-result">0%</span>
      </button>
      <button type="button" className="poll__option poll__option--winner">
        Changelly.com<span className="poll__option-result">75%</span>
      </button>
      <button type="button" className="poll__option">
        CoinFalcon.com<span className="poll__option-result">5%</span>
      </button>
      <button type="button" className="poll__option">
        Other<span className="poll__option-result">20%</span>
      </button>
    </section>
  );
};

export default Poll;
