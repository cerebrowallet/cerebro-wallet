import React from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

import { Container, Amount, Currency, Title } from './styled';

const TotalBalance: React.FC = () => {
  return (
    <Container>
      <Title>
        Total balance
        <Currency>
          USD
          <ChevronDownIcon />
        </Currency>
      </Title>
      <Amount>3,458.27</Amount>
    </Container>
  );
};

export default TotalBalance;
