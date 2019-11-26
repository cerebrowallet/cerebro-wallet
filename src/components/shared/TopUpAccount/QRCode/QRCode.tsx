import React from 'react';

import './QRCode.scss';
import qrCodePlaceholder from '../../../../images/qr-code-placeholder.png';

const QRCode: React.FC = () => {
  return (
    <figure className="qr-code">
      <img
        src={qrCodePlaceholder}
        alt=""
        className="qr-code__image"
      />
    </figure>
  )
};

export default QRCode;
