import React from 'react';
import ReactQRCode from 'qrcode.react';

import { Figure } from './styled';

interface Props {
  address: string;
}

const QRCode: React.FC<Props> = ({ address }) => {
  return (
    <Figure>
      <ReactQRCode value={address} />
    </Figure>
  );
};

export default QRCode;
