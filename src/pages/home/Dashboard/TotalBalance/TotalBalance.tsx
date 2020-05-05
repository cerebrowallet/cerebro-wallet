import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTotalBalance, getTotalBalanceCurrency} from '../../../../store/account/selectors';
import { getSettings } from '../../../../store/user/selectors';
import { Currencies } from '../../../../dictionaries';
import { enumToArray } from '../../../../utils/common';
import { setTotalBalanceCurrency } from '../../../../store/account/actions';

import { Container, Amount, Title } from './styled';
import WhiteDropDownMenu from '../../../../components/shared/WhiteDropDownMenu/WhiteDropDownMenu';

const TotalBalance: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector(getSettings);
  const totalBalance = useSelector(getTotalBalance);
  const displayCurrency = useSelector(getTotalBalanceCurrency);

  useEffect(() => {
    if (settings.currency) {
      dispatch(setTotalBalanceCurrency(settings.currency));
    }
  }, [settings.currency]);

  return (
    <Container>
      <Title>
        Total balance
        <WhiteDropDownMenu
          selected={displayCurrency}
          menuItems={enumToArray(Currencies).map(([key, value]) => ({
            name: key,
            id: value,
          }))}
          onChange={(value: any) =>
            dispatch(setTotalBalanceCurrency(value))
          }
        />
      </Title>
      <Amount>{totalBalance}</Amount>
    </Container>
  );
};

export default TotalBalance;
