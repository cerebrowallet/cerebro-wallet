import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTotalBalance } from '../../../../store/account/selectors';
import { getSettings } from '../../../../store/user/selectors';
import { Currencies } from '../../../../dictionaries';
import { enumToArray } from '../../../../utils/common';
import { updateSettings } from '../../../../store/user/actions';

import { Container, Amount, Title } from './styled';
import WhiteDropDownMenu from '../../../../components/shared/WhiteDropDownMenu/WhiteDropDownMenu';

const TotalBalance: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector(getSettings);
  const totalBalance = useSelector(getTotalBalance);

  return (
    <Container>
      <Title>
        Total balance
        <WhiteDropDownMenu
          selected={settings.currency}
          menuItems={enumToArray(Currencies).map(([key, value]) => ({
            name: key,
            id: value,
          }))}
          onChange={(value: any) =>
            dispatch(
              updateSettings({
                update: {
                  currency: value,
                },
              })
            )
          }
        />
      </Title>
      <Amount>{totalBalance}</Amount>
    </Container>
  );
};

export default TotalBalance;
