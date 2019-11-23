import React from 'react';
import {
  Plus as PlusIcon,
  Navigation as NavigationIcon,
  Repeat as RepeatIcon,
  Filter as FilterIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'react-feather';
import { NavLink } from 'react-router-dom';

import './ActionsMenu.scss';
import CircleButton from '../../shared/CircleButton/CircleButton';

interface Props {
  wrapperCssClass?: string;
};

const ActionsMenu: React.FC<Props> = ({ wrapperCssClass }) => {
  return (
    <section
      className={`actions-menu${wrapperCssClass ? ` ${wrapperCssClass}` : ''}`}
    >
      <NavLink
        to="/features/receive"
        className="actions-menu__item"
        activeClassName="actions-menu__item--active"
      >
        <PlusIcon className="actions-menu__item-icon" />
        <div className="actions-menu__item-name">
          Receive
          <span className="actions-menu__item-desc">Top up my accounts</span>
        </div>
      </NavLink>
      <NavLink
        to="/features/send"
        className="actions-menu__item"
        activeClassName="actions-menu__item--active"
      >
        <NavigationIcon className="actions-menu__item-icon" />
        <div className="actions-menu__item-name">
          Send
          <span className="actions-menu__item-desc">Transfer to others</span>
        </div>
      </NavLink>
      <NavLink
        to="/features/exchange"
        className="actions-menu__item"
        activeClassName="actions-menu__item--active"
      >
        <RepeatIcon className="actions-menu__item-icon" />
        <div className="actions-menu__item-name">
          Exchange
          <span className="actions-menu__item-desc">
            Trade your funds instantly
          </span>
        </div>
      </NavLink>
      <NavLink
        to="/features/activity"
        className="actions-menu__item"
        activeClassName="actions-menu__item--active"
      >
        <FilterIcon className="actions-menu__item-icon" />
        <div className="actions-menu__item-name">
          Activity
          <span className="actions-menu__item-desc">Transactions history</span>
        </div>
      </NavLink>
      <CircleButton className="actions-menu__mobile-close" onClick={() => {}}>
        <ChevronLeftIcon />
      </CircleButton>
    </section>
  );
};

export default ActionsMenu;
