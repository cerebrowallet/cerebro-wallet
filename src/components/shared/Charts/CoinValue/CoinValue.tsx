import React from 'react';
import { useSelector } from 'react-redux';

import { Coin, ColorDot, Container, Name } from './styled';
import { config } from '../../../../config';
import { getSettings } from '../../../../store/user/selectors';
import { Themes } from '../../../../store/user/types';

interface Props {
  coin: string | number;
}

const CoinValue: React.FC<Props> = ({ coin }) => {
  const settings = useSelector(getSettings);

  return (
    <Container>
      <ColorDot
        color={config.coins[coin].color}
        darkTheme={settings?.theme === Themes.dark}
      />
      <Name>
        {config.coins[coin].name}
        <Coin>{config.coins[coin].abbr}</Coin>
      </Name>
    </Container>
  );
};

export default CoinValue;
