import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Wrapper, Img, Text } from './styled';
import Button from '../../forms/Button/Button';
import sleepingFaceImg from '../../../images/sleeping-face.png';
import { useIdle } from '../../../utils/hooks';
import { getSessionTimeoutMs } from '../../../store/user/selectors';
import { userSession } from '../../../utils/blockstack';
import Modal from '../../shared/Modal/Modal';

const SessionExpiredModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const timeout = useSelector(getSessionTimeoutMs);
  const history = useHistory();

  const isIdle = useIdle({
    timeToIdle: timeout,
    inactivityEvents: [],
  });

  useEffect(() => {
    if (userSession.isUserSignedIn() && isIdle) {
      userSession.signUserOut();
      history.push('/signin');
      setShowModal(true);
    }
  }, [isIdle]);

  return (
    <Modal showModal={showModal}>
      <Wrapper>
        <Img src={sleepingFaceImg} />
        <Text>
          Your session has timed out due to inactivity. Please, re-login or
          exit.
        </Text>
        <Button onClick={() => setShowModal(false)}>Ok, thanks</Button>
      </Wrapper>
    </Modal>
  );
};

export default SessionExpiredModal;
