import React from 'react';
import styled from 'styled-components';

import qrCodePlaceholder from '../../../images/qr-code-placeholder.png';

const Figure = styled.figure`
  position: relative;
  width: 100%;
  background: ${props => props.theme.colors.blockBackground};
  margin-bottom: 3.125rem;
  border-radius: 1.25rem;
  padding-top: 100%;
  
  img {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  @media (min-width: 400px) {
    width: 12.5rem;
    padding-top: 12.5rem;
  }
`;

const QRCode: React.FC = () => {
  return (
    <Figure>
      <img src={qrCodePlaceholder} alt="" />
    </Figure>
  );
};

export default QRCode;
