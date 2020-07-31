import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useChain, useSpring, useTransition } from 'react-spring';

import { useKeyPress } from '../../../utils/hooks';
import { Overlay, Body } from './styled';

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  onHide?: () => void;
  white?: boolean;
}

const Modal: React.FC<Props> = ({ children, showModal, onHide, white }) => {
  const isEscPressed: boolean = useKeyPress('Escape');

  const overlayRef = useRef(null);
  // @ts-ignore
  const transitions = useTransition(showModal, null, {
    ref: overlayRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const bodyRef = useRef(null);
  // @ts-ignore
  const bodyStyle = useSpring({
    ref: bodyRef,
    from: {
      top: '-50%',
    },
    to: {
      top: showModal ? '50%' : '-50%',
    },
    config: { tension: 210, friction: 20 },
  });

  useChain(showModal ? [overlayRef, bodyRef] : [bodyRef, overlayRef], [0, 0.5]);

  if (isEscPressed && onHide) {
    onHide();
  }

  return ReactDOM.createPortal(
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Overlay key={key} style={props} white={white}>
              <Body style={bodyStyle} white={white}>
                {children}
              </Body>
            </Overlay>
          )
      )}
    </>,
    document.body
  );
};

export default Modal;
