import React from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { useSelector } from 'react-redux';

import { getTotalBalance } from '../../../../store/account/selectors';
import { getSettings } from '../../../../store/user/selectors';


import { Container, Amount, Currency, Title } from './styled';

const TotalBalance: React.FC = () => {
  const settings = useSelector(getSettings);
  const totalBalance = useSelector(getTotalBalance(settings.currency));

  return (
    <Container>
      <Title>
        Total balance
        <Currency>
          {settings.currency}
          <ChevronDownIcon />
        </Currency>
      </Title>
      <Amount>{totalBalance}</Amount>
    </Container>
  );
};

export default TotalBalance;
