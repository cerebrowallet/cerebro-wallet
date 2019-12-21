import React from 'react';
import styled from 'styled-components';

import { Currencies } from '../../../enums';

import DropDown from './DropDown';
import CurrencyIcon from '../../shared/CurrencyIcon';
import { components } from 'react-select';

interface CoinOption {
  label: string;
  value: Currencies;
}

interface Props {
  options: CoinOption[];
  name: string;
}

const ValueWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-right: 3.2rem;
  padding-left: 1.25rem;
`;

const CoinIcon = styled(CurrencyIcon)`
  margin-right: 0.625rem;
  width: 2.25rem;
  height: 2.25rem;
`;

const CoinName = styled.strong`
  margin-right: 0.3125rem;
`;

const CoinCode = styled.span`
  text-transform: uppercase;
`;

function CoinValue({ label, value }: CoinOption) {
  return (
    <ValueWrapper>
      <CoinIcon currency={value} />
      <CoinName>{label}</CoinName>
      <CoinCode>{value}</CoinCode>
    </ValueWrapper>
  );
}

const Wrapper = styled(components.ValueContainer)`
  position: relative;
  padding: 0.625rem 0 !important;
  flex-wrap: nowrap !important;
`;

const ValueContainer = (props: any) => {
  const { children } = props;

  return <Wrapper {...props}>{children}</Wrapper>;
};

const CoinDropDown: React.FC<Props> = ({ name, options }) => {
  return (
    <DropDown
      name={name}
      options={options}
      optionComponent={CoinValue}
      valueComponent={CoinValue}
      valueContainerComponent={ValueContainer}
    />
  );
};

export default CoinDropDown;
