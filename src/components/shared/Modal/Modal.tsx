import React from 'react';
import ReactDOM from 'react-dom';

import { useKeyPress } from '../../../utils/hooks';
import { Wrapper, Body } from './styled';

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  onHide?: () => void;
}

const Modal: React.FC<Props> = ({ children, showModal, onHide }) => {
  const isEscPressed: boolean = useKeyPress('Escape');

  if (isEscPressed && onHide) {
    onHide();
  }

  return ReactDOM.createPortal(
    <Wrapper showModal={showModal}>
      <Body>{children}</Body>
    </Wrapper>,
    document.body
  );
};

export default Modal;
