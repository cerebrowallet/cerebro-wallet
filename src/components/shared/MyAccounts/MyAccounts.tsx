import React, { useState, useEffect } from 'react';
import { useTransition } from 'react-spring';

import { ACCOUNTS } from '../../../dummyData';
import { CREATE_ACCOUNT_ACTIONS } from '../../../menus';
import { Wrapper, Content, Header, Grid, Button } from './styled';

import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import AddAccountIcon from '../AddAccountIcon/AddAccountIcon';
import CornerCloseButton from '../CornerCloseButton/CornerCloseButton';
import MyAccountsButton from './MyAccountsButton/MyAccountsButton';

function getTransitionOptions(itemsLength: number) {
  return {
    unique: true,
    trail: 400 / itemsLength,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  };
}

const MyAccounts: React.FC = () => {
  const [show, set] = useState(false);

  useEffect(() => {
    set(true);

    return () => {
      set(false);
    };
  }, []);

  const accountsTransitions = useTransition(
    show ? ACCOUNTS : [],
    item => item.address,
    getTransitionOptions(ACCOUNTS.length)
  );

  const createAccountTransitions = useTransition(
    show ? CREATE_ACCOUNT_ACTIONS : [],
    item => item.link,
    getTransitionOptions(CREATE_ACCOUNT_ACTIONS.length)
  );

  return (
    <Wrapper>
      <Content>
        <Header>My accounts</Header>
        <Grid>
          {accountsTransitions.map(({ item, key, props }) => (
            <MyAccountsButton>
              <Button
                style={props}
                key={key}
                link={`/account/${item.address}}`}
                icon={<CurrencyIcon currency={item.currency} size="lg" />}
                text={item.name}
                descText={`${
                  item.balance
                } ${item.currency.toUpperCase()} / $100`}
              />
            </MyAccountsButton>
          ))}
        </Grid>
        <Header>Manage</Header>
        <Grid>
          {createAccountTransitions.map(({ item, key, props }) => (
            <MyAccountsButton>
              <Button
                key={key}
                style={props}
                link={`/account/${item.link}}`}
                icon={<AddAccountIcon Icon={item.icon} />}
                text={item.text}
                descText={item.descText}
              />
            </MyAccountsButton>
          ))}
        </Grid>
      </Content>
      <CornerCloseButton />
    </Wrapper>
  );
};

export default MyAccounts;
