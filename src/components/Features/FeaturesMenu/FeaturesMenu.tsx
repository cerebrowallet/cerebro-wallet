import React from 'react';
import {
  Plus as PlusIcon,
  Navigation as NavigationIcon,
  Repeat as RepeatIcon,
  Filter as FilterIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'react-feather';
import { NavLink } from 'react-router-dom';

import './FeaturesMenu.scss';
import CircleButton from '../../shared/CircleButton/CircleButton';

interface Props {
  wrapperCssClass?: string;
}

const FeaturesMenu: React.FC<Props> = ({ wrapperCssClass }) => {
  return (
    <section
      className={`features-menu${wrapperCssClass ? ` ${wrapperCssClass}` : ''}`}
    >
      <NavLink
        to="/features/receive"
        className="features-menu__item"
        activeClassName="features-menu__item--active"
      >
        <PlusIcon className="features-menu__item-icon" />
        <div className="features-menu__item-name">
          Receive
          <span className="features-menu__item-desc">Top up my accounts</span>
        </div>
      </NavLink>
      <NavLink
        to="/features/send"
        className="features-menu__item"
        activeClassName="features-menu__item--active"
      >
        <NavigationIcon className="features-menu__item-icon" />
        <div className="features-menu__item-name">
          Send
          <span className="features-menu__item-desc">Transfer to others</span>
        </div>
      </NavLink>
      <NavLink
        to="/features/exchange"
        className="features-menu__item"
        activeClassName="features-menu__item--active"
      >
        <RepeatIcon className="features-menu__item-icon" />
        <div className="features-menu__item-name">
          Exchange
          <span className="features-menu__item-desc">
            Trade your funds instantly
          </span>
        </div>
      </NavLink>
      <NavLink
        to="/features/activity"
        className="features-menu__item"
        activeClassName="features-menu__item--active"
      >
        <FilterIcon className="features-menu__item-icon" />
        <div className="features-menu__item-name">
          Activity
          <span className="features-menu__item-desc">Transactions history</span>
        </div>
      </NavLink>
      <CircleButton className="features-menu__mobile-close" onClick={() => {}}>
        <ChevronLeftIcon />
      </CircleButton>
    </section>
  );
};

export default FeaturesMenu;
