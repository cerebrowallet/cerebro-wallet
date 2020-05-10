import React from 'react';
import styled from 'styled-components';
import { components } from 'react-select';

import DropDown from './DropDown';

import { DropDownProps } from './DropDown';

interface AccountOption {
  name: string;
  id: string;
  balance: string;
  address: string;
}

interface Props extends DropDownProps {
  options: AccountOption[];
  disabled?: boolean;
}

const ValueWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: start;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-right: 3.2rem;
  padding-left: 1.25rem;
`;

const Left = styled.div`
  max-width: 14.6875rem;
  padding-right: 0.9375rem;
`;

const Right = styled.div`
  overflow: hidden;
`;

const Strong = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 0.1875rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div`
  font-size: 0.75rem;
  line-height: 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function AccountValue({ name, balance, address }: AccountOption) {
  return (
    <ValueWrapper>
      <Left>
        <Strong>{name}</Strong>
        <Text>{address}</Text>
      </Left>
      <Right>
        <Text>{balance}</Text>
      </Right>
    </ValueWrapper>
  );
}

const Wrapper = styled(components.ValueContainer)`
  position: relative;
  padding: 0.625rem 0 !important;
  flex-wrap: nowrap !important;
  height: 3.4375rem!important;
`;

const AccountsValueContainer = (props: any) => {
  const { children } = props;

  return <Wrapper {...props}>{children}</Wrapper>;
};

const AccountsDropDown: React.FC<Props> = (props) => {
  return (
    <DropDown
      {...props}
      optionComponent={AccountValue}
      valueComponent={AccountValue}
      valueContainerComponent={AccountsValueContainer}
    />
  );
};

export default AccountsDropDown;
