import React from 'react';

import qrCodePlaceholder from '../../../../images/qr-code-placeholder.png';
import { Figure } from './styled';

const QRCode: React.FC = () => {
  return (
    <Figure>
      <img src={qrCodePlaceholder} alt="" />
    </Figure>
  );
};

export default QRCode;
