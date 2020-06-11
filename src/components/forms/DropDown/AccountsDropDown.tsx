import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { components } from 'react-select';

import { Coins, CurrencySymbols, Currencies } from '../../../dictionaries';
import { getSettings } from '../../../store/user/selectors';
import { getExchangeRates } from '../../../store/account/selectors';
import { ExchangeRates } from '../../../store/account/types';
import { round } from '../../../utils/common';

import DropDown from './DropDown';
import { DropDownProps } from './DropDown';

interface AccountOption {
  id: string;
  name: string;
  balance: number;
  address: string;
  coin?: Coins;
  currency?: Currencies | undefined;
  rates?: ExchangeRates;
}

interface Props extends DropDownProps {
  options: AccountOption[];
  disabled?: boolean;
}

const ValueWrapper = styled.div`
  padding-right: 3.2rem;
  padding-left: 1.25rem;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 0.1875rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Balance = styled.div`
  font-size: 0.75rem;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.secondary};
`;

function AccountValue({ name, balance, coin, currency, rates }: AccountOption) {
  const balanceInLocalCurrency =
    currency && rates && coin && rates?.[coin][currency]
      ? round(balance * rates[coin][currency])
      : null;

  return (
    <ValueWrapper>
      <Name>{name}</Name>
      <Balance>
        {balance} {coin}
        {balanceInLocalCurrency !== null && currency && (
          <>
            {' · '}
            {CurrencySymbols[currency]}
            {balanceInLocalCurrency}
          </>
        )}
      </Balance>
    </ValueWrapper>
  );
}

const Wrapper = styled(components.ValueContainer)`
  position: relative;
  padding: 0.625rem 0 !important;
  flex-wrap: nowrap !important;
  height: 3.4375rem !important;
`;

const AccountsValueContainer = (props: any) => {
  const { children } = props;

  return <Wrapper {...props}>{children}</Wrapper>;
};

const AccountsDropDown: React.FC<Props> = (props) => {
  const settings = useSelector(getSettings);
  const rates = useSelector(getExchangeRates);

  const component = (cProps: any) => (
    <AccountValue {...cProps} currency={settings?.currency} rates={rates} />
  );

  return (
    <DropDown
      {...props}
      optionComponent={component}
      valueComponent={component}
      valueContainerComponent={AccountsValueContainer}
    />
  );
};

export default AccountsDropDown;
