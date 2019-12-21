import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import CurrencyIcon from '../../CurrencyIcon';
import HashText from '../../HashText';
import { Currencies } from '../../../../enums';

interface Props {
  transaction: {
    currency: Currencies;
    hash: string;
    comment?: string;
    amount: number;
    account: string;
  };
}

const Link = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.15rem;
  padding: 0.375rem 0.625rem;
  transition: background-color 0.2s ease-in-out;
  border-radius: 0.625rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &:hover,
  &.active {
    background-color: ${props => props.theme.colors.tertiary}};
  }
`;

const Info = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Text = styled.span`
  padding-left: 0.625rem;
`;

const Comment = styled.span`
  display: block;
  color: ${props => props.theme.colors.secondary};
  font-size: 0.625rem;
  line-height: 0.75rem;
  overflow: hidden;
`;

const Transaction: React.FC<Props> = ({
  transaction: { currency, hash, comment, amount, account },
}) => {
  return (
    <Link to={`/account/${account}/${hash}`}>
      <Info>
        <CurrencyIcon currency={currency} />
        <Text>
          <HashText>{hash}</HashText>
          {comment && <Comment>{comment}</Comment>}
        </Text>
      </Info>
      <span>
        {amount < 0 ? '-' : ''}${Math.abs(amount)}
      </span>
    </Link>
  );
};

export default Transaction;
