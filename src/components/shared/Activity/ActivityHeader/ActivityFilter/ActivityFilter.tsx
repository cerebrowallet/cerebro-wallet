import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { config, useTransition } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { useOnClickOutside } from '../../../../../utils/hooks';
import { getAccounts } from '../../../../../store/account/selectors';
import { ActivityFilterTypes } from '../../../../../dictionaries';
import { setActivityFilterType } from '../../../../../store/user/actions';
import { getActivityFilters } from '../../../../../store/user/selectors';

import { Menu, Option, SubHeader, ToggleButton, Wrapper } from './styled';

const SHOW_ALL = 'All';
const UPDATES = 'Updates';

interface Props extends RouteComponentProps<{ accountId: string }> {
  accountId?: string;
}

const ActivityFilter: React.FC<Props> = ({ match, accountId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const filters = useSelector(getActivityFilters);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const accounts = useSelector(getAccounts);

  useEffect(() => {
    const id = accountId || match.params.accountId;

    if (id) {
      dispatch(
        setActivityFilterType({
          type: ActivityFilterTypes.Account,
          value: id,
        })
      );
    } else {
      dispatch(
        setActivityFilterType({
          type: ActivityFilterTypes.ShowAll,
        })
      );
    }
  }, [accountId, match.params.accountId, dispatch]);

  const transition = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  useOnClickOutside(menuRef, () => setShowMenu(false));

  function updateFilter(update: { type: ActivityFilterTypes; value?: string }) {
    dispatch(setActivityFilterType(update));
    setShowMenu(false);
  }

  function getFilterText(): string | null {
    if (
      filters.type === ActivityFilterTypes.Account &&
      accounts &&
      filters.value
    ) {
      return accounts.byIds[filters.value].name;
    }

    if (filters.type === ActivityFilterTypes.Updates) {
      return UPDATES;
    }

    if (filters.type === ActivityFilterTypes.ShowAll) {
      return SHOW_ALL;
    }

    return null;
  }

  return (
    <Wrapper ref={menuRef}>
      <ToggleButton
        isMenuOpen={showMenu}
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <strong>{getFilterText()}</strong>
        <ChevronDownIcon />
      </ToggleButton>
      {transition.map(
        ({ key, props, item }) =>
          item && (
            <Menu style={props} key={key}>
              <Option
                type="button"
                onClick={() =>
                  updateFilter({ type: ActivityFilterTypes.ShowAll })
                }
              >
                {filters.type === ActivityFilterTypes.ShowAll ? (
                  <strong>{SHOW_ALL}</strong>
                ) : (
                  SHOW_ALL
                )}
              </Option>
              <Option
                type="button"
                onClick={() =>
                  updateFilter({ type: ActivityFilterTypes.Updates })
                }
              >
                {filters.type === ActivityFilterTypes.Updates ? (
                  <strong>{UPDATES}</strong>
                ) : (
                  UPDATES
                )}
              </Option>
              <SubHeader>Accounts</SubHeader>
              {accounts
                ? Object.values(accounts.byIds).map((account) => (
                    <Option
                      type="button"
                      key={account.id}
                      onClick={() =>
                        updateFilter({
                          type: ActivityFilterTypes.Account,
                          value: account.id,
                        })
                      }
                    >
                      {account.id === filters.value ? (
                        <strong>{account.name}</strong>
                      ) : (
                        account.name
                      )}
                    </Option>
                  ))
                : null}
            </Menu>
          )
      )}
    </Wrapper>
  );
};

export default withRouter(ActivityFilter);
