import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// @ts-ignore
import createActivityDetector from 'activity-detector';

import { Wrapper, Img, Text } from './styled';
import Button from '../../../components/forms/Button/Button';
import sleepingFaceImg from '../../../images/sleeping-face.png';
import { getSettings } from '../../../store/user/selectors';
import { userSession } from '../../../utils/blockstack';
import Modal from '../../../components/shared/Modal/Modal';

const SessionExpiredModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const settings = useSelector(getSettings);
  const history = useHistory();
  const timeout = settings?.timeout;

  useEffect(() => {
    if (timeout) {
      const activityDetector = createActivityDetector({
        timeToIdle: timeout,
        inactivityEvents: [],
      });
      activityDetector.on('idle', () => setIsIdle(true));
      activityDetector.on('active', () => setIsIdle(false));
      return () => activityDetector.stop();
    }
  }, [timeout]);

  useEffect(() => {
    if (userSession.isUserSignedIn() && isIdle) {
      userSession.signUserOut();
      history.push('/signin');
      setShowModal(true);
    }
  }, [history, isIdle]);

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
