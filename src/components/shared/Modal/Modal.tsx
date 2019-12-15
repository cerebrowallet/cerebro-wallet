import React from 'react';
import ReactDOM from 'react-dom';

import { useKeyPress } from '../../../utils/hooks';

import './Modal.scss';

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
    <div className={`modal${showModal ? ' modal--open' : ''}`}>
      <section className="modal__body">{children}</section>
    </div>,
    document.body
  );
};

export default Modal;
