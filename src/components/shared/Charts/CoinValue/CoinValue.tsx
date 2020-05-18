import React from 'react';

import { Container, ColorDot, Name, Coin } from './styled';
import { config } from '../../../../config';

interface Props {
  coin: string | number;
}

const CoinValue: React.FC<Props> = ({ coin }) => {
  return (
    <Container>
      <ColorDot color={config.coins[coin].color} />
      <Name>
        {config.coins[coin].name}
        <Coin>{config.coins[coin].abbr}</Coin>
      </Name>
    </Container>
  );
};

export default CoinValue;
