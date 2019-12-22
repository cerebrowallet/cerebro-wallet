import React from 'react';

import { ACCOUNTS } from '../../../dummyData';
import { CREATE_ACCOUNT_ACTIONS } from '../../../menus';

import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import AddAccountIcon from '../AddAccountIcon/AddAccountIcon';
import CornerCloseButton from '../CornerCloseButton/CornerCloseButton';
import { Wrapper, Content, Header, Grid, Button } from './styled';

const MyAccounts: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Header>My accounts</Header>
        <Grid>
          {ACCOUNTS.map((account, i) => (
            <Button
              key={`${account.address}-${i}`}
              link={`/account/${account.address}}`}
              icon={<CurrencyIcon currency={account.currency} size="lg" />}
              text={account.name}
              descText={`${
                account.balance
              } ${account.currency.toUpperCase()} / $100`}
            />
          ))}
        </Grid>
        <Header>Manage</Header>
        <Grid>
          {CREATE_ACCOUNT_ACTIONS.map((action, i) => (
            <Button
              key={`${action.link}-${i}`}
              link={`/account/${action.link}}`}
              icon={<AddAccountIcon Icon={action.icon} />}
              text={action.text}
              descText={action.descText}
            />
          ))}
        </Grid>
      </Content>
      <CornerCloseButton />
    </Wrapper>
  );
};

export default MyAccounts;
