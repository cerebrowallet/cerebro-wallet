import React from 'react';

import './AccountsActionsButton.scss';

type Props = {
  Icon: React.ComponentType<any>;
  name: string;
  desc: string;
  onClick: () => void;
}

const AccountsActionsButton: React.FC<Props> = ({ Icon, name, desc, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="accounts-actions-btn">
      <figure className="accounts-actions-btn__icon">
        <Icon />
      </figure>
      <div className="accounts-actions-btn__text">
        <strong className="accounts-actions-btn__name">
          {name}
        </strong>
        <span className="accounts-actions-btn__desc">
            {desc}
          </span>
      </div>
    </button>
  )
};

export default AccountsActionsButton;
